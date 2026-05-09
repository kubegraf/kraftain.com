const PLANS = [
  { tier: "Open Source", price: "$0", period: "self-host", blurb: "The full engine. Apache 2.0. Forever free.", features: ["Workflow + decision engine", "Visual editor", "Up to 100K decisions/mo", "Community Discord"], cta: "Clone repo", highlighted: false },
  { tier: "Cloud", price: "$99", period: "per month", blurb: "Hosted, managed, observable. The fast path.", features: ["1M decisions/month", "Hosted runtime", "Audit + replay", "Dashboards & alerts", "Email support"], cta: "Start cloud", highlighted: true },
  { tier: "Business", price: "$499", period: "per month", blurb: "For teams scaling beyond a million.", features: ["10M decisions/month", "VPC peering", "SSO + SCIM", "Priority support", "Solution architect"], cta: "Choose Business", highlighted: false },
  { tier: "Enterprise", price: "Custom", period: "let's talk", blurb: "Unlimited, on-prem, air-gapped.", features: ["Unlimited volume", "On-prem & air-gapped", "Dedicated infra", "Custom contracts", "24/7 SLA"], cta: "Talk to sales", highlighted: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand">// pricing</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Use the engine. Pay for the runtime.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">Open core. Hosted cloud. Self-host on your terms. Same surface across them all.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <article key={p.tier} className={`relative overflow-hidden rounded-xl border p-7 ${p.highlighted ? "border-brand bg-gradient-to-br from-brand-soft via-bg-soft to-bg-soft shadow-2xl shadow-brand/15" : "border-border bg-bg-soft"}`}>
              {p.highlighted && (<span className="absolute right-5 top-5 rounded-md border border-brand/40 bg-brand-soft px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand">Most picked</span>)}
              <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{p.tier}</div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-[36px] font-semibold tracking-tight">{p.price}</span>
                <span className="text-[12px] text-ink-muted">{p.period}</span>
              </div>
              <p className="mt-2.5 text-[13.5px] text-ink-muted">{p.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-ink">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-none text-brand"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 font-mono text-[13px] font-medium transition-transform hover:scale-[1.01] ${p.highlighted ? "bg-brand text-bg" : "border border-border-strong bg-surface text-ink"}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
