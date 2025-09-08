"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function AppLogo() {
    const params = useParams();

    const currentLocale = params.lang as string;
    const otherLocale = currentLocale === "en" ? "ja" : "en";
    console.log(`${currentLocale},${otherLocale}`);

    return (
        <Link href={`/${currentLocale}`}>
            <button className="p-2 rounded-md text-stone-900 flex flex-row items-center justify-center">
                <img src="favicon.ico" alt="app-logo" className="h-12 w-12 rounded-full" />
                <p className="title mt-2">Chaaruzu</p>
            </button>
        </Link>
    );
}
