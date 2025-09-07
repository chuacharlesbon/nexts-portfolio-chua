import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import { MetaInfo } from "@/constants/meta_info";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
