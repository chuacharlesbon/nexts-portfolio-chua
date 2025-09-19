"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { IoIosSend } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";

interface PageProps {
    dict: Record<string, string>;
    locale: string;
}

export const ContactComponent: FC<PageProps> = () => {
    const { t } = useTranslation();
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleChangeMsg = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (loading) {
            return;
        } else {
            setLoading(true);

            try {
                const formData = new FormData(event.currentTarget);
                const res = await fetch("/api/app/inquiry", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: formData.get("name"),
                        email: formData.get("email"),
                        message: formData.get("message"),
                        captcha: captchaToken,
                    }),
                });

                console.log(res);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
    };

    return <div className="bg-beige w-full min-h-screen mt-20 mx-0 flex flex-col justify-center items-center p-4">
        <form className="bg-[rgba(255,255,255,0.5)] shadow-md p-4 rounded-md grid grid-cols-4 gap-y-2 gap-x-4 w-full md:w-3/5 lg:w-1/2" onSubmit={handleSubmit}>
            <input className="col-span-4 lg:col-span-2 bg-white px-4 py-2 rounded-md text-stone-900 border border-stone-300" name="name" placeholder={t('nameForm')} type="name" value={fullName} onChange={handleChangeName} />
            <input className="col-span-4 lg:col-span-2 bg-white px-4 py-2 rounded-md text-stone-900 border border-stone-300" name="email" placeholder={t('emailForm')} type="email" value={email} onChange={handleChangeEmail} />
            <textarea className="col-span-4 bg-white px-4 py-2 rounded-md text-stone-900 border border-stone-300" name="message" placeholder={t('messageForm')} rows={4} value={message} onChange={handleChangeMsg} />
            <button className="col-span-4 flex flex-row justify-center items-center bg-stone-900 text-white uppercase font-semibold py-2 rounded-md" disabled={loading} type="submit">
                {
                    loading
                        ? <FaSpinner className="text-xl mr-4 animate-spin" />
                        : <IoIosSend className="text-xl mr-4" />
                }
                {t('sendForm')}
            </button>

            {/* reCAPTCHA */}
            <div className="col-span-4 flex flex-row justify-center items-center">
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "N/A"}
                    onChange={setCaptchaToken}
                />
            </div>
        </form>
    </div>
}