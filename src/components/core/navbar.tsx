'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FC } from "react";
import { ModalMenuLeft, ModalMenuRight } from "./modal";
import { IoMdMenu } from "react-icons/io";
import { Menu } from "@/constants/menu";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { LanguageSwitcher } from "./language_button";
import AppLogo from "./app_logo";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface DataProps {
    location?: string;
    menu?: any;
    sideMenu?: any;
    navbarClass?: string;
    dict: Record<string, string>;
    locale: string;
}

export const Navbar: FC<DataProps> = ({ location, menu, sideMenu, navbarClass, dict, locale }) => {

    const searchParams = useSearchParams();
    const isMenuOpen: boolean = (searchParams?.get('menu') ?? "") === "open";

    const router = useRouter();
    const pathname = usePathname();
    const [isMenuLeftOpen, setMenuLeftOpen] = React.useState(false);
    const [isMenuRightOpen, setMenuRightOpen] = React.useState(isMenuOpen);

    return (
        <>
            <nav className={navbarClass ?? "sticky top-0 bg-white relative z-40 px-4 py-0 lg:py-2 shadow-md"}>
                <ModalMenuLeft
                    onClose={() => setMenuLeftOpen(false)}
                    isOpen={isMenuLeftOpen}
                    menu={sideMenu}
                />
                <ModalMenuRight
                    onClose={() => setMenuRightOpen(false)}
                    isOpen={isMenuRightOpen}
                    menu={[
                        {
                            name: "Side Menu",
                            links: menu ?? Menu
                        }
                    ]}
                    dict={dict}
                    locale={locale}
                />
                <div className="w-full hidden lg:flex flex-row justify-between items-center">
                    <AppLogo />
                    <div className="flex flex-row">
                        {
                            menu
                                ? menu.map((item: any) => (
                                    <Link
                                        className={`hidden lg:block mx-2 px-2 py-1 duration-700 decoration-teal-600 underline-offset-8 hover:underline ${location?.includes(item.name) ? "underline" : ""}`}
                                        href={`/${locale}${item.link}`}
                                        key={item.name}>
                                        <p className="title text-teal-600">{dict[item.name]}</p>
                                    </Link>
                                ))
                                : Menu.map((item: any) => (
                                    <Link
                                        className={`hidden lg:block mx-2 px-2 py-1 duration-700 decoration-teal-600 underline-offset-8 hover:underline ${location?.includes(item.name) ? "underline" : ""}`}
                                        href={`/${locale}${item.link}`}
                                        key={item.name}>
                                        <p className="title text-teal-600">{dict[item.name]}</p>
                                    </Link>
                                ))
                        }
                    </div>
                    <LanguageSwitcher />
                </div>
                <div className="w-full h-20 lg:hidden flex flex-row justify-between items-center">
                    <AppLogo />
                    <button className="block mx-2 px-2 py-1" onClick={() => setMenuRightOpen(!isMenuRightOpen)}>
                        <IoMdMenu className="text-stone-900 text-2xl" />
                    </button>
                </div>
                {
                    pathname === "/ja" || pathname === "/en"
                        ? <></>
                        : <button className="p-4 absolute -bottom-14 cursor-pointer" onClick={() => router.back()}>
                            <IoArrowBackOutline className="text-stone-900 text-2xl" />
                        </button>
                }
            </nav>
        </>
    )
}