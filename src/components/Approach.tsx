"use client";

// Problem Solving / Engineering Approach
import { useLang } from "@/lib/i18n";
import { principles } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Approach() {
  const { t } = useLang();
  return (
    <Section id="approach" label={t({ ko: "일하는 방식", en: "Approach" })} tone="ink">
      <ol className="grid gap-x-12 gap-y-16 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={(i % 2) * 0.08}>
            <li>
              <span className="font-serif text-7xl italic leading-none text-accent md:text-8xl">{p.n}</span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">{t(p.title)}</h3>
              <p className="mt-3 max-w-sm text-muted">{t(p.body)}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
