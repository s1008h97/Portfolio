import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif-var", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://s1008h97.github.io/Portfolio/"),
  title: "Seohyeon Kim — Mobile & Web Developer",
  description: "9+ years building Android, iOS and web products. NFC, payments, Supabase, and product planning.",
  openGraph: {
    type: "website",
    url: "https://s1008h97.github.io/Portfolio/",
    siteName: "Seohyeon Kim — Portfolio",
    title: "Seohyeon Kim — Mobile & Web Developer",
    description: "모바일·웹 개발자 김서현의 포트폴리오. Android, iOS, NFC 결제와 서비스 기획 경험을 소개합니다.",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{
      url: "https://s1008h97.github.io/Portfolio/portfolio-share-v2.jpg",
      width: 1200,
      height: 630,
      alt: "Seohyeon Kim — Mobile & Web Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seohyeon Kim — Mobile & Web Developer",
    description: "Android, iOS, web development and product planning.",
    images: ["https://s1008h97.github.io/Portfolio/portfolio-share-v2.jpg"],
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${bricolage.variable} ${serif.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LangProvider>
          <MotionConfig reducedMotion="user">
            <Cursor />
            <Header />
            <main>{children}</main>
            <Footer />
          </MotionConfig>
        </LangProvider>
      </body>
    </html>
  );
}
