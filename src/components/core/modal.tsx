"use client";

import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import AppLogo from "./app_logo";
import { LanguageSwitcher } from "./language_button";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ButtonProps {
    className?: string;
    onClose: any;
    isOpen: boolean;
    menu?: any;
    dict?: Record<string, string>;
    locale?: string;
}

interface ModalTopProps {
    onClose: any;
    isOpen: boolean;
    title: string;
    desc: string;
}

export const ModalMenuLeft: FC<ButtonProps> = ({
    menu, onClose, isOpen
}) => {

    const router = useRouter();

    const handleHome = () => {
        router.push('/home');
    }

    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog
                as="div"
                className="fixed h-full w-full inset-0 z-50 overflow-hidden ml-auto bg-gradient-to-r from-transparent to-stone-700"
                onClose={onClose}
            >
                <div className="h-full text-center flex justify-start">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease duration-700 transform"
                        enterFrom="opacity-0 -translate-x-full"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease duration-1000 transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-full"
                    >
                        <div
                            className="h-full w-full overflow-hidden text-left z-20 py-5 items-center
                align-middle transition-all transform bg-white shadow-xl flex flex-col"
                        >
                            <button className="block mx-2 px-2 py-1 cursor-pointer" onClick={() => handleHome()}>
                                <p className="italic hidden">Welcome!</p>
                                <p className="text-stone-900">Logo</p>
                            </button>

                            {
                                menu
                                    ? menu[0].links.map((value: any) => (
                                        <Link
                                            className={`w-full py-5 text-base font-bold text-stone-900 text-stone-900 underline-offset-8 hover:border-r-4 text-center`}
                                            key={value.name}
                                            href={value.url ?? value.link}
                                        >
                                            {/* <i className={`${value.icon} w-14 text-2xl`} /> */}
                                            <span className="">{value.name}</span>
                                        </Link>
                                    ))
                                    : <></>
                            }
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export const ModalMenuRight: FC<ButtonProps> = ({
    menu, onClose, isOpen, dict, locale
}) => {

    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog
                as="div"
                className="fixed h-full w-full inset-0 z-50 overflow-hidden ml-auto bg-gradient-to-r from-transparent to-stone-700"
                onClose={onClose}
            >
                <div className="h-full text-center flex justify-end">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease duration-700 transform"
                        enterFrom="opacity-0 translate-x-full"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease duration-1000 transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-full"
                    >
                        <div
                            className="h-full w-72 overflow-hidden text-left z-20 py-2 items-center
            align-middle transition-all transform bg-beige shadow-xl flex flex-col relative"
                        >
                            <button className="absolute top-0 right-0 block mx-2 mt-6 px-2 py-2 cursor-pointer" onClick={onClose}>
                                <FaTimes className={`text-lg text-stone-700`} />
                            </button>
                            <AppLogo isDarkText={true} />
                            <div className="w-full my-3" />
                            {
                                menu
                                    ? menu[0].links.map((value: any) => (
                                        <Link
                                            className={`w-full py-5 underline-offset-8 hover:border-r-4 text-center`}
                                            key={value.name}
                                            href={`/${locale}${value.link}`}
                                            onClick={onClose}
                                        >
                                            {/* <i className={`${value.icon} w-14 text-2xl`} /> */}
                                            <span className="title text-dark-beige">{dict![value.name]}</span>
                                        </Link>
                                    ))
                                    : <></>
                            }
                            <div className="w-full my-3" />
                            <LanguageSwitcher isDarkText={true} />
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export const ModalTop: FC<ModalTopProps> = ({
    onClose, isOpen, title, desc
}) => {

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50 focus:outline-none"
                onClose={onClose}
            >
                {/* Background overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30" />
                </Transition.Child>

                <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-4">
                        {/* Panel transition */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="-translate-y-10 opacity-0"
                            enterTo="translate-y-0 opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="translate-y-0 opacity-100"
                            leaveTo="-translate-y-10 opacity-0"
                        >
                            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl shadow-lg">
                                <DialogTitle
                                    className="title text-stone-900"
                                >
                                    {title}
                                </DialogTitle>
                                <p className="mt-2 text-sm/6 text-stone-900">
                                    {desc}
                                </p>
                                <div className="mt-4 hidden">
                                    <button
                                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-stone-900 shadow-inner shadow-white/10 hover:bg-gray-600 focus:outline-none"
                                        onClick={onClose}
                                    >
                                        CLICK
                                    </button>
                                </div>
                            </DialogPanel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}