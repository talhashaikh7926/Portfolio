import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted">
            I build production-grade web platforms end to end — from React/Next.js
            frontends to Node.js APIs, cloud deployments on AWS/GCP, and
            third-party integrations with Shopify, Salesforce, and payment
            providers.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Currently completing an MSc in Big Data & AI at the University of
            Derby (Distinction track), with a dissertation achieving R² of 0.9867
            on retail sales forecasting. I pick up unfamiliar stacks fast and
            bias toward shipping.
          </p>
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Experience", value: "4+ years" },
            { label: "Location", value: profile.location },
            { label: "Education", value: "MSc Big Data & AI" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-card-border bg-card p-5"
            >
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-1 text-lg font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
