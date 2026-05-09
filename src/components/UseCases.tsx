const CASES = [
  { title: "Engineering teams", body: "Replace bespoke pipelines with versioned workflows. Ship AI features without standing up a platform team.", items: ["Workflow as code", "GitOps-friendly", "Observability built-in"] },
  { title: "Operations leaders", body: "Move ticket triage, refund decisions, escalations onto a single runtime. Audit-ready by default.", items: ["Visual graph editor", "Human-in-the-loop", "SLA dashboards"] },
  { title: "Finance & risk", body: "Underwriting, dispute handling, fraud rules — versioned, replayable, exportable for regulators.", items: ["Decision lineage", "Replay any decision", "Regulator-friendly export"] },
  { title: "Supply chain & logistics", body: "Routing, exception handling, supplier scoring. AI where it helps, rules where it must.", items: ["Real-time event flows", "Supplier scoring", "Mixed AI + rule logic"] },
];

export default function UseCases() {
  return (
    <section id="use" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">// where it fits</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Every team that runs on decisions.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-xl border border-border bg-bg-soft p-8 transition-all hover:border-accent/40">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand/0 via-brand/60 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-[22px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{c.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 font-mono text-[13px] text-ink-muted">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />{it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
