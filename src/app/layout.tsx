import type { Metadata } from "next";
import localFont from "next/font/local";
import "../shared/styles/globals.css";
import Header from "@/widgets/Header/Header";

const pretendard = localFont({
    src: "../assets/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
})

const doldam = localFont({
    src: "../assets/fonts/EF_jejudoldam(TTF).ttf",
    variable: "--font-doldam",
})

export const metadata: Metadata = {
  title: "공부의 숲",
  description: "시작해봐요 공부의 숲",
    icons: {
        icon: "../assets/images/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" className={`${pretendard.variable} ${doldam.variable}`}>
        <body className="bg-[#F6F4EF] font-pretendard">
        <main>
            <Header />
            {children}
        </main>
        </body>
        </html>
    );
}