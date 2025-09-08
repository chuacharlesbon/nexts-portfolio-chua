"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { FC } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

interface SwitchProps {}

export const LanguageSwitcher: FC<any> = () => {
    const params = useParams();
    const pathname = usePathname();
    const screenSize = useScreenSize();

    const currentLocale = params.lang as string;
    const otherLocale = currentLocale === "en" ? "ja" : "en";
    console.log(`${currentLocale},${otherLocale}`);

    // Replace the current locale in the path
    const tempPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
    const newPath = screenSize === "desktop" ? tempPath : `${tempPath}?menu=open`;

    return (
        <Link href={newPath}>
            <button className="p-2 text-stone-900 text-sm flex flex-row items-center justify-center border-stone-900 hover:border-b">
                <img src={`/logo/${otherLocale}-icon.png`} alt="chibi front" className="h-6 w-6 rounded-full mr-4 border border-stone-300" />
                <p>{otherLocale === "en" ? "English" : "日本語"}</p>
            </button>
        </Link>
    );
}
