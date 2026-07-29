import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-y border-card-border bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Production experience across the full stack — from UI to cloud infra and AI tooling.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-card-border bg-card p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-highlight">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-card-border bg-background/60 px-3 py-1 text-xs text-muted"
                  >
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
