"use client";

// Featured Projects
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { featuredProjects } from "@/data/portfolio";
import Section from "./Section";

export default function Projects() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(featuredProjects[0].slug);

  return (
    <Section id="projects" label={t({ ko: "프로젝트", en: "Projects" })}>
      <p className="mb-8 text-muted">
        {t({ ko: "최신순 · 항목을 눌러 문제와 해결 과정을 확인하세요.", en: "Newest first · open an item to see the problem and solution." })}
      </p>
      <ul className="border-t-2 border-ink">
        {featuredProjects.map((p) => {
          const isOpen = open === p.slug;
          return (
            <li key={p.slug} className="border-b border-line">
              <button
                data-cursor
                onClick={() => setOpen(isOpen ? null : p.slug)}
                aria-expanded={isOpen}
                aria-controls={`panel-${p.slug}`}
                className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 text-left md:grid-cols-[7.5rem_1fr_auto]"
              >
                <span className="order-2 col-span-2 text-sm text-muted md:order-none md:col-span-1">{p.period}</span>
                <span className="order-1 md:order-none">
                  <span className="block font-display text-xl font-bold tracking-tight transition group-hover:text-accent md:text-2xl">
                    {t(p.name)}
                    {p.draft && <sup className="ml-2 font-sans text-xs font-normal text-accent">draft</sup>}
                  </span>
                  <span className="mt-1 block text-muted">{t(p.summary)}</span>
                </span>
                <span className={`order-1 text-2xl leading-none transition-transform md:order-none ${isOpen ? "rotate-45 text-accent" : ""}`}>+</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`panel-${p.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-10 md:grid-cols-[7.5rem_1fr]">
                      <div className="hidden md:block" />
                      <div className="space-y-6">
                        <Block label="Role">
                          <p>{t(p.role)}</p>
                          <p className="text-muted">{t(p.kind)}</p>
                        </Block>
                        <Block label="Problem">{t(p.problem)}</Block>
                        <Block label="Solution">{t(p.solution)}</Block>
                        <Block label="Contribution">
                          <ul className="space-y-1.5">
                            {p.contribution.map((c, k) => (
                              <li key={k} className="flex gap-3">
                                <span className="text-accent">→</span>
                                {t(c)}
                              </li>
                            ))}
                          </ul>
                        </Block>
                        <Block label="Tech">
                          <p className="text-muted">{p.tech.join(" · ")}</p>
                          {p.link && p.link.href !== "#" && (
                            <a href={p.link.href} target="_blank" rel="noreferrer" className="ulink mt-3 inline-block text-sm font-medium">
                              {p.link.label} ↗
                            </a>
                          )}
                        </Block>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 md:grid-cols-[7rem_1fr] md:gap-6">
      <h4 className="font-serif text-lg italic text-muted">{label}</h4>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
