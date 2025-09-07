"use client";
import { useTranslation } from "react-i18next"
import { FC } from "react"
import { ImSpinner3 } from "react-icons/im"

export const MyLoadingAvatar: FC = () => {
    return (
        <div className="chibi-spin mx-auto">
            <img src="/images/avatar_front_white.png" alt="chibi front" className="front" />
            <img src="/images/avatar_back_white.png" alt="chibi back" className="back" />
        </div>
    )
}

export const MyLoadingAvatarScreen: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="h-full w-full bg-white flex flex-col justify-center items-center">
            <div className="relative h-48 w-full">
                <MyLoadingAvatar />
                <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center items-center">
                    <ImSpinner3 className="block text-center text-2xl text-stone-900 animate-spin" />
                    <p className="text-stone-900 font-bold mt-4">{t('welcome')}</p>
                </div>
            </div>
        </div>
    )
}