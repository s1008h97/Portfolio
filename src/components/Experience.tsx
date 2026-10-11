"use client";

// Experience Section
import { useLang } from "@/lib/i18n";
import { awards, education, experience, sideWork } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();
  return (
    <Section id="experience" label={t({ ko: "경력", en: "Experience" })}>
      <ol>
        {experience.map((e, i) => (
          <li key={e.company} className="border-t border-ink first:border-t-0 first:pt-0">
            <Reveal className="grid gap-4 py-10 md:grid-cols-[1fr_1.5fr] md:gap-10">
              <div>
                <h3 className="font-display text-4xl font-bold leading-none tracking-tight md:text-5xl">
                  {e.company}
                  {e.draft && <sup className="ml-2 font-sans text-xs font-normal text-accent">draft</sup>}
                </h3>
                <p className="mt-3 text-muted">{t(e.role)}</p>
                <p className="mt-1 font-serif text-lg italic text-muted">{e.period}</p>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {e.bullets.map((b, k) => (
                    <li key={k} className="border-b border-line pb-2.5">
                      {t(b)}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">{e.tech.join(" · ")}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-8 border-t-2 border-ink pt-8">
        <h3 className="font-serif text-xl italic text-muted">{t({ ko: "프리랜서", en: "Freelance" })}</h3>
        <ul className="mt-3">
          {sideWork.map((w) => (
            <li key={w.name} className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-6">
              <p className="text-sm text-muted">
                {w.period}
              </p>
              <div>
                <p className="font-display text-lg font-bold tracking-tight">{w.name}</p>
                <p className="text-sm text-muted">{t(w.role)}</p>
                <p className="mt-2">{t(w.desc)}</p>
                <p className="mt-3 text-sm text-muted">{w.tech.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid gap-12 border-t-2 border-ink pt-8 md:grid-cols-2">
        <div>
          <h3 className="font-serif text-xl italic text-muted">{t({ ko: "학력", en: "Education" })}</h3>
          <ul className="mt-3">
            {education.map((e) => (
              <li key={e.period} className="flex justify-between gap-4 border-b border-line py-3">
                <span>
                  {t(e.school)} <span className="text-muted">· {e.degree}</span>
                </span>
                <span className="shrink-0 text-sm text-muted">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl italic text-muted">{t({ ko: "수상 · 자격", en: "Awards & certificates" })}</h3>
          <ul className="mt-3">
            {awards.map((a, i) => (
              <li key={i} className="flex justify-between gap-4 border-b border-line py-3">
                <span>{t(a.title)}</span>
                <span className="shrink-0 text-sm text-muted">{a.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
