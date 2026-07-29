import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-xl border border-card-border bg-card p-6"
            >
              <h3 className="font-semibold leading-snug">{item.degree}</h3>
              <p className="mt-2 text-sm text-accent">{item.school}</p>
              <p className="mt-1 text-xs text-muted">{item.period}</p>
              <p className="mt-3 inline-block rounded-full bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight">
                {item.grade}
              </p>
              {item.detail && (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
