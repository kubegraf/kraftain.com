export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px] animate-drift" />
        <div className="absolute right-[-12%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px] animate-float-slow" />
        <div className="absolute inset-0 grain opacity-[0.05]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[12px] font-medium text-ink-muted backdrop-blur-md">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-brand" />
          </span>
          v1.0 — self-host or cloud
        </div>

        <h1 className="mx-auto mt-7 max-w-5xl text-balance text-[44px] font-semibold leading-[1.04] tracking-tight sm:text-[64px] md:text-[80px]">
          The AI brain behind your business —{" "}
          <span className="bg-gradient-to-r from-brand via-brand-bright to-accent bg-clip-text text-transparent">
            wired for action.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-muted sm:text-[19px]">
          Kraftain Core is the AI operations engine that runs your workflows,
          makes your decisions, and keeps your business moving. Self-host,
          fine-tune, deploy — without the platform tax.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 font-mono text-[14px] font-semibold text-bg shadow-xl shadow-brand/30 transition-transform hover:scale-[1.02]">
            $ npm i kraftain-core
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-6 py-3.5 text-[14px] font-medium text-ink backdrop-blur-md transition-colors hover:border-brand/60 hover:bg-brand-soft">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            See it run
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-mono text-[12px] text-ink-dim">
          <Mark label="OPEN_SOURCE" />
          <Mark label="ON_PREM_OK" />
          <Mark label="FINE_TUNE" />
          <Mark label="AUDIT_TRAIL" />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
        <div className="relative rounded-2xl border border-border-strong bg-bg-elev/70 p-2 backdrop-blur-xl shadow-2xl shadow-brand/10">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand/10 via-transparent to-accent/10 blur-xl" />
          <div className="rounded-xl border border-border bg-bg-soft p-6 sm:p-8">
            <div className="flex items-center gap-2 pb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-[11px] text-ink-dim">~/kraftain · main</span>
              <span className="ml-auto rounded-md border border-brand/30 bg-brand-soft px-2 py-0.5 font-mono text-[10px] text-brand">RUNNING</span>
            </div>

            <pre className="overflow-x-auto rounded-lg border border-border bg-black/40 p-4 font-mono text-[12.5px] leading-relaxed text-ink-muted">
{`> kraftain.deploy({
    name: "refund-flow",
    triggers: ["stripe:dispute.created"],
    steps: [
      { ai: "classify-dispute", model: "core-7b" },
      { rule: "amount > 500 ? approval : auto" },
      { action: "stripe:refund" },
      { notify: "slack:#disputes" }
    ]
  })`}
              <br />
              <span className="text-brand">✓ deployed in 1.4s · 0 errors · 4 steps</span>
            </pre>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Stat k="DECISIONS / DAY" v="184,712" />
              <Stat k="WORKFLOWS" v="42 active" />
              <Stat k="P50 LATENCY" v="38 ms" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mark({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {label}
    </span>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">{k}</div>
      <div className="mt-1.5 font-mono text-[18px] font-semibold tracking-tight text-ink">{v}</div>
    </div>
  );
}
