import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Star, XCircle } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { Counter } from "@/components/site/Counter";
import { StatusDot } from "@/components/site/StatusDot";
import { getProject, projects, type Project } from "@/data/projects";
import { ProjectGallery } from "@/components/ui/project_gallery";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Yasin Labs" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Yasin Labs case study` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Yasin Labs` },
        { property: "og:description", content: p.summary },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">پروژه پیدا نشد</h1>
      <Link to="/projects" className="mt-6 inline-block text-brand">← همه پروژه‌ها</Link>
    </div>
  ),
  });
  
  function Stars({ n }: { n: number }) {
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < n ? "fill-brand text-brand" : "text-muted-foreground/40"}`}
          />
        ))}
      </div>
    );
  }
  
  function ProjectDetail() {
    const { project: p } = Route.useLoaderData() as { project: Project };
    const idx = projects.findIndex((x) => x.slug === p.slug);
    const next = projects[(idx + 1) % projects.length];
  
    const chartData = [
      { name: "دوشنبه", tasks: 1200 },
      { name: "سه‌شنبه", tasks: 1850 },
      { name: "چهارشنبه", tasks: 1620 },
      { name: "پنجشنبه", tasks: 2100 },
      { name: "جمعه", tasks: 2380 },
      { name: "شنبه", tasks: 1420 },
      { name: "یکشنبه", tasks: 1780 },
    ];
  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-brand">
            <ArrowLeft className="h-3 w-3" /> All projects
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest">
            <span className="rounded-md border border-border bg-surface/60 px-2 py-1 text-muted-foreground">
              {p.category}
            </span>
            <span className="flex items-center gap-2 rounded-md border border-border bg-surface/60 px-2 py-1">
              <StatusDot tone={p.status === "Live" ? "live" : "beta"} />
              {p.status}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3 w-3" /> {new Date(p.createdAt).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
            </span>
            <span className="text-muted-foreground">Built by Yasin</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {p.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{p.summary}</p>

          <div className="mt-10 flex flex-wrap gap-2">
            {p.technologies.map((t) => (
              <span key={t} className="rounded-md border border-border bg-surface/60 px-3 py-1.5 text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-brand">// Impact Dashboard</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Live metrics</h2>

        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            { label: "Tasks executed", value: p.metrics.tasksExecuted, suffix: "" },
            { label: "Time saved", value: p.metrics.hoursSaved, suffix: "h" },
            { label: "Cost reduction", value: p.metrics.costReduction, prefix: "$", suffix: "" },
            { label: "Success rate", value: p.metrics.successRate, suffix: "%", decimals: 1 },
          ].map((m, i) => (
            <div key={m.label} className="bg-surface/80 p-6">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.label}</p>
              <p className={`mt-2 font-display text-3xl font-semibold ${i === 3 ? "text-brand" : ""}`}>
                <Counter to={m.value} prefix={m.prefix ?? ""} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface/60 p-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Executions · last 7 days
            </p>
            <p className="font-mono text-xs text-brand">+18% vs prev</p>
          </div>
          <div className="mt-6 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="oklch(0.68 0.02 260)" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis stroke="oklch(0.68 0.02 260)" fontSize={11} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="tasks" radius={[6, 6, 0, 0]}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={i === chartData.length - 1 ? "var(--brand)" : "oklch(0.4 0.05 260)"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
      {p.gallery && (
  <ProjectGallery images={p.gallery} />
  
)}

  </section>
      {/* Problem / Solution */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
  <div className="rounded-xl border border-destructive/30 bg-surface/60 p-8">
    <p className="text-xs font-mono uppercase tracking-widest text-destructive">// مشکل</p>

    <h2 className="mt-3 font-display text-2xl font-semibold">
      قبل از اتوماسیون
    </h2>

    <ul className="mt-6 space-y-3">
      {p.problem.map((x) => (
        <li key={x} className="flex items-start gap-3 text-sm">
          <XCircle className="mt-0.5 h-4 w-4 flex-none text-destructive" /> {x}
        </li>
      ))}
    </ul>
  </div>

  <div className="rounded-xl border border-brand/30 bg-surface/60 p-8">
    <p className="text-xs font-mono uppercase tracking-widest text-brand">// نتیجه</p>

    <h2 className="mt-3 font-display text-2xl font-semibold">
      بعد از اتوماسیون
    </h2>

    <ul className="mt-6 space-y-3">
      {p.after.map((x) => (
        <li key={x} className="flex items-start gap-3 text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand" /> {x}
        </li>
      ))}
    </ul>
  </div>
</section>

      {/* Workflow */}
      <section className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-xs font-mono uppercase tracking-widest text-brand">// راهکار</p>

  <h2 className="mt-3 font-display text-3xl font-semibold">
    معماری گردش‌کار
  </h2>

  <p className="mt-2 max-w-2xl text-muted-foreground">
    کل پایپ‌لاین اتوماسیون، مرحله به مرحله و نود به نود.
  </p>

  <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-surface/60 p-8">
    <div className="flex min-w-max items-center gap-3">
      {p.workflow.map((step, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="group relative rounded-lg border border-border bg-background/60 px-5 py-4 transition-colors hover:border-brand/60">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              نود {String(i + 1).padStart(2, "0")}
            </p>

            <p className="mt-1 font-display text-sm font-semibold">{step}</p>
          </div>

          {i < p.workflow.length - 1 && (
            <div className="flex items-center">
              <div className="h-px w-6 bg-brand/60" />
              <ArrowLeft className="h-4 w-4 text-brand" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Before vs After table */}
      <section className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-xs font-mono uppercase tracking-widest text-brand">// قبل و بعد</p>

  <h2 className="mt-3 font-display text-3xl font-semibold">
    تحول ایجاد شده
  </h2>

  <div className="mt-8 overflow-hidden rounded-xl border border-border">
    <div className="grid grid-cols-2 bg-surface/80 text-xs font-mono uppercase tracking-widest">
      <div className="border-r border-border p-4 text-muted-foreground">
        قبل
      </div>

      <div className="p-4 text-brand">
        بعد
      </div>
    </div>

    {p.before.map((b, i) => (
      <div key={i} className="grid grid-cols-2 border-t border-border">
        <div className="border-r border-border bg-surface/40 p-4 text-sm text-muted-foreground">
          {b}
        </div>

        <div className="bg-surface/60 p-4 text-sm">
          {p.after[i] ?? "—"}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Architecture */}
      <section className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-xs font-mono uppercase tracking-widest text-brand">// معماری</p>

  <h2 className="mt-3 font-display text-3xl font-semibold">
    نمودار سیستم
  </h2>

  <div className="mt-8 rounded-xl border border-border bg-surface/60 p-10">
    <div className="mx-auto max-w-md space-y-2">
      {p.architecture.map((layer, i) => (
        <div key={i}>
          <div className="rounded-lg border border-border bg-background/60 px-6 py-4 text-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              لایه {i + 1}
            </p>

            <p className="mt-1 font-display font-semibold">{layer}</p>
          </div>

          {i < p.architecture.length - 1 && (
            <div className="mx-auto my-1 h-6 w-px bg-brand/60" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-16">
  <p className="text-xs font-mono uppercase tracking-widest text-brand">// زمان‌بندی</p>

  <h2 className="mt-3 font-display text-3xl font-semibold">
    گزارش توسعه
  </h2>

  <div className="mt-10 grid gap-4 md:grid-cols-4">
    {p.timeline.map((t, i) => (
      <div key={i} className="rounded-xl border border-border bg-surface/60 p-6">
        <p className="text-xs font-mono uppercase tracking-widest text-brand">
          {t.day}
        </p>

        <h3 className="mt-2 font-display text-base font-semibold">
          {t.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {t.detail}
        </p>
      </div>
    ))}
  </div>
</section>


{/* تاثیر تجاری + امتیازدهی */}
<section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
  <div className="rounded-xl border border-border bg-surface/60 p-8">
    <p className="text-xs font-mono uppercase tracking-widest text-brand">// تاثیر تجاری</p>

    <h2 className="mt-3 font-display text-2xl font-semibold">
      چه چیزی بهبود پیدا کرد
    </h2>

    <ul className="mt-6 space-y-3">
      {p.impact.map((x) => (
        <li key={x} className="flex items-start gap-3 text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand" /> {x}
        </li>
      ))}
    </ul>
  </div>

  <div className="rounded-xl border border-border bg-surface/60 p-8">
    <p className="text-xs font-mono uppercase tracking-widest text-brand">// ارزیابی فنی</p>

    <h2 className="mt-3 font-display text-2xl font-semibold">
      امتیاز پروژه
    </h2>

    <div className="mt-6 space-y-4">
      {[
        { label: "پیچیدگی", n: p.complexity },
        { label: "سطح هوش مصنوعی", n: p.aiLevel },
        { label: "سطح اتوماسیون", n: p.automationLevel },
        { label: "تاثیر تجاری", n: p.businessImpact },
      ].map((r) => (
        <div key={r.label} className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{r.label}</p>
          <Stars n={r.n} />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Next */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between rounded-2xl border border-border bg-surface/60 p-8 transition-colors hover:border-brand/60"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Next case study</p>
            <p className="mt-2 font-display text-2xl font-semibold">{next.title}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-2 group-hover:text-brand" />
        </Link>
      </section>
    </div>
  );
}
