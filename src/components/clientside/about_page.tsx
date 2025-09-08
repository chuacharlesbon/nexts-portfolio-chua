import { FC } from "react";

interface PageProps {
    dict: Record<string, string>;
    locale: string;
}

export const AboutComponent: FC<PageProps> = ({ dict, locale }) => {
    return <div className="bg-white h-full" style={{ padding: 24 }}>
        <section>
            <div className="relative w-full md:w-md mx-auto flex flex-col md:flex-row items-center justify-center md:justify-end my-8">
                <img alt="profile" className="rounded-full w-60 h-60 fade-in-right" src={locale === "en" ? "/images/profile_square.png" : "/images/profile_square_cartoon.png"} />
                <div className="mt-4 md:mt-0 md:absolute md:left-0 md:top-1/3 fade-in-left-delayed-300ms">
                    <p className="title text-xl md:text-2xl text-stone-900 text-center md:text-left">{dict.name}</p>
                    <hr className="text-stone-500" />
                    <p className="title text-md text-stone-900 text-center md:text-left">{dict.profession}</p>
                </div>
            </div>
        </section>
    </div>
}