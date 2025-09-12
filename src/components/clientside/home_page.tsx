"use client";
import { FC, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { ResponsiveLgFlexRow } from "../core/boxes/FlexRow";
import { IntersectionObserverDiv } from "../core/boxes/Div";
import { MyCarousel } from "../carousel";
import { bookingApp, jlptCarousel, reportApp, zuittCerts } from "@/constants/app_data";
import { FlexColumn } from "../core/boxes/FlexColumn";

interface PageProps {
    dict: Record<string, string>;
    locale: string;
}

export const HomeComponent: FC<PageProps> = ({ dict, locale }) => {

    const [showMessage, setShowMessage] = useState(false);

    return <div className="w-full h-full mt-20 relative mx-0">
        {/* TOP SECTION */}
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-img-peach">
            {
                showMessage
                    ? <p className="hidden title text-center text-stone-900 fade-in">Test Message</p>
                    : <p className="hidden">...</p>
            }
            <input className="hidden w-60 lg:w-80 bg-stone-100 border border-stone-400 outline-stone-900 shadow-md rounded-full px-4 py-2 mb-4 text-stone-900 fade-in-delayed-1500ms" placeholder={dict.inputPlaceholder} type="search" />
            <p className="title text-dark-beige text-center lg:text-left fade-in-delayed-1500ms">{dict.tagline}</p>
            <ResponsiveLgFlexRow className="w-full items-center justify-center">
                <p className="hidden lg:block title w-60 md:w-96 text-lg lg:text-2xl text-dark-beige text-center lg:text-right fade-in-delayed-1250ms">{dict.name}</p>
                <div className="relative h-96 w-60">
                    <button className="hidden" onClick={() => setShowMessage(prev => !prev)}>
                        <LuMessageCircleMore className="absolute top-0 right-0 text-4xl text-stone-900 shake-icon" />
                    </button>
                    <img alt="profile" className="h-96 w-60 object-cover object-center fade-in-left-delayed-300ms" src="/images/avatar_cartoon.png" />
                </div>
                <p className="title w-60 md:w-96 text-lg lg:text-2xl text-dark-beige text-center lg:text-left fade-in-delayed-750ms">{dict.profession}</p>
                <p className="lg:hidden title w-60 md:w-96 text-lg lg:text-2xl text-dark-beige text-center lg:text-right fade-in-delayed-1250ms">{dict.name}</p>
            </ResponsiveLgFlexRow>
        </section>

        {/* FEATURED SECTION */}
        <section className="">
            <FlexColumn className="w-full py-10 lg:py-20 items-center justify-center">
                <p className="title text-3xl text-light-beige text-center my-12">{dict.featured}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-left-delayed-300ms shadow-lg" src="/images/jlpt.png" />
                        <div className="h-2 w-20" />
                        <div className="w-60 md:w-72 xl:w-md fade-in-right-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.jlptTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.jlptDescription}</p>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={jlptCarousel} />
                </IntersectionObserverDiv>
            </FlexColumn>
        </section>

        {/* ZUITT SECTION */}
        <section className="">
            <FlexColumn className="w-full py-10 lg:py-20 items-center justify-center">
                <p className="title text-3xl text-light-beige text-center my-12">{dict.growthSection}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <div className="hidden lg:block w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.zuittTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.zuittDesc}</p>
                        </div>
                        <div className="hidden lg:block h-2 w-20" />
                        <img alt="zuitt-cert" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-right-delayed-300ms shadow-lg" src="/images/docs/zuitt-fullstack-cert.jpeg" />
                        <div className="lg:hidden h-2 w-20" />
                        <div className="lg:hidden w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.zuittTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.zuittDesc}</p>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={zuittCerts} />
                </IntersectionObserverDiv>
            </FlexColumn>
        </section>

        {/* PROJECTS SECTION */}
        <section className="">
            <FlexColumn className="w-full py-10 lg:py-20 items-center justify-center">
                <p className="title text-3xl text-light-beige text-center my-12">{dict.projectsTitle}</p>
                <p className="text-light-beige text-center my-12"><span className="text-red-500">*</span>{dict.projectsInfo}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <img alt="booking-app" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-left-delayed-300ms shadow-lg" src="/images/wyn_logo.png" />
                        <div className="h-2 w-20" />
                        <div className="w-60 md:w-72 xl:w-md fade-in-right-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.bookingAppTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.bookingAppDesc}</p>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={bookingApp} />
                </IntersectionObserverDiv>
            </FlexColumn>
            <div className="p-10" />
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <div className="hidden lg:block w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.reportAppTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.reportAppDesc}</p>
                        </div>
                        <div className="hidden lg:block h-2 w-20" />
                        <img alt="ereport-app" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-right-delayed-300ms shadow-lg" src="/images/ereport_app_logo.png" />
                        <div className="lg:hidden h-2 w-20" />
                        <div className="lg:hidden w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.reportAppTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.reportAppDesc}</p>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={reportApp} />
                </IntersectionObserverDiv>
            </FlexColumn>
            <div className="py-20" />
        </section>
    </div>
}