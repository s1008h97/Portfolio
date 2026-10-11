"use client";

// Technical Skills
import { useLang } from "@/lib/i18n";
import { skillGroups } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLang();
  return (
    <Section id="skills" label={t({ ko: "기술", en: "Skills" })}>
      <div className="space-y-14">
        {skillGroups.map((g) => (
          <Reveal key={g.title}>
            <h3 className="border-b-2 border-ink pb-2 font-display text-2xl font-bold tracking-tight md:text-3xl">{g.title}</h3>
            <dl>
              {g.items.map((s) => (
                <div key={s.name} className="grid gap-1 border-b border-line py-4 md:grid-cols-[14rem_1fr] md:gap-6">
                  <dt className="font-medium">{s.name}</dt>
                  <dd className="text-muted">{t(s.note)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
