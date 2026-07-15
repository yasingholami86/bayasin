import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Youtube, Zap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-brand-foreground">
                <Zap className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold">Yasin Labs</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Intelligent automation systems that help businesses save time, reduce manual work, and
              scale operations. Built by Yasin.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://youtube.com/@ba_yasin"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface transition-colors hover:border-brand hover:text-brand"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface transition-colors hover:border-brand hover:text-brand"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface transition-colors hover:border-brand hover:text-brand"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Follow the journey</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://youtube.com/@ba_yasin" target="_blank" rel="noreferrer" className="hover:text-foreground">
                  YouTube · @ba_yasin
                </a>
              </li>
              <li>n8n tutorials</li>
              <li>AI agent builds</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Yasin Labs. Automation, engineered.</p>
          <p className="font-mono">v1.0 · built by Yasin</p>
        </div>
      </div>
    </footer>
  );
}
