"use client";
import { FC } from "react";
import { FlexColumn } from "../core/boxes/FlexColumn";
import { IntersectionObserverDiv } from "../core/boxes/Div";
import { ResponsiveLgFlexRow } from "../core/boxes/FlexRow";
import { MyCarousel } from "../carousel";
import { appleImages, prospernaImages, xtendlyImages, zuittCerts, zuittJlptImages } from "@/constants/app_data";
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
                <p className="title text-3xl text-light-beige text-center mb-12">{dict.about}</p>
                <p className="w-60 md:w-lg text-light-beige text-center mx-auto mt-8">{dict.aboutDescription}</p>
            </FlexColumn>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section className="">
            <FlexColumn className="w-full py-4 lg:py-10 items-center justify-center">
                <p className="title text-3xl text-light-beige text-center my-12">{dict.workExperience}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-left-delayed-300ms shadow-lg" src="/images/prosperna.png" />
                        <div className="h-2 w-20" />
                        <div className="w-60 md:w-72 xl:w-md fade-in-right-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.prospernaTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">January 2024 - April 2025</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.prospernaDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-light-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.prospernaDesc2}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.prospernaDesc3}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.prospernaDesc4}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={prospernaImages} />
                </IntersectionObserverDiv>
            </FlexColumn>
            <div className="p-10" />
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <div className="hidden lg:block w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.xtendlyTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">May 2022 - December 2023</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.xtendlyDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-light-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc2}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc3}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                        <div className="hidden lg:block h-2 w-20" />
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-right-delayed-300ms shadow-lg" src="/images/xtendly.png" />
                        <div className="lg:hidden h-2 w-20" />
                        <div className="lg:hidden w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.prospernaTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">May 2022 - December 2023</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.xtendlyDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-light-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc2}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc3}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={xtendlyImages} />
                </IntersectionObserverDiv>
            </FlexColumn>

            <p className="w-60 md:w-72 lg:w-lg text-light-beige text-center mx-auto my-12"><span className="text-red-500">*</span>{dict.projectsInfo}</p>
        </section>

        {/* TRAININGS AND SEMINARS SECTION */}
        <section className="">
            <FlexColumn className="w-full py-4 lg:py-10 items-center justify-center">
                <p className="title text-3xl text-light-beige text-center my-12">{dict.trainingTitle}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-left-delayed-300ms shadow-lg" src="/images/zuitt_jlpt.png" />
                        <div className="h-2 w-20" />
                        <div className="w-60 md:w-72 xl:w-md fade-in-right-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.zuittJlptTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">May 2024 - October 2024</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.zuittJlptDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-light-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.zuittJlptDesc2}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.zuittJlptDesc3}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.zuittJlptDesc4}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={zuittJlptImages} />
                </IntersectionObserverDiv>
            </FlexColumn>
            <div className="p-10" />
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <div className="hidden lg:block w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.zuittBootcampTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">Feb 2022 - Apr 2022</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.zuittBootcampDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-light-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc2}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc3}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                        <div className="hidden lg:block h-2 w-20" />
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-right-delayed-300ms shadow-lg" src="/images/zuitt.png" />
                        <div className="lg:hidden h-2 w-20" />
                        <div className="lg:hidden w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.zuittBootcampTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">Feb 2022 - Apr 2022</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.zuittBootcampDesc}</p>
                            <Disclosure>
                                <DisclosureButton className="w-full flex flex-row justify-center lg:justify-start"><p className="title text-light-beige text-center lg:text-left my-4 underline">{dict.otherDetails}</p></DisclosureButton>
                                <DisclosurePanel className="w-full">
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc2}</p>
                                    <p className="text-light-beige text-center lg:text-left mb-2">{dict.xtendlyDesc3}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={zuittCerts} />
                </IntersectionObserverDiv>
            </FlexColumn>
            <div className="p-10" />
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <img alt="jlpt" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-left-delayed-300ms shadow-lg" src="/images/apple.png" />
                        <div className="h-2 w-20" />
                        <div className="w-60 md:w-72 xl:w-md fade-in-right-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.appleTitle}</p>
                            <p className="text-light-beige text-center lg:text-left mb-4">December 2023</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.appleDesc}</p>
                        </div>
                    </ResponsiveLgFlexRow>
                    <MyCarousel dict={dict} locale={locale} images={appleImages} />
                </IntersectionObserverDiv>
            </FlexColumn>
        </section>

        {/* EDUCATION SECTION */}
        <section className="">
            <FlexColumn className="w-full py-10 lg:py-20 items-center justify-center">
                <p className="title text-3xl text-light-beige text-center my-12">{dict.educationSection}</p>
            </FlexColumn>
            <FlexColumn className="w-full items-center justify-center">
                <IntersectionObserverDiv>
                    <ResponsiveLgFlexRow className="w-full items-center justify-center">
                        <div className="hidden lg:block w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.educationTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.educationDesc}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.educationDesc2}</p>
                        </div>
                        <div className="hidden lg:block h-2 w-20" />
                        <img alt="zuitt-cert" className="object-contain my-4 w-60 xl:w-md rounded-md fade-in-right-delayed-300ms shadow-lg" src="/images/tip.png" />
                        <div className="lg:hidden h-2 w-20" />
                        <div className="lg:hidden w-60 md:w-72 xl:w-md fade-in-left-delayed-750ms">
                            <p className="title text-light-beige text-center lg:text-left text-2xl mb-4">{dict.educationTitle}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.educationDesc}</p>
                            <p className="text-light-beige text-center lg:text-left">{dict.educationDesc2}</p>
                        </div>
                    </ResponsiveLgFlexRow>
                </IntersectionObserverDiv>
            </FlexColumn>
        </section>

        <div className="h-80" />
    </div>
}