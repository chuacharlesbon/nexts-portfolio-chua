import { getDictionary } from "@/lib/i18n/getDictionary";
import { Locale } from "@/lib/i18n/config";
import { Metadata } from "next";
import { MetaInfo } from "@/constants/meta_info";
import { HomeComponent } from "@/components/clientside/home_page";

type Props = {
    params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const currentParams = await params;
    const dict = await getDictionary(currentParams.lang as Locale);
    return {
        title: dict.metaTitle,         // localized <title>
        description: dict.metaDesc, // localized description
        openGraph: {
            title: dict.metaTitle,         // localized <title>
            description: dict.metaDesc, // localized description
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
        <HomeComponent dict={dict} locale={currentParams.lang} />
    );
}
