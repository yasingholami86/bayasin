import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { StatusDot } from "@/components/site/StatusDot";
import { categories, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Yasin Labs Automation Case Studies" },
      {
        name: "description",
        content:
          "Explore automation case studies built by Yasin Labs — AI agents, n8n workflows, scrapers and data pipelines with real metrics and business impact.",
      },
      { property: "og:title", content: "Projects — Yasin Labs" },
      {
        property: "og:description",
        content: "AI automation case studies with real metrics and architectures.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = projects.filter((p) => {
    const inCat = cat === "All" || p.category === cat;
    const inQ =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(q.toLowerCase()));
    return inCat && inQ;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-brand">// نمونه‌کارها</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
      پروژه‌های اتوماسیون، <span className="text-gradient">بر اساس نتیجه و تأثیر واقعی</span>.
    </h1>
        <p className="mt-4 text-muted-foreground">
        هر پروژه همراه با معیارهای عملکرد، معماری سیستم و مقایسه شفاف قبل و بعد ارائه می‌شود.
        اینجا فقط چند تصویر نمایشی از پروژه‌ها نمی‌بینید؛ بلکه نتایج واقعی و قابل اندازه‌گیری را مشاهده می‌کنید.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-md border px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                cat === c
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-surface/60 text-muted-foreground hover:border-brand/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search tech, project..."
            className="w-full rounded-md border border-border bg-surface/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all hover:border-brand/60 hover:-translate-y-1"
          >
            {/* Preview */}
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
  {p.gallery?.[0] ? (
    <>
      <img
        src={p.gallery[0].src}
        alt={p.gallery[0].alt ?? p.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* گرادینت برای خوانایی متن */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      {/* Badge ها */}
      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
        <span className="rounded-md border border-white/20 bg-black/40 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-white backdrop-blur">
          {p.category}
        </span>

        <div className="flex items-center gap-2 rounded-md border border-white/20 bg-black/40 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-white backdrop-blur">
          <StatusDot tone={p.status === "Live" ? "live" : "beta"} />
          {p.status}
        </div>
      </div>

      {/* Workflow پایین عکس */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
        {p.workflow.slice(0, 4).map((w, i) => (
          <span
            key={i}
            className="rounded bg-black/40 px-2 py-1 text-[10px] text-white backdrop-blur"
          >
            {w}
          </span>
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.88 0.22 130 / 0.25), transparent 60%)",
        }}
      />
    </>
  )}
</div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-background/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-4">
                <div>
                  <p className="font-display text-sm font-semibold">
                    <Counter to={p.metrics.tasksExecuted} />
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                    Tasks
                  </p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">
                    <Counter to={p.metrics.hoursSaved} suffix="h" />
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                    Saved
                  </p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-brand">
                    <Counter to={p.metrics.successRate} decimals={1} suffix="%" />
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                    Rate
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-mono text-brand opacity-0 transition-opacity group-hover:opacity-100">
                View case study <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-xl border border-border bg-surface/60 p-16 text-center text-muted-foreground">
          No projects match your filters.
        </div>
      )}
    </div>
  );
}
