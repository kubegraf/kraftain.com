interface Plan { tier: string; license: string; price: string; cap: string; lines: { k: string; v: string; tone?: "ok" | "info" | "warn" }[]; cta: string; star?: boolean }

const PLANS: Plan[] = [
  { tier: "OPEN", license: "Apache 2.0", price: "$0", cap: "self-hosted", lines: [
    { k: "decisions/mo", v: "unlimited" },
    { k: "license", v: "Apache 2.0", tone: "ok" },
    { k: "support", v: "community" },
    { k: "audit ledger", v: "ndjson · local" },
    { k: "models", v: "byo · open weights" },
  ], cta: "$ git clone" },
  { tier: "CLOUD", license: "managed", price: "$99", cap: "/ month · 1M decisions", lines: [
    { k: "decisions/mo", v: "1,000,000" },
    { k: "hosting", v: "kraftain cloud · eu/us/sg", tone: "info" },
    { k: "support", v: "email · 1d" },
    { k: "audit ledger", v: "managed · 1y retention" },
    { k: "models", v: "byo + cloud catalog" },
  ], cta: "$ kraftain login", star: true },
  { tier: "BUSINESS", license: "managed", price: "$499", cap: "/ month · 10M decisions", lines: [
    { k: "decisions/mo", v: "10,000,000" },
    { k: "hosting", v: "vpc peering" },
    { k: "support", v: "priority · slack channel" },
    { k: "audit ledger", v: "3y · sso/scim" },
    { k: "models", v: "all + fine-tune ops" },
  ], cta: "$ contact" },
  { tier: "ENTERPRISE", license: "on-prem · air-gapped", price: "$$$", cap: "custom · unlimited", lines: [
    { k: "decisions/mo", v: "unlimited" },
    { k: "hosting", v: "vpc · on-prem · air-gap", tone: "warn" },
    { k: "support", v: "24/7 · dedicated" },
    { k: "audit ledger", v: "custom · region-locked" },
    { k: "models", v: "custom + fine-tune team" },
  ], cta: "$ talk-to-sales" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-b border-rule px-3 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-[0.22em] text-green-2">/pricing</span>
          <h2 className="mt-3 text-[28px] font-bold leading-tight sm:text-[44px]" style={{ fontFamily: "var(--font-display)" }}>
            four plans. <span className="text-green">two contracts.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-[13.5px] text-ink-muted">
            Apache 2.0 OPEN core, forever free. Or a managed plan that scales from cloud to air-gap. Same surface across them all.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <article key={p.tier} className={`relative overflow-hidden rounded-sm border p-5 ${p.star ? "border-green bg-bg-2 shadow-[0_0_60px_-20px_rgba(0,255,136,0.50)]" : "border-rule-strong bg-bg-2"}`}>
              {p.star && <span className="absolute right-3 top-3 rounded-sm border border-green/40 bg-green/15 px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.18em] text-green">most picked</span>}
              <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-green-2">{p.tier}</div>
              <div className="mt-1 text-[10.5px] text-ink-dim">// {p.license}</div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[34px] font-bold" style={{ fontFamily: "var(--font-display)" }}>{p.price}</span>
                <span className="text-[11.5px] text-ink-muted">{p.cap}</span>
              </div>
              <dl className="mt-4 divide-y divide-rule">
                {p.lines.map((l) => (
                  <div key={l.k} className="grid grid-cols-2 py-1.5 text-[11.5px]">
                    <dt className="text-ink-dim">{l.k}</dt>
                    <dd className={`text-right ${l.tone === "ok" ? "text-green" : l.tone === "warn" ? "text-amber" : l.tone === "info" ? "text-cyan" : "text-ink"}`}>{l.v}</dd>
                  </div>
                ))}
              </dl>
              <a href="#cta" className={`mt-5 inline-flex w-full items-center justify-center rounded-sm py-2 text-[12px] font-bold uppercase tracking-[0.16em] ${p.star ? "bg-green text-bg hover:bg-green-2" : "border border-rule-strong bg-bg-3 text-ink hover:bg-bg-4"}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
