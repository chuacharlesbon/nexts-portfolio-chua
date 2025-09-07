import { MyLoadingAvatarScreen } from "@/components/my_loading_avatar"
import { MetaInfo } from "@/constants/meta_info"
import { Metadata } from "next"

export const metadata: Metadata = {
    openGraph: {
        title: `${MetaInfo.og.title} | Test`,
        description: MetaInfo.og.description,
        images: [
            {
                url: MetaInfo.og.image,
            },
        ],
    },
}

export default function Test() {
    return (
        <MyLoadingAvatarScreen/>
    )
}