/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

export const LanguageSwitcher: FC<{ isDarkText?: boolean }> = ({ isDarkText }) => {
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
            <button className={`${isDarkText ? "text-dark-beige" : "text-light-beige"} p-2 text-sm flex flex-row items-center justify-center border-beige hover:border-b`}>
                <Image src={`/logo/${otherLocale}-icon.png`} alt="chibi front" className="h-6 w-6 rounded-full mr-4 border border-stone-300" height={24} width={24} />
                <p>{otherLocale === "en" ? "English" : "日本語"}</p>
            </button>
        </Link>
    );
}
