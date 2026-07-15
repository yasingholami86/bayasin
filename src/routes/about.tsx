import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Youtube } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yasin, Automation Engineer" },
      {
        name: "description",
        content:
          "Yasin builds AI-powered automation systems with n8n, APIs and modern LLMs. Meet the engineer behind Yasin Labs.",
      },
      { property: "og:title", content: "About — Yasin Labs" },
      { property: "og:description", content: "Automation engineer building AI systems in public." },
    ],
  }),
  component: About,
});

const skills = [
  { group: "Automation", items: ["n8n", "Make", "Zapier", "Airflow", "cron/systemd"] },
  { group: "AI / LLM", items: ["OpenAI", "Anthropic", "Replicate", "LangChain", "Vector DBs"] },
  { group: "Data", items: ["PostgreSQL", "Redis", "Playwright", "Python", "TypeScript"] },
  { group: "Delivery", items: ["Docker", "Vercel", "Grafana", "GitHub Actions", "Supabase"] },
];

const timeline = [
  { year: "2022", title: "First automations", detail: "Personal scripts to remove boring tasks." },
  { year: "2023", title: "n8n & AI agents", detail: "Started shipping production workflows." },
  { year: "2024", title: "Yasin Labs", detail: "Launched a personal brand around automation." },
  { year: "2025", title: "Building in public", detail: "YouTube channel, open case studies." },
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs font-mono uppercase tracking-widest text-brand">// About</p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        Hi, I'm <span className="text-gradient">Yasin</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        I build AI-powered automation systems using n8n, APIs and modern technologies. My goal is to
        transform repetitive business processes into intelligent systems that run 24/7 — so teams can
        spend time on the work only humans should do.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { label: "Workflows shipped", value: "50+" },
          { label: "Tasks automated", value: "100k+" },
          { label: "Uptime average", value: "99.2%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface/60 p-6">
            <p className="font-display text-3xl font-semibold text-brand">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <section className="mt-20">
        <h2 className="font-display text-3xl font-semibold">Stack</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-border bg-surface/60 p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-brand">{s.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-md border border-border bg-background/40 px-3 py-1 text-sm font-mono">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-20">
        <h2 className="font-display text-3xl font-semibold">Journey</h2>
        <div className="mt-8 space-y-4">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6 rounded-xl border border-border bg-surface/60 p-6">
              <div className="font-mono text-sm text-brand w-16 flex-none">{t.year}</div>
              <div>
                <p className="font-display text-lg font-semibold">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="mt-20 rounded-2xl border border-brand/30 bg-gradient-to-br from-surface via-surface to-background p-10">
        <p className="text-xs font-mono uppercase tracking-widest text-brand">// Vision</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">
          Yasin Labs is more than a portfolio.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          It's an evolving AI automation ecosystem — case studies, tutorials, open workflows and
          eventually agency-scale services. If you're building a business that shouldn't be run by
          hand, this is the lab for you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground">
            See the work <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://youtube.com/@ba_yasin"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-brand"
          >
            <Youtube className="h-4 w-4" /> Watch on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
