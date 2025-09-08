import { AboutComponent } from "@/components/clientside/about_page";
import { Navbar } from "@/components/core/navbar";
import { MetaInfo } from "@/constants/meta_info";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const currentParams = await params;
    const dict = await getDictionary(currentParams.lang as Locale);
    return {
        title: `${dict.metaTitle} | About`,         // localized <title>
        description: `${dict.metaDesc} | About Page Description`, // localized description
        openGraph: {
            title: `${dict.metaTitle} | About`,         // localized <title>
            description: `${dict.metaDesc} | About Page Description`, // localized description
            images: [
                {
                    url: MetaInfo.og.image
                }
            ]
        }
    };
}

export default async function Page({ params }: { params: { lang: Locale } }) {
    const currentParams = await params;
    const dict = await getDictionary(currentParams.lang);
    return (
        <>
            <Navbar dict={dict} locale={currentParams.lang} />
            <AboutComponent dict={dict} locale={currentParams.lang} />
        </>
    );
}