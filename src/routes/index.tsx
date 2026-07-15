import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Cpu,
  Database,
  GitBranch,
  Github,
  LineChart,
  Sparkles,
  Workflow,
  Youtube,
  Zap,
} from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { StatusDot } from "@/components/site/StatusDot";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Home,
});

const heroStats = [
  { value: 50, suffix: "+", label: "Automation workflows built" },
  { value: 100000, suffix: "+", label: "Tasks automated" },
  { value: 3200, suffix: "+", label: "Hours saved" },
  { value: 99.2, suffix: "%", label: "Workflow reliability", decimals: 1 },
];

const capabilities = [
  { icon: Workflow, title: "Workflow Engineering", desc: "Robust n8n pipelines with retry, monitoring and versioning." },
  { icon: Bot, title: "AI Agents", desc: "Multi-step LLM agents with tools, memory and evaluation loops." },
  { icon: Database, title: "Data Pipelines", desc: "Scrape, clean, enrich and warehouse — end to end." },
  { icon: LineChart, title: "Impact Analytics", desc: "Every workflow ships with dashboards proving ROI." },
];

function Home() {
  const liveProjects = projects.filter((p) => p.liveStatus);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs w-fit font-mono">
            <StatusDot />
            <span className="text-muted-foreground">automation.systems</span>
            <span className="text-brand">/ online</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Transform manual processes into <span className="text-gradient">intelligent automated systems</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            AI-powered workflows engineered with n8n, APIs and modern LLMs. Yasin Labs builds
            production automation that saves thousands of hours and runs 24/7.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-[0_0_40px_-10px_var(--brand-glow)] transition-transform hover:scale-[1.03]"
            >
              Explore automation projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold hover:border-brand"
            >
              Start a project
            </Link>
          </div>

          {/* Stats grid */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-surface/80 p-6">
                <div className="font-display text-3xl font-semibold md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE STATUS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand">
              <StatusDot /> Live automation status
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Systems running right now
            </h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {liveProjects.slice(0, 6).map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-brand/60"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-success">
                  <StatusDot tone={p.status === "Live" ? "live" : "beta"} />
                  {p.status.toUpperCase()}
                </div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  {p.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
              <div className="mt-6 flex items-end justify-between border-t border-border/60 pt-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.liveStatus?.label}
                  </p>
                  <p className="font-mono text-sm text-brand">{p.liveStatus?.value}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-brand" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-brand">// Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            One engineer. Full-stack automation.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Yasin Labs designs, builds and operates automation systems end-to-end — from
            architecture to production monitoring.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-surface/60 p-6 transition-colors hover:bg-surface">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-brand">// Case studies</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Automation, with receipts.
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-8 transition-all hover:border-brand/60"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span>{p.category}</span>
                <span className="text-brand">{p.status}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background/40 px-2 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    <Counter to={p.metrics.tasksExecuted} />
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Tasks
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    <Counter to={p.metrics.hoursSaved} suffix="h" />
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Saved
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-brand">
                    <Counter to={p.metrics.successRate} decimals={1} suffix="%" />
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Reliability
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CREATOR STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-10 md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-brand">
                // Follow the journey
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Building AI automation, in public.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tutorials, teardowns and live builds of n8n workflows, AI agents and full
                automation systems — on the <span className="text-foreground">ba_yasin</span> YouTube channel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://youtube.com/@ba_yasin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
                >
                  <Youtube className="h-4 w-4" /> Subscribe on YouTube
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-brand"
                >
                  <Github className="h-4 w-4" /> Star on GitHub
                </a>
              </div>
            </div>
            <div className="relative rounded-xl border border-border bg-background/60 p-6 font-mono text-xs">
              <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                <span className="h-2 w-2 rounded-full bg-destructive/70" />
                <span className="h-2 w-2 rounded-full bg-chart-4/70" />
                <span className="h-2 w-2 rounded-full bg-success/70" />
                <span className="ml-2 text-muted-foreground">workflow.yaml</span>
              </div>
              <pre className="mt-4 leading-relaxed text-muted-foreground">
{`name: ai-news-agent
trigger: cron(*/15 * * * *)
steps:
  - scrape:   40 sources
  - llm:     `}<span className="text-brand">gpt-4o</span>{`
  - translate: en → ar
  - summarize: 3-bullets
  - store:    postgres
  - publish:  wordpress, telegram
status: `}<span className="text-success">✓ healthy</span>{`
uptime:  99.7%`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-surface via-surface to-background p-12 text-center md:p-16">
          <Sparkles className="mx-auto h-8 w-8 text-brand" />
          <h2 className="mt-6 font-display text-4xl font-semibold md:text-5xl">
            Have a process that shouldn't be manual?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me what you're doing by hand today. I'll show you what it looks like automated.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[0_0_40px_-10px_var(--brand-glow)] transition-transform hover:scale-[1.03]"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
