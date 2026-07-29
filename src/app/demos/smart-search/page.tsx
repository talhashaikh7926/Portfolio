"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Sparkles } from "lucide-react";
import { products, smartSearch } from "@/lib/smart-search";

const exampleQueries = [
  "comfortable running shoes under 80",
  "waterproof hiking boots",
  "yoga mat non-slip",
  "fitness tracker heart rate",
];

export default function SmartSearchDemo() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => smartSearch(query, products), [query]);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <div className="rounded-lg bg-accent/15 p-2">
            <Sparkles className="text-accent" size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Smart Search Engine</h1>
            <p className="text-sm text-muted">
              Demo using local semantic-style matching. Production system uses OpenAI embeddings + ElasticSearch.
            </p>
          </div>
        </div>

        <div className="relative mt-8">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            size={18}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "comfortable running shoes under 80"'
            className="w-full rounded-xl border border-card-border bg-card py-4 pl-12 pr-4 text-foreground outline-none focus:border-accent"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {exampleQueries.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setQuery(q)}
              className="rounded-full border border-card-border px-3 py-1 text-xs text-muted hover:border-accent/40 hover:text-foreground"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {query && (
            <p className="mb-4 text-sm text-muted">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {results.map((product) => (
              <article
                key={product.id}
                className="rounded-xl border border-card-border bg-card p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold">{product.name}</h2>
                  <span className="shrink-0 rounded bg-accent/15 px-2 py-0.5 text-xs font-mono text-accent">
                    {product.score.toFixed(0)} pts
                  </span>
                </div>
                <p className="mt-1 text-xs text-highlight">{product.category}</p>
                <p className="mt-2 text-sm text-muted">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-sm">£{product.price.toFixed(2)}</span>
                  <div className="flex gap-1">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-background px-2 py-0.5 text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {query && results.length === 0 && (
            <p className="text-center text-muted py-12">No products matched your query.</p>
          )}
        </div>
      </div>
    </main>
  );
}
