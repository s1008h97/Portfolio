import Reveal from "./Reveal";

// Editorial layout: small label on the left, content on the right
export default function Section({
  id,
  label,
  tone = "bg",
  children,
}: {
  id: string;
  label: string;
  tone?: "bg" | "bg2" | "ink";
  children: React.ReactNode;
}) {
  const tones = {
    bg: "bg-bg text-ink border-t border-line",
    bg2: "bg-bg text-ink border-t border-line",
    ink: "bg-bg text-ink border-t border-line",
  };
  return (
    <section id={id} className={tones[tone]}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[11rem_1fr] md:gap-12 md:py-36">
        <Reveal>
          <h2 className="font-serif text-2xl italic md:sticky md:top-24 md:text-3xl">{label}</h2>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
