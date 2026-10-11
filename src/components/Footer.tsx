import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} · Mobile & Web Developer
        </p>
        <ul className="flex gap-6">
          <li><a className="ulink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a className="ulink" href={`mailto:${profile.email}`}>Email</a></li>
          <li><a className="ulink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
        <p className="opacity-60">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
