import { getDictionary } from "@/lib/i18n/getDictionary";
import { Locale } from "@/lib/i18n/config";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const currentParams = await params;
    const dict = await getDictionary(currentParams.lang as Locale);
    return {
        title: dict.hello,         // localized <title>
        description: dict.welcome, // localized description
    };
}

export default async function Page({ params }: { params: { lang: Locale } }) {
    const currentParams = await params;
    const dict = await getDictionary(currentParams.lang);
    return (
        <div style={{ padding: 24 }}>
            <h1>{dict.hello}</h1>
            <p>{dict.welcome}</p>
            <p>Test</p>
        </div>
    );
}
