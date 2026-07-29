import { Mail, Link2, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="border-t border-card-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-card-border bg-gradient-to-br from-card to-background p-8 md:p-12">
          <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="mt-3 max-w-xl text-muted">
            Open to full-stack engineering roles, contract work, and technical
            assessments. Happy to walk through architecture decisions or live-code
            a solution.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-card-border bg-background/50 p-4 transition hover:border-accent/40"
            >
              <Mail className="text-accent" size={20} />
              <span className="text-sm">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 rounded-xl border border-card-border bg-background/50 p-4 transition hover:border-accent/40"
            >
              <Phone className="text-accent" size={20} />
              <span className="text-sm">{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-card-border bg-background/50 p-4 transition hover:border-accent/40"
            >
              <Link2 className="text-accent" size={20} />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-card-border bg-background/50 p-4">
              <MapPin className="text-accent" size={20} />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
