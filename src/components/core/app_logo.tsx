"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AppLogo: FC<{ isDarkText?: boolean }> = ({ isDarkText }) => {
    const params = useParams();

    const currentLocale = params.lang as string;
    const otherLocale = currentLocale === "en" ? "ja" : "en";
    console.log(`${currentLocale},${otherLocale}`);

    return (
        <Link href={`/${currentLocale}`}>
            <button className="p-2 rounded-md flex flex-row items-center justify-center">
                <Image src="/favicon.ico" alt="app-logo" className="h-12 w-12 rounded-full bg-white" height={48} width={48} />
                <p className={`${isDarkText ? "text-dark-beige" : "text-light-beige"} title m-2`}>Chaaruzu</p>
            </button>
        </Link>
    );
}

export default AppLogo;
