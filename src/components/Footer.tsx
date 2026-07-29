import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & TypeScript.</p>
        <div className="flex gap-6">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
