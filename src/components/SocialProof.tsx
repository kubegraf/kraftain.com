const STATS = [
  { v: "2.4M+", k: "decisions/day in prod" },
  { v: "38ms", k: "p50 inference" },
  { v: "99.99%", k: "uptime SLA" },
  { v: "Apache 2", k: "core licensed" },
];

const QUOTES = [
  { quote: "We replaced a Frankenstein of scripts with one Kraftain workflow. Cut on-call by half and added 3 new features the same week.", name: "Erik N.", role: "Staff Eng · SaaS scale-up" },
  { quote: "Self-host was the deal-breaker for our compliance team. Kraftain shipped it day one — no asterisk.", name: "Yuki O.", role: "Head of Platform · Fintech" },
  { quote: "Visual graphs for ops, code for engineers. Both tribes finally use the same runtime.", name: "Tomas R.", role: "Director of Eng · B2B SaaS" },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 rounded-3xl border border-border bg-gradient-to-br from-brand-soft via-bg-soft to-bg-soft p-8 sm:grid-cols-4 sm:p-10">
          {STATS.map((s) => (
            <div key={s.k} className="text-center sm:text-left">
              <div className="font-mono text-[34px] font-semibold tracking-tight text-ink sm:text-[40px]">{s.v}</div>
              <div className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} className="rounded-xl border border-border bg-bg-soft p-7">
              <span className="font-mono text-[24px] font-bold leading-none text-brand">"</span>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">{q.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-brand to-accent font-mono text-[12px] font-semibold text-bg">{q.name.charAt(0)}</span>
                <div>
                  <div className="text-[13.5px] font-medium text-ink">{q.name}</div>
                  <div className="text-[12px] text-ink-dim">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-mono text-[12px] uppercase tracking-[0.16em] text-ink-dim">
          <Badge label="SOC 2 Type II" />
          <Badge label="HIPAA-ready" />
          <Badge label="Open core" />
          <Badge label="VPC + on-prem" />
        </div>
      </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {label}
    </span>
  );
}
