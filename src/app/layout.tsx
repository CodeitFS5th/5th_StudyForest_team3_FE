import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const jeju = localFont({
  src: "../assets/fonts/JejuDoldam.woff2",
  display: "swap",
  variable: "--font-jeju",
});

export const metadata: Metadata = {
  title: "공부의 숲",
  description: "CodeIt 5기 3팀",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${jeju.variable} bg-custom-color-background`}
    >
      <body className="bg-background font-pretendard">
        <main>
          <Header />
          {children}
        </main>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
