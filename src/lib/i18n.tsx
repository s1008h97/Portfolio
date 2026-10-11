"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "ko" | "en";
export type L = { ko: string; en: string };

type Ctx = { lang: Lang; toggle: () => void; t: (v: L) => string };

const LangContext = createContext<Ctx>({ lang: "ko", toggle: () => {}, t: (v) => v.ko });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ko" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      try {
        localStorage.setItem("lang", next);
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback((v: L) => v[lang], [lang]);

  return <LangContext.Provider value={{ lang, toggle, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
