import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-brand text-brand-foreground">
            <Zap className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold tracking-tight">Yasin Labs</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              سیستم‌های اتوماسیون
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: "/", label: "خانه" },
            { to: "/projects", label: "نمونه‌کارها" },
            { to: "/about", label: "درباره من" },
            { to: "/contact", label: "تماس با من" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-[0_0_30px_-8px_var(--brand-glow)] transition-transform hover:scale-[1.03]"
        >
          شروع همکاری
        </Link>
      </div>
    </header>
  );
}