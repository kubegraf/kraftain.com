type Icon = "flow" | "brain" | "mesh" | "audit" | "lock" | "tune";

const FEATURES: { icon: Icon; title: string; body: string }[] = [
  { icon: "flow", title: "Workflow engine", body: "Declarative graphs, durable execution, retries, branches, fan-out. From event to outcome with full traces." },
  { icon: "brain", title: "Decision intelligence", body: "Mix rules and models. Score, classify, route — with confidence intervals and human-in-the-loop where it matters." },
  { icon: "mesh", title: "Integration mesh", body: "Stripe, Salesforce, Slack, your warehouse, your DB. 200+ integrations or write your own in 10 lines." },
  { icon: "audit", title: "Audit trails", body: "Every decision recorded with inputs, outputs, model versions, rule diffs. Replayable. Exportable. Court-ready." },
  { icon: "lock", title: "Self-host & air-gap", body: "Your data, your weights, your infra. Kraftain runs in your VPC, on-prem, or air-gapped — same surface." },
  { icon: "tune", title: "Fine-tunable", body: "Bring your own data, fine-tune our open models, or plug in OpenAI / Anthropic / your own. No lock-in." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand">// capabilities</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Six surfaces. One runtime.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">Every part composable. Every part observable. Every part yours.</p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-xl border border-border bg-bg-soft p-7 transition-all hover:border-brand/40 hover:bg-bg-elev">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-brand-soft text-brand ring-1 ring-inset ring-brand/30">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: Icon }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "flow": return (<svg {...props}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="14" r="2" /><circle cx="6" cy="20" r="2" /><circle cx="18" cy="20" r="2" /><path d="M7 7l4 6M17 7l-4 6M7 19l4-3M17 19l-4-3" /></svg>);
    case "brain": return (<svg {...props}><path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-2 5.9V14a4 4 0 0 0 4 4h.5" /><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 2 5.9V14a4 4 0 0 1-4 4h-.5" /><path d="M12 18v4" /></svg>);
    case "mesh": return (<svg {...props}><circle cx="12" cy="12" r="3" /><circle cx="4" cy="4" r="2" /><circle cx="20" cy="4" r="2" /><circle cx="4" cy="20" r="2" /><circle cx="20" cy="20" r="2" /><path d="M5.5 5.5L9.5 9.5M18.5 5.5l-4 4M5.5 18.5L9.5 14.5M18.5 18.5l-4-4" /></svg>);
    case "audit": return (<svg {...props}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>);
    case "lock": return (<svg {...props}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);
    case "tune": return (<svg {...props}><line x1="4" y1="6" x2="14" y2="6" /><line x1="20" y1="6" x2="20" y2="6" /><line x1="14" y1="6" x2="20" y2="6" /><circle cx="14" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="16" cy="18" r="2" /><line x1="4" y1="12" x2="10" y2="12" /><line x1="4" y1="18" x2="16" y2="18" /></svg>);
  }
}
