/* eslint-disable @typescript-eslint/no-explicit-any */
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FC } from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { FlexColumn } from "./core/boxes/FlexColumn";

interface CarouselProps {
    images: any[];
    dict: Record<string, string>;
    locale: string;
}

export const MyCarousel: FC<CarouselProps> = ({ images, dict }) => {

    return (
        <FlexColumn className="w-full items-center justify-center my-4">
            <Disclosure>
                <DisclosureButton className="px-8 py-4 shadow-md rounded-md border border-dark-beige hover-bg-beige"><p className="title text-light-beige text-center">{dict.viewMore}</p></DisclosureButton>
                <DisclosurePanel className="">
                    <div className="p-4 w-60 md:w-lg lg:w-xl xl:w-3xl mx-auto mt-10 fade-in-delayed-750ms">
                        <ImageGallery items={images} />
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </FlexColumn>
    )
}
