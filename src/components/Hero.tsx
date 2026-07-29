import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden grid-bg">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-highlight">
          Full Stack Engineer · London
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-soft"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium transition hover:border-accent/50 hover:bg-card"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="/Talha-Shaikh-CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium transition hover:border-accent/50 hover:bg-card"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <div className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-sm leading-relaxed text-amber-100/90">
          <strong className="text-amber-200">Note for recruiters:</strong>{" "}
          {profile.employerNote}
        </div>
      </div>
    </section>
  );
}
