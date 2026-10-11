"use client";

// Work screens: non-interactive auto-scrolling strip, every card shares one stage ratio
import { useLang } from "@/lib/i18n";
import { apps } from "@/data/portfolio";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

type App = (typeof apps)[number];

function Shot({ a, hidden }: { a: App; hidden?: boolean }) {
  const src = asset(`/apps/${a.image}`);
  const alt = hidden ? "" : `${a.name} screenshot`;

  // Raw phone screenshot inside a phone frame that bleeds off the bottom of the stage
  if (a.device === "phone")
    return (
      <div className="absolute inset-x-0 bottom-0 top-6 mx-auto w-[46%] rounded-t-[1.6rem] bg-[#111] p-[5px] pb-0 shadow-xl ring-1 ring-black/20">
        <div className="relative h-full overflow-hidden rounded-t-[1.3rem] bg-black">
          <img src={src} alt={alt} draggable={false} loading="lazy" className="w-full" />
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
        </div>
      </div>
    );

  // Landscape tablet
  if (a.device === "tablet")
    return (
      <div className="absolute inset-0 m-auto h-fit w-[84%] rounded-[0.9rem] bg-[#111] p-[6px] shadow-xl ring-1 ring-black/20">
        <img src={src} alt={alt} draggable={false} loading="lazy" className="w-full rounded-[0.5rem]" />
      </div>
    );

  // Browser window
  if (a.device === "browser")
    return (
      <div className="absolute inset-0 m-auto h-fit w-[88%] overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black/15">
        <div className="flex items-center gap-1 bg-[#e9e9e9] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 h-3 flex-1 rounded bg-white/80" />
        </div>
        <img src={src} alt={alt} draggable={false} loading="lazy" className="w-full" />
      </div>
    );

  // Images that already include their own device mockup (transparent PNG)
  if (a.device === "contained")
    return <img src={src} alt={alt} draggable={false} loading="lazy" className="absolute inset-0 m-auto h-[90%] w-[90%] object-contain drop-shadow-xl" />;

  // Marketing images that already include their own device
  return <img src={src} alt={alt} draggable={false} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />;
}

function Card({ a, hidden }: { a: App; hidden?: boolean }) {
  const { t } = useLang();
  return (
    <li className="w-64 shrink-0 pr-5 md:w-80" aria-hidden={hidden || undefined}>
      <div className="relative aspect-[10/9] overflow-hidden bg-line">
        <Shot a={a} hidden={hidden} />
      </div>
      <p className="mt-3 flex items-baseline justify-between gap-2">
        <span className="font-display text-lg font-bold tracking-tight">{a.name}</span>
        <span className="text-xs text-muted">{a.where}</span>
      </p>
      <p className="mt-0.5 text-sm text-muted">{t(a.desc)}</p>
    </li>
  );
}

export default function Apps() {
  const { t } = useLang();
  return (
    <section id="apps" className="overflow-hidden border-t border-line bg-bg2">
      <div className="mx-auto max-w-6xl px-5 pt-24 md:pt-36">
        <Reveal>
          <h2 className="font-serif text-2xl italic md:text-3xl">{t({ ko: "작업 화면", en: "Selected screens" })}</h2>
        </Reveal>
      </div>

      <div className="marquee-viewport pointer-events-none select-none py-12 md:py-16" role="list" aria-label="Selected screens">
        <ul className="marquee-track">
          {apps.map((a) => (
            <Card key={a.name} a={a} />
          ))}
          {apps.map((a) => (
            <Card key={`${a.name}-copy`} a={a} hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
