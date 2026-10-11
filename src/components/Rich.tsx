// Renders **marked** text with a hand-drawn underline
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <span key={i} className="relative inline-block whitespace-nowrap">
            {part}
            <svg
              aria-hidden
              viewBox="0 0 200 14"
              preserveAspectRatio="none"
              className="squiggle absolute -bottom-1 left-0 h-[0.28em] w-full text-accent"
            >
              <path d="M2 9 C 30 2, 50 12, 80 7 S 140 3, 198 8" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
