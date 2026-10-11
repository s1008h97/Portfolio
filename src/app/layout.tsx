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
  title: "Seohyeon Kim — Full-stack Developer",
  description: "9+ years across Android, web and backend. NFC, payments, Supabase, and product planning.",
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
