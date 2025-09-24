/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { FC } from "react";

interface CardProps {
    item: any;
    dict: Record<string, string>;
    locale?: string;
}

export const ContactCard: FC<CardProps> = ({ item, dict }) => {
    return <Link className="m-2 px-8 py-4 shadow-xl rounded-md grid grid-cols-12 items-center w-full md:w-3/5 lg:w-1/3 xl:w-1/4 hover:border border-dark-beige" href={item.link}>
        {item.icon}
        <div className="col-span-12 md:col-span-10">
            <p className="title text-dark-beige text-left">{dict[item.title]}</p>
            <p className="text-dark-beige text-left text-sm">{item.value}</p>
        </div>

    </Link>
}