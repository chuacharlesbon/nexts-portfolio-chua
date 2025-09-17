import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import { MetaInfo } from "@/constants/meta_info";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // headings
});

export const metadata: Metadata = {
  title: MetaInfo.title,
  description: MetaInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/242641079.js"></script>
      <Script
          id="gtag-root-1"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-8EG7WTTNQT"
        />
        <Script id="gtag-root-2" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8EG7WTTNQT', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
