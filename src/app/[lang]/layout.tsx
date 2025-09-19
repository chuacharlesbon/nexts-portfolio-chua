import { Footer } from "@/components/core/footer";
import { Navbar } from "@/components/core/navbar";
import { I18nProvider } from "@/components/I18nProvider";
import { i18nConfig, Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export async function generateStaticParams() {
    return i18nConfig.locales.map((lang) => ({ lang }));
}

export default async function LanguageRootLayout({
    children,
    params, // params is async!
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params; // ✅ await here
    const dict = await getDictionary(lang as Locale);

    return (
        <main>
            <I18nProvider
                locale={lang}
                resources={{ [lang]: { translation: dict } }}
            >
                <Navbar dict={dict} locale={lang} />
                {children}
                <Footer />
            </I18nProvider>
        </main>
    );
}
