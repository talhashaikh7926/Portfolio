"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import { academy } from "@/data/beauty-academy";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#video", label: "Clinic" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function AcademyNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--academy-border)] bg-[rgba(247,248,246,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/beauty-academy" className="group">
          <span className="academy-serif text-2xl font-semibold tracking-wide text-[var(--academy-foreground)]">
            {academy.name}
          </span>
          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.25em] text-[var(--academy-muted)] group-hover:text-[var(--academy-green)]">
            Hair &amp; Beauty Academy
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--academy-muted)] transition hover:text-[var(--academy-green-deep)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={academy.parentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--academy-muted)] hover:text-[var(--academy-green-deep)]"
          >
            Main site
            <ExternalLink size={14} />
          </a>
          <a
            href={`sms:${academy.phone}`}
            className="academy-btn-secondary rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Text to reserve
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-[var(--academy-foreground)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--academy-border)] px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`sms:${academy.phone}`}
                className="academy-btn-secondary mt-2 inline-block rounded-full px-5 py-2.5 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Text to reserve
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
