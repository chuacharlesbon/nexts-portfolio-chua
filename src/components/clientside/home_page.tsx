"use client";
import { FC, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";

interface PageProps {
    dict: Record<string, string>;
    locale: string;
}

export const HomeComponent: FC<PageProps> = ({ dict, locale }) => {

    const [showMessage, setShowMessage] = useState(false);

    return <div className="bg-white h-full">
        <section className="py-24">
            {
                showMessage
                    ? <p className="title text-center text-stone-900 fade-in">Test Message</p>
                    : <p>...</p>
            }
            <div className="w-full flex flex-row items-center justify-center">
                <p className="title w-96 text-2xl text-stone-900 text-right fade-in-delayed-1250ms">{dict.name}</p>
                <div className="relative h-96 w-60">
                    <button className="hidden" onClick={() => setShowMessage(prev => !prev)}>
                        <LuMessageCircleMore className="absolute top-0 right-0 text-4xl text-stone-900 shake-icon" />
                    </button>
                    <img alt="profile" className="h-96 w-60 object-cover object-center fade-in-left-delayed-300ms" src="/images/avatar_cartoon.png" />
                </div>
                <p className="title w-96 text-2xl text-stone-900 text-left fade-in-delayed-750ms">{dict.profession}</p>
            </div>
        </section>
    </div>
}