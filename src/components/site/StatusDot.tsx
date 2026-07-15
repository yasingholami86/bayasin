export function StatusDot({ tone = "live" }: { tone?: "live" | "beta" | "idle" }) {
  const color =
    tone === "live" ? "bg-success" : tone === "beta" ? "bg-chart-4" : "bg-muted-foreground";
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className={`absolute inset-0 rounded-full ${color} animate-pulse-dot`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}
