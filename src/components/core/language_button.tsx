"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
    const params = useParams();
    const pathname = usePathname();

    const currentLocale = params.lang as string;
    const otherLocale = currentLocale === "en" ? "ja" : "en";
    console.log(`${currentLocale},${otherLocale}`);

    // Replace the current locale in the path
    const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

    return (
        <Link href={newPath}>
            <button>
                {otherLocale === "en" ? "English" : "日本語"}
            </button>
        </Link>
    );
}
