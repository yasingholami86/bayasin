import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Youtube, MessageSquare, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yasin Labs" },
      {
        name: "description",
        content: "Have a process that shouldn't be manual? Start an automation project with Yasin Labs.",
      },
      { property: "og:title", content: "Contact — Yasin Labs" },
      { property: "og:description", content: "Start an automation project with Yasin Labs." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs font-mono uppercase tracking-widest text-brand">// Contact</p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        Let's automate <span className="text-gradient">something</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Tell me what you're doing by hand today. I'll come back within 48 hours with what it looks
        like automated — and whether it's worth doing.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-surface/60 p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/20 text-brand">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold">Message received</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I'll reply within 48 hours. In the meantime, browse the case studies.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</span>
                  <input
                    required
                    className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</span>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Company / project</span>
                <input className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand" />
              </label>
              <label className="block">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  What manual process should be automated?
                </span>
                <textarea
                  rows={6}
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
              </label>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Budget</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["< $2k", "$2–5k", "$5–10k", "$10k+"].map((b) => (
                    <label key={b} className="cursor-pointer rounded-md border border-border bg-background/40 px-3 py-1.5 text-xs font-mono hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-brand-foreground">
                      <input type="radio" name="budget" value={b} className="sr-only" />
                      {b}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-[0_0_40px_-10px_var(--brand-glow)] transition-transform hover:scale-[1.02]"
              >
                Send message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>

        <div className="space-y-4">
          <a href="mailto:hello@yasinlabs.dev" className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-6 hover:border-brand">
            <Mail className="h-5 w-5 text-brand" />
            <div>
              <p className="font-display font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">hello@yasinlabs.dev</p>
            </div>
          </a>
          <a href="https://youtube.com/@ba_yasin" target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-6 hover:border-brand">
            <Youtube className="h-5 w-5 text-brand" />
            <div>
              <p className="font-display font-semibold">YouTube</p>
              <p className="text-sm text-muted-foreground">@ba_yasin — automation tutorials</p>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 p-6">
            <MessageSquare className="h-5 w-5 text-brand" />
            <div>
              <p className="font-display font-semibold">Response time</p>
              <p className="text-sm text-muted-foreground">Under 48 hours, Mon–Fri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
