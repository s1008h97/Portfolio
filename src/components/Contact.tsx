"use client";

// Contact / Final CTA
import { useLang } from "@/lib/i18n";
import { contact, profile } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="border-t border-line bg-bg text-ink">
      <div className="mx-auto max-w-6xl px-5 py-28 md:py-44">
        <Reveal>
          <h2 className="whitespace-pre-line font-display text-[clamp(2.6rem,8vw,7rem)] font-bold leading-[0.98] tracking-[-0.04em]">
            {t(contact.headline)}
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="ulink mt-14 inline-block break-all font-serif text-3xl italic text-accent md:text-5xl"
          >
            {profile.email}
          </a>
          <ul className="mt-8 flex gap-8 text-sm font-medium">
            <li><a className="ulink" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
            <li><a className="ulink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
