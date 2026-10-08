import Image from "next/image";
import { Clock } from "lucide-react";
import type { Course } from "@/data/beauty-academy";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className={`academy-card group relative flex flex-col overflow-hidden rounded-2xl transition duration-300 ${
        course.featured ? "ring-2 ring-[var(--academy-green)]/30" : ""
      }`}
    >
      {course.offer && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--academy-gold)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--academy-bg-deep)]">
          Offer
        </span>
      )}
      {course.comingSoon && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--academy-lavender)] px-3 py-1 text-xs font-semibold text-[var(--academy-green-deep)]">
          Coming soon
        </span>
      )}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--academy-bg-deep)]/70 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--academy-green-deep)]">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        {course.level && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--academy-green)]">
            {course.level}
          </p>
        )}
        {course.cpdApproved && (
          <p className="text-xs font-medium text-[var(--academy-muted)]">
            CPD approved · Provider 789692
          </p>
        )}
        <h3 className="academy-serif mt-1 text-2xl font-semibold text-[var(--academy-foreground)]">
          {course.title}
        </h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-[var(--academy-muted)]">
          <Clock size={14} className="shrink-0 text-[var(--academy-green)]" />
          {course.duration}
        </p>
        <ul className="mt-4 flex-1 space-y-2 text-sm text-[var(--academy-muted)]">
          {course.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--academy-green)]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-[var(--academy-border)] pt-5">
          <div>
            {course.comingSoon ? (
              <p className="text-sm font-medium text-[var(--academy-muted)]">
                Details &amp; price coming soon
              </p>
            ) : course.price != null ? (
              <>
                <p className="text-xs uppercase tracking-wider text-[var(--academy-muted)]">
                  {course.category === "CPD" ? "From" : "Course fee"}
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="academy-serif text-3xl font-semibold text-[var(--academy-green-deep)]">
                    {formatPrice(course.price)}
                  </p>
                  {course.compareAtPrice != null && (
                    <p className="text-lg text-[var(--academy-muted)] line-through">
                      {formatPrice(course.compareAtPrice)}
                    </p>
                  )}
                </div>
                {course.priceNote && (
                  <p className="text-xs text-[var(--academy-muted)]">{course.priceNote}</p>
                )}
              </>
            ) : (
              <p className="text-sm font-medium">Enquire for fees</p>
            )}
          </div>
          <a
            href={course.category === "CPD" ? "https://hindas.co.uk/pages/academy" : "#contact"}
            className="academy-btn-outline shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition"
            {...(course.category === "CPD"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {course.category === "CPD" ? "Book online" : "Enquire"}
          </a>
        </div>
      </div>
    </article>
  );
}
