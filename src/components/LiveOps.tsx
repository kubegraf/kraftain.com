interface Stream { ts: string; lvl: "ok" | "warn" | "info"; msg: string }

const STREAMS: Stream[] = [
  { ts: "11:42:06", lvl: "ok",  msg: "flow refund-flow · evt_8412 · branch=auto · refunded $480 · 1.4s" },
  { ts: "11:42:08", lvl: "info", msg: "flow onboarding · evt_8413 · classify=consumer · model=core-7b" },
  { ts: "11:42:11", lvl: "warn", msg: "rule kyc-thresholds · soft fail · routed to review · sla 24h" },
  { ts: "11:42:12", lvl: "ok",  msg: "flow dispute-triage · evt_8414 · suggest=accept · auto-replied" },
  { ts: "11:42:15", lvl: "ok",  msg: "audit append · 2026-05-09.ndjson · 4.2KB · sealed" },
  { ts: "11:42:16", lvl: "info", msg: "model swap · pro-32b · 12% drop in p99 · adopted" },
  { ts: "11:42:18", lvl: "ok",  msg: "flow refund-flow · evt_8415 · branch=approval · queued" },
];

const LVL: Record<Stream["lvl"], string> = { ok: "text-green", warn: "text-amber", info: "text-cyan" };

export default function LiveOps() {
  return (
    <section id="ops" className="relative border-b border-rule px-3 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1400px] grid gap-8 lg:grid-cols-[1fr_minmax(0,1.4fr)]">
        <div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-green-2">/ops</span>
          <h2 className="mt-3 text-[28px] font-bold leading-tight sm:text-[44px]" style={{ fontFamily: "var(--font-display)" }}>
            engineers run it. <span className="text-green">operators watch it.</span>
          </h2>
          <p className="mt-5 max-w-prose text-[13.5px] leading-relaxed text-ink-muted">
            Pipe the live event stream into Slack, Datadog, your warehouse — or just `tail -f` the event log over SSH. Every decision is observable, replayable, exportable.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {[
              ["SSH", "tail -f /var/log/kraftain.ndjson"],
              ["GRPC", "kraftain.events.subscribe()"],
              ["WEBHOOK", "POST /webhook/kraftain"],
              ["S3", "stream → s3://audit/k_*"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-sm border border-rule bg-bg-2 p-3">
                <div className="text-[9.5px] uppercase tracking-[0.18em] text-ink-dim">{k}</div>
                <div className="mt-1 text-[11.5px] text-green">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative brackets rounded-sm border border-rule-strong bg-bg-2 p-3">
          <div className="flex items-center justify-between border-b border-rule pb-1.5 text-[10.5px] uppercase tracking-[0.18em] text-ink-dim">
            <span>$ kraftain logs --tail · region=eu-west</span>
            <span className="flex items-center gap-2 text-green">
              <span className="h-1.5 w-1.5 rounded-full bg-green meter-pulse" />
              streaming
            </span>
          </div>
          <pre className="mt-2 space-y-1 text-[12px] leading-relaxed">
            {STREAMS.map((s, i) => (
              <div key={i} className="grid grid-cols-[80px_50px_1fr] items-baseline">
                <span className="text-ink-dim">{s.ts}</span>
                <span className={LVL[s.lvl]}>[{s.lvl}]</span>
                <span className="text-ink-muted">{s.msg}</span>
              </div>
            ))}
            <div className="cursor text-green">_</div>
          </pre>
        </div>
      </div>
    </section>
  );
}
