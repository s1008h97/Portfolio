"use client";

// About Section
import { useLang } from "@/lib/i18n";
import { aboutText, featuredProjects, stats } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  const { t } = useLang();
  return (
    <Section id="about" label={t({ ko: "소개", en: "About" })} tone="bg2">
      <Reveal>
        <p className="text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-[1.25]">{t(aboutText)}</p>
      </Reveal>
      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <dt className="font-serif text-6xl leading-none md:text-7xl md:min-h-[4.5rem]">
              {"value" in s ? <CountUp to={"live" in s && s.live === "projects" ? featuredProjects.length : s.value!} suffix={s.suffix} /> : <span className="block font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">{s.text}</span>}
            </dt>
            <dd className="mt-3 border-t border-ink pt-2 text-sm text-muted">{t(s.label)}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
