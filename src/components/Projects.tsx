import { ExternalLink, Code2, Building2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { CodeSnippet } from "./CodeSnippet";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Interactive demos inspired by production work. Employer systems are
          described as case studies — live code demonstrates the same patterns.
        </p>

        <div className="mt-12 space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-2xl border border-card-border bg-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.employerWork && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs text-amber-300">
                        <Building2 size={12} />
                        Production case study
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">{project.name}</h3>
                  <p className="mt-1 text-highlight">{project.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.problem}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-muted before:content-['→'] before:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background px-2.5 py-1 text-xs font-mono text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-soft transition"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-card-border px-4 py-2 text-sm hover:bg-background transition"
                      >
                        <Code2 size={14} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="border-t border-card-border bg-background/40 p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
                    Architecture
                  </p>
                  <ArchitectureDiagram type={project.architecture} />
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      Approach
                    </p>
                    <CodeSnippet code={project.codeSnippet} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
