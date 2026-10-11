"use client";

// Architecture / Interactive Tabs
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { deepDive } from "@/data/portfolio";
import Section from "./Section";

export default function DeepDive() {
  const { t } = useLang();
  const [id, setId] = useState(deepDive[0].id);
  const tab = deepDive.find((d) => d.id === id)!;

  return (
    <Section id="deep-dive" label={t({ ko: "기술 메모", en: "Tech notes" })}>
      <div role="tablist" aria-label="Topics" className="mb-12 flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
        {deepDive.map((d) => (
          <button
            key={d.id}
            role="tab"
            id={`tab-${d.id}`}
            aria-selected={id === d.id}
            aria-controls={`tabpanel-${d.id}`}
            onClick={() => setId(d.id)}
            className={`-mb-px border-b-2 pb-3 font-display text-xl font-bold tracking-tight transition md:text-2xl ${
              id === d.id ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-semibold leading-snug tracking-tight md:text-4xl">{t(tab.title)}</h3>
          <p className="mt-4 max-w-xl text-lg text-muted">{t(tab.lead)}</p>

          {tab.flow && (
            <ol className="mt-12 flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
              {tab.flow.map((step, i) => (
                <li key={step} className="flex items-center md:flex-1">
                  <span className="font-serif text-3xl italic text-accent">{i + 1}</span>
                  <span className="ml-3 font-medium">{step}</span>
                  {i < tab.flow!.length - 1 && <span aria-hidden className="mx-4 hidden h-px flex-1 bg-ink md:block" />}
                </li>
              ))}
            </ol>
          )}

          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {tab.items.map((it) => (
              <li key={it} className="border-t border-line py-3 text-muted">
                {it}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
