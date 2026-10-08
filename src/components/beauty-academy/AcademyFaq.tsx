"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/beauty-academy";

export function AcademyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--academy-border)] rounded-2xl border border-[var(--academy-border)] bg-[var(--academy-cream)]">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-semibold text-[var(--academy-foreground)]">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-[var(--academy-green)] transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--academy-muted)]">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
