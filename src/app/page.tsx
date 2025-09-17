import { MyLoadingAvatarScreen } from "@/components/my_loading_avatar";
import { MetaInfo } from "@/constants/meta_info";
import { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("ja" as Locale);
  return {
    title: dict.metaTitle,         // localized <title>
    description: dict.metaDesc, // localized description
    keywords: MetaInfo.keywords,
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

export default function Home() {
  return (
    <MyLoadingAvatarScreen />
  );
}
