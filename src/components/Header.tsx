"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { nav, profile } from "@/data/portfolio";

export default function Header() {
  const { lang, toggle, t } = useLang();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  // Navigation active section highlight
  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const switchTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  };

  const txt = "text-sm transition hover:text-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-sm transition ${active === n.id ? "text-accent" : "text-muted hover:text-ink"}`}
            >
              {t(n.label)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={toggle} className={txt} aria-label="Switch language">
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button onClick={switchTheme} className={txt} aria-label="Toggle theme">
            {dark ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`${txt} md:hidden`}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="fixed inset-x-0 top-14 bottom-0 bg-bg px-5 py-6 md:hidden" aria-label="Mobile">
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-5 font-serif text-4xl italic"
                >
                  {t(n.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
