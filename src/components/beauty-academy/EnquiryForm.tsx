"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { courses } from "@/data/beauty-academy";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--academy-border)] bg-[var(--academy-cream)] px-8 py-16 text-center">
        <CheckCircle2 className="text-[var(--academy-green)]" size={48} />
        <p className="academy-serif mt-4 text-2xl font-semibold">Thank you</p>
        <p className="mt-2 max-w-sm text-sm text-[var(--academy-muted)]">
          This is a demo form — your academy can connect it to email or a CRM.
          We&apos;ll be in touch within one working day.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-[var(--academy-green-deep)] underline-offset-4 hover:underline"
          onClick={() => setSent(false)}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="academy-card rounded-2xl p-8 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-[var(--academy-foreground)]">First name</span>
          <input
            required
            name="firstName"
            className="mt-2 w-full rounded-xl border border-[var(--academy-border)] bg-white px-4 py-3 text-sm outline-none ring-[var(--academy-green)]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-[var(--academy-foreground)]">Last name</span>
          <input
            required
            name="lastName"
            className="mt-2 w-full rounded-xl border border-[var(--academy-border)] bg-white px-4 py-3 text-sm outline-none ring-[var(--academy-green)]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-[var(--academy-foreground)]">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-[var(--academy-border)] bg-white px-4 py-3 text-sm outline-none ring-[var(--academy-green)]/30 focus:ring-2"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-[var(--academy-foreground)]">
            Course of interest
          </span>
          <select
            name="course"
            className="mt-2 w-full rounded-xl border border-[var(--academy-border)] bg-white px-4 py-3 text-sm outline-none ring-[var(--academy-green)]/30 focus:ring-2"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} — demo pricing
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-[var(--academy-foreground)]">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your goals and preferred start date…"
            className="mt-2 w-full resize-none rounded-xl border border-[var(--academy-border)] bg-white px-4 py-3 text-sm outline-none ring-[var(--academy-green)]/30 focus:ring-2"
          />
        </label>
      </div>
      <button
        type="submit"
        className="academy-btn-primary mt-6 w-full rounded-full py-3.5 text-sm font-semibold sm:w-auto sm:px-10"
      >
        Send enquiry
      </button>
    </form>
  );
}
