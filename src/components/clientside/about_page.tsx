"use client";
import { FC } from "react";
import { FlexColumn } from "../core/boxes/FlexColumn";
import { IntersectionObserverDiv } from "../core/boxes/Div";
import { ResponsiveLgFlexRow } from "../core/boxes/FlexRow";
import { MyCarousel } from "../carousel";
import { prospernaImages } from "@/constants/app_data";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface PageProps {
    dict: Record<string, string>;
    locale: string;
}

export const AboutComponent: FC<PageProps> = ({ dict, locale }) => {
    return <div className="w-full h-full mt-20 mx-0">
        {/* AVATAR SECTION */}
        <section className="bg-beige py-4 lg:py-8">
            <div className="w-full md:w-lg lg:w-2xl mx-auto flex flex-col lg:flex-row items-center justify-center my-8">
                <div className="fade-in-left-delayed-300ms">
                    <p className="title text-xl md:text-2xl text-dark-beige text-center md:text-left">{dict.name}</p>
                    <hr className="text-dark-beige" />
                    <p className="title text-md text-dark-beige text-center md:text-left">{dict.profession}</p>
                </div>
                <div className="p-4" />
                <img alt="profile" className="rounded-full w-60 h-60 fade-in-right" src={locale === "en" ? "/images/profile_square.png" : "/images/profile_square_cartoon.png"} />
            </div>
        </section>

        {/* PERSONAL INFO SECTION */}
        <section className="">
            <FlexColumn className="w-full py-10 lg:py-20 items-center justify-center">
                <p className="title text-3xl text-beige text-center mb-12">{dict.about}</p>
                <p className="w-60 md:w-lg text-beige text-center mx-auto mt-8">{dict.aboutDescription}</p>
            </FlexColumn>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section className="">
            <FlexColumn className="w-full py-4 lg:py-10 items-center justify-center">
                <p className="title text-3xl text-beige text-center my-12">{dict.workExperience}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-left-delayed-300ms shadow-lg" src="/images/prosperna.png" />
                        <div className="h-2 w-20" />
                        <div className="w-60 md:w-72 xl:w-md fade-in-right-delayed-750ms">
                            <p className="title text-beige text-center lg:text-left text-2xl mb-4">{dict.prospernaTitle}</p>
                            <p className="text-beige text-center lg:text-left mb-4">January 2024 - April 2025</p>
                            <p className="text-beige text-center lg:text-left">{dict.prospernaDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-beige text-center lg:text-left mb-2">{dict.prospernaDesc2}</p>
                                    <p className="text-beige text-center lg:text-left mb-2">{dict.prospernaDesc3}</p>
                                    <p className="text-beige text-center lg:text-left mb-2">{dict.prospernaDesc4}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={prospernaImages} />
                </IntersectionObserverDiv>
            </FlexColumn>
        </section>
    </div>
}