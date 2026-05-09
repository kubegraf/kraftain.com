interface Section { tag: string; title: string; body: string }

const SECTIONS: Section[] = [
  { tag: "NAME", title: "kraftain — ai operating engine", body: "An open-core runtime for AI workflows. Combines a workflow engine, decision intelligence, integration mesh, and audit trails into one binary. Self-host or use the managed cloud." },
  { tag: "SYNOPSIS", title: "kraftain [command] [flags]", body: "Common commands: run, deploy, replay, lint, gen, repl. See 'kraftain help' for the full list." },
  { tag: "BACKGROUND", title: "what is it for", body: "When your business runs on decisions — refunds, onboarding, fraud, escalations, supply-chain — kraftain replaces glue scripts and brittle pipelines with a single, observable runtime." },
  { tag: "DATA", title: "your weights, your data", body: "kraftain runs against your data without copying it. Open-weight or proprietary models. Fine-tune on your fixtures. The runtime never trains on your data." },
  { tag: "OPS", title: "observability is not a feature", body: "Every run is replayable. Every decision has an inputs+outputs trace. Audit logs ship as ndjson. Replay any run with a single trace_id." },
  { tag: "SEC", title: "self-host, on-prem, air-gapped", body: "Run as a single binary, in Docker, on Kubernetes, or in a fully air-gapped environment. SOC 2 Type II for the hosted cloud." },
];

export default function ManPage() {
  return (
    <section id="man" className="relative border-b border-rule px-3 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-green-2">/man</span>
            <h2 className="mt-3 text-[28px] font-bold leading-tight sm:text-[44px]" style={{ fontFamily: "var(--font-display)" }}>
              KRAFTAIN(1) <span className="text-green">User Commands</span>
            </h2>
          </div>
          <span className="text-[11.5px] text-ink-dim">man kraftain &nbsp;·&nbsp; section 1 &nbsp;·&nbsp; v1.0</span>
        </div>

        <div className="rounded-sm border border-rule-strong bg-bg-2 p-6 sm:p-8">
          <div className="space-y-7">
            {SECTIONS.map((s) => (
              <article key={s.tag} className="grid gap-3 sm:grid-cols-[120px_1fr] sm:gap-7">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-green">{s.tag}</div>
                <div>
                  <h3 className="text-[15px] font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                  <p className="mt-1.5 max-w-prose text-[13.5px] leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ["RUN", "$ kraftain run refund-flow"],
              ["REPLAY", "$ kraftain replay k_2a91f4"],
              ["LINT", "$ kraftain lint workflows/"],
              ["DEPLOY", "$ kraftain deploy --env prod"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-sm border border-rule bg-bg-3 p-3">
                <div className="text-[9.5px] uppercase tracking-[0.18em] text-ink-dim">{k}</div>
                <div className="mt-1 text-[12px] text-green">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
