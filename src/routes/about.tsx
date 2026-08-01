import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Play,
  Terminal,
  Bot,
  Workflow,
  Database,
  Boxes,
  Radio,
  Zap,
  Target,
  Sparkles,
  Youtube,
  Github,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره من — یاسین | Yasin Labs" },
      {
        name: "description",
        content:
          "یاسین، مهندس اتوماسیون هوش مصنوعی. طراحی و ساخت سیستم‌های خودکار، ایجنت‌های هوشمند و ورک‌فلوهایی که به‌جای انسان کار می‌کنند.",
      },
      { property: "og:title", content: "درباره من — Yasin Labs" },
      {
        property: "og:description",
        content: "سیستم‌هایی می‌سازم که به‌جای انسان کار می‌کنند.",
      },
    ],
  }),
  component: About,
});

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const badges = [
  { icon: Bot, label: "مهندس اتوماسیون هوش مصنوعی" },
  { icon: Boxes, label: "سازنده سیستم‌های هوشمند" },
  { icon: Workflow, label: "معمار ورک‌فلو" },
];

const terminalLines = [
  { cmd: "whoami", out: "یاسین" },
  { cmd: "mission", out: "خودکارسازی کارهای تکراری" },
  { cmd: "building", out: "ایجنت‌های هوش مصنوعی + سیستم‌های اتوماسیون" },
  { cmd: "philosophy", out: "اگر تکرار می‌شود، خودکارش کن." },
];

const story = [
  {
    year: "شروع",
    title: "یک سؤال ساده",
    text: "همه‌چیز از یک سؤال شروع شد: چرا باید انسان کاری را بارها و بارها تکرار کند، وقتی یک سیستم می‌تواند همان کار را بدون خستگی انجام دهد؟ همین سؤال مسیر من را ساخت.",
  },
  {
    year: "برنامه‌نویسی",
    title: "ورود به کد",
    text: "برنامه‌نویسی را نه برای ساختن اپ، بلکه برای حذف کارهای تکراری از زندگی خودم یاد گرفتم. اولین اسکریپت‌هایم زشت بودند، اما یک کار مهم را درست انجام می‌دادند: وقت من را پس می‌گرفتند.",
  },
  {
    year: "کشف اتوماسیون",
    title: "از اسکریپت به سیستم",
    text: "با n8n و ابزارهای اتوماسیون آشنا شدم و فهمیدم می‌توان فرآیندهای کامل کسب‌وکار را، نه فقط یک وظیفه، به‌صورت خودکار طراحی کرد.",
  },
  {
    year: "ترکیب با هوش مصنوعی",
    title: "سیستم‌هایی که فکر می‌کنند",
    text: "وقتی هوش مصنوعی را وارد اتوماسیون کردم، سیستم‌ها دیگر فقط اجرا نمی‌کردند؛ تصمیم هم می‌گرفتند. این نقطه‌ی تغییر بود.",
  },
  {
    year: "امروز",
    title: "تولد Yasin Labs",
    text: "Yasin Labs محل تجمیع همه‌ی این تجربه‌هاست؛ جایی برای ساختن، مستندسازی و به اشتراک گذاشتن سیستم‌هایی که واقعاً کار می‌کنند.",
  },
];

const stats = [
  { value: "+۵۰", label: "پروژه ساخته‌شده" },
  { value: "+۱۰۰K", label: "وظیفه خودکارشده" },
  { value: "+۲۰", label: "اتصال API" },
  { value: "۲۴/۷", label: "سیستم در حال اجرا" },
];

const philosophy = [
  {
    icon: Zap,
    title: "ذهنیت اتوماسیون",
    text: "هر فرآیند تکراری، یک فرصت برای خودکارسازی است.",
  },
  {
    icon: Target,
    title: "مسئله اول",
    text: "من ابزار نمی‌سازم؛ مسئله‌ی کسب‌وکار را حل می‌کنم.",
  },
  {
    icon: Sparkles,
    title: "هوش مصنوعی به‌عنوان لایه",
    text: "هوش مصنوعی فقط یک چت‌بات نیست؛ لایه‌ای برای ساختن سیستم‌های هوشمندتر است.",
  },
];

const whatIBuild = [
  {
    icon: Bot,
    title: "ایجنت‌های هوش مصنوعی",
    text: "عامل‌های خودکاری که تصمیم می‌گیرند، اجرا می‌کنند و با سرویس‌های دیگر ارتباط برقرار می‌کنند.",
  },
  {
    icon: Workflow,
    title: "سیستم‌های اتوماسیون",
    text: "ورک‌فلوهایی که فرآیندهای کسب‌وکار را از ابتدا تا انتها، بدون دخالت دستی، اجرا می‌کنند.",
  },
  {
    icon: Boxes,
    title: "پلتفرم‌های SaaS",
    text: "محصولات نرم‌افزاری کوچک و دقیق، ساخته‌شده برای حل یک مسئله‌ی مشخص.",
  },
  {
    icon: Database,
    title: "خط لوله‌های پردازش داده",
    text: "جریان‌های داده‌ای که اطلاعات خام را به تصمیم‌های قابل‌استفاده تبدیل می‌کنند.",
  },
];

const timeline = [
  {
    year: "۲۰۲۲",
    title: "اولین اتوماسیون‌ها",
    text: "شروع ساخت اسکریپت‌ها و ابزارهایی برای حذف کارهای تکراری.",
  },
  {
    year: "۲۰۲۳",
    title: "n8n و ورک‌فلوهای هوش مصنوعی",
    text: "ساخت سیستم‌های اتوماسیون در مقیاس تولید.",
  },
  {
    year: "۲۰۲۴",
    title: "تولد Yasin Labs",
    text: "شکل‌گیری برند شخصی حول محور اتوماسیون.",
  },
  {
    year: "۲۰۲۵",
    title: "ساختن در معرض دید",
    text: "اشتراک‌گذاری پروژه‌ها و کیس‌استادی‌ها به‌صورت عمومی.",
  },
];

const techStack = [
  { group: "اتوماسیون", items: ["n8n", "Make", "Zapier"] },
  { group: "هوش مصنوعی", items: ["OpenAI", "Anthropic", "LangChain"] },
  { group: "توسعه", items: ["TypeScript", "Python", "PostgreSQL"] },
  { group: "زیرساخت", items: ["Docker", "Vercel", "GitHub Actions"] },
];

/* ------------------------------------------------------------------ */
/* Scroll reveal helper                                                 */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Section eyebrow — small mono label used as connective tissue */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                  */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <div dir="rtl" className="relative overflow-hidden">
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent"
      />

      {/* ============================= 1. HERO ============================= */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 md:pt-32">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground"
              >
                <b.icon className="h-3.5 w-3.5 text-brand" />
                {b.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.25] md:text-6xl">
            من سیستم‌هایی می‌سازم که{" "}
            <span className="text-gradient">به‌جای انسان</span> کار می‌کنند.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            من یاسین هستم؛ مهندس اتوماسیون هوش مصنوعی. کارم طراحی و ساخت
            ایجنت‌ها، ورک‌فلوها و سیستم‌هایی است که فکر می‌کنند، به هم متصل
            می‌شوند و بدون توقف اجرا می‌شوند — تا کارهای تکراری از دوش انسان
            برداشته شود.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              مشاهده پروژه‌ها <ArrowLeft className="h-4 w-4" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-semibold transition hover:border-brand"
            >
              تماس با من
            </a>
          </div>
        </Reveal>
      </section>

      {/* ============================= 2. VIDEO ============================= */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60">
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-surface via-background to-surface">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <button
                type="button"
                aria-label="پخش ویدیوی معرفی"
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-brand/40 bg-brand/15 backdrop-blur transition group-hover:scale-105 group-hover:bg-brand/25"
              >
                <Play className="h-7 w-7 translate-x-[-2px] text-brand" fill="currentColor" />
              </button>
              <span className="absolute bottom-5 right-5 rounded-md border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
                ۹۰ ثانیه · به‌زودی
              </span>
            </div>
            <div className="border-t border-border p-6">
              <p className="font-display text-lg font-semibold">یک ویدیوی کوتاه، یک معرفی واقعی</p>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                یک ویدیوی ۶۰ تا ۹۰ ثانیه‌ای در راه است تا مرا، طرز فکرم و
                چیزهایی که می‌سازم، مستقیم از زبان خودم بشنوید.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ========================= 3. TERMINAL ========================= */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0b0d10] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="mr-auto flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Terminal className="h-3.5 w-3.5" /> yasin@labs:~
              </span>
            </div>
            <div dir="ltr" className="space-y-4 p-6 font-mono text-sm leading-relaxed">
              {terminalLines.map((line, i) => (
                <div key={line.cmd}>
                  <p className="text-muted-foreground">
                    <span className="text-brand">$</span> {line.cmd}
                  </p>
                  <p className="mt-1 text-right text-foreground" dir="rtl">
                    {line.out}
                    {i === terminalLines.length - 1 && (
                      <span className="mr-1 inline-block h-4 w-2 animate-pulse bg-brand align-middle" />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================ 4. STORY ============================ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <Eyebrow>مسیر</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            از یک سؤال ساده تا Yasin Labs
          </h2>
        </Reveal>

        <div className="relative mt-12 border-r border-border pr-8">
          {story.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="relative pb-10 last:pb-0">
              <span className="absolute -right-[41px] top-1 h-3 w-3 rounded-full border-2 border-background bg-brand" />
              <p className="font-mono text-xs uppercase tracking-widest text-brand">{s.year}</p>
              <p className="mt-2 font-display text-xl font-semibold">{s.title}</p>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ 5. STATS ============================ */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="rounded-xl border border-border bg-surface/60 p-6 text-center transition hover:border-brand/50">
                <p className="font-display text-3xl font-semibold text-brand">{s.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================= 6. PHILOSOPHY ========================= */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <Eyebrow>طرز فکر</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            چطور فکر می‌کنم
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-brand/50">
                <p.icon className="h-6 w-6 text-brand" />
                <p className="mt-5 font-display text-lg font-semibold">{p.title}</p>
                <p className="mt-2 leading-7 text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======================== 7. WHAT I BUILD ======================== */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <Eyebrow>خروجی کارم</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">چه می‌سازم</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {whatIBuild.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-brand/50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-brand/10">
                  <item.icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">{item.title}</p>
                  <p className="mt-1.5 leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================== 8. TIMELINE =========================== */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <Eyebrow>خط زمانی</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            سیستمی که سال به سال کامل‌تر شد
          </h2>
        </Reveal>

        <div className="relative mt-12 space-y-8 border-r border-border pr-8">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 90} className="relative">
              <span className="absolute -right-[45px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-brand/40 bg-background">
                <span className="h-2 w-2 rounded-full bg-brand" />
              </span>
              <div className="rounded-xl border border-border bg-surface/60 p-6">
                <p className="font-mono text-sm text-brand">{t.year}</p>
                <p className="mt-1.5 font-display text-lg font-semibold">{t.title}</p>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================= 9. TECH STACK ========================= */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <Eyebrow>ابزارها</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">با چه چیزی می‌سازم</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {techStack.map((s, i) => (
            <Reveal key={s.group} delay={i * 70}>
              <div className="rounded-xl border border-border bg-surface/60 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-brand">{s.group}</p>
                <div dir="ltr" className="mt-4 flex flex-wrap justify-end gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background/40 px-3 py-1 text-sm font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ====================== 10. BEHIND THE BUILD ====================== */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <Eyebrow>پشت صحنه</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            آدمی پشت این سیستم‌ها
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">
            بیشتر وقتم صرف پیدا کردن راهی می‌شود برای تبدیل یک فرآیند پیچیده
            به یک سیستم ساده. اینجا تصویری از فضایی است که این اتفاق در آن
            می‌افتد.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "فضای کار" },
            { label: "نمای یک ورک‌فلو" },
            { label: "محیط کدنویسی" },
          ].map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface/40 text-center">
                <Radio className="h-5 w-5 text-muted-foreground" />
                <p className="px-4 text-xs text-muted-foreground">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ 11. VISION ============================ */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-surface via-surface to-background p-10 md:p-14">
            <Eyebrow>چشم‌انداز</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              Yasin Labs چیزی فراتر از یک نمونه‌کار است.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              یک اکوسیستم در حال رشد از سیستم‌های هوش مصنوعی، آزمایش‌های
              اتوماسیون، کیس‌استادی‌ها و ابزارهایی که برای ساختن آینده‌ای
              طراحی شده‌اند که در آن کسب‌وکارها هوشمندانه‌تر اجرا می‌شوند.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================== 12. FINAL CTA =========================== */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            یک فرآیند تکراری داری؟
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">بیا خودکارش کنیم.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              شروع پروژه <ArrowLeft className="h-4 w-4" />
            </Link>
            <a
              href="https://youtube.com/@ba_yasin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition hover:border-brand"
            >
              <Youtube className="h-4 w-4" /> یوتیوب
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition hover:border-brand"
            >
              <Github className="h-4 w-4" /> گیت‌هاب
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition hover:border-brand"
            >
              <Linkedin className="h-4 w-4" /> لینکدین
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}