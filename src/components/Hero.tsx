"use client";

// Hero Section
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { facts, profile } from "@/data/portfolio";
import Rich from "./Rich";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-28 pb-20 md:pt-32 md:pb-28">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 flex justify-between text-sm text-muted"
      >
        <span>{t(profile.role)}</span>
        <span>
          {profile.years} {t({ ko: "년 경력", en: "years" })}
        </span>
      </motion.p>

      <h1 className="font-display text-[clamp(4.2rem,15.5vw,13.5rem)] font-bold leading-[0.82] tracking-[-0.05em]">
        <span className="block overflow-hidden pb-[0.18em] -mb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            Seohyeon
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.18em] -mb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            Kim<span className="text-accent">.</span>
          </motion.span>
        </span>
      </h1>

      <div className="mt-14 grid gap-12 border-t border-ink pt-8 md:mt-20 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease }}>
          <p className="whitespace-pre-line text-3xl font-semibold leading-snug tracking-tight md:text-[2.6rem] md:leading-[1.2]">
            <Rich text={t(profile.headline)} />
          </p>
          <p className="mt-6 max-w-lg text-lg text-muted">{t(profile.intro)}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#projects" className="bg-ink px-6 py-3.5 text-sm font-medium text-bg transition hover:bg-accent hover:text-accent-ink">
              {t({ ko: "프로젝트 보기", en: "View projects" })} ↓
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="ulink text-sm font-medium">
              GitHub ↗
            </a>
            <a href="#contact" className="ulink text-sm font-medium">
              Contact ↗
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease }}
          className="self-start"
        >
          {facts.map((f) => (
            <div key={f.k.en} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line py-3.5 first:pt-0">
              <dt className="font-serif text-lg italic text-muted">{t(f.k)}</dt>
              <dd>{t(f.v)}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
