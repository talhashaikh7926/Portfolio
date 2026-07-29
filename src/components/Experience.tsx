import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-t border-card-border bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        <div className="mt-10 space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="relative rounded-xl border border-card-border bg-card p-6 md:p-8"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <time className="mt-2 text-sm font-mono text-muted md:mt-0">
                  {job.period}
                </time>
              </div>
              <ul className="mt-5 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
