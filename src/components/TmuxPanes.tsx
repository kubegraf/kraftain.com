export default function TmuxPanes() {
  return (
    <section id="panes" className="relative border-b border-rule px-3 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-green-2">/panes</span>
            <h2 className="mt-3 text-[28px] font-bold leading-tight sm:text-[44px]" style={{ fontFamily: "var(--font-display)" }}>
              the four panes that <span className="text-green">replace your platform.</span>
            </h2>
          </div>
          <p className="max-w-md text-[13.5px] text-ink-muted">
            Each pane is a real surface in the runtime. Same buffer-driven editor experience you already have. Dispatch is one keystroke away.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.4fr_1fr]">
          <FileTree />
          <Editor />
          <Terminal />
          <BottomBar />
        </div>
      </div>
    </section>
  );
}

function FileTree() {
  return (
    <div className="relative brackets rounded-sm border border-rule-strong bg-bg-2 p-3 lg:row-span-2">
      <Header label="~/kraftain · tree" badge="EDIT" />
      <pre className="mt-2 text-[12px] leading-relaxed">
        <Line t="folder" name="workflows/" />
        <Line indent t="file" name="refund-flow.ts" mark="active" />
        <Line indent t="file" name="onboarding.ts" />
        <Line indent t="file" name="dispute-triage.ts" />
        <Line t="folder" name="rules/" />
        <Line indent t="file" name="amount-bands.ts" />
        <Line indent t="file" name="kyc-thresholds.ts" />
        <Line t="folder" name="models/" />
        <Line indent t="file" name="core-7b.lock" />
        <Line indent t="file" name="pro-32b.lock" />
        <Line t="folder" name="audit/" />
        <Line indent t="file" name="2026-05-08.ndjson" />
        <Line indent t="file" name="2026-05-09.ndjson" />
        <Line t="file" name=".kraftainrc" />
      </pre>
    </div>
  );
}

function Editor() {
  return (
    <div className="relative brackets rounded-sm border border-rule-strong bg-bg-2 p-3 lg:row-span-2">
      <Header label="refund-flow.ts · main · 12 lines" badge="LSP OK" />
      <pre className="mt-2 overflow-x-auto text-[12.5px] leading-relaxed">
        <Code n={1} c="dim">{`// run: $ kraftain run refund-flow`}</Code>
        <Code n={2}>{` `}</Code>
        <Code n={3}><span className="text-purple">import</span> {`{ flow, on, ai, rule, action } `}<span className="text-purple">from</span> <span className="text-amber">"kraftain"</span>;</Code>
        <Code n={4}>{` `}</Code>
        <Code n={5}><span className="text-purple">export default</span> <span className="text-cyan">flow</span>{`("refund", {`}</Code>
        <Code n={6}>{`  triggers: [`}<span className="text-cyan">on.stripe</span>{`("dispute.created")],`}</Code>
        <Code n={7}>{`  steps: [`}</Code>
        <Code n={8}>{`    `}<span className="text-cyan">ai</span>{`("classify-dispute", { model: `}<span className="text-amber">"core-7b"</span>{` }),`}</Code>
        <Code n={9}>{`    `}<span className="text-cyan">rule</span>{`((d) => d.amount > `}<span className="text-orange">500</span>{` ? "approval" : "auto"),`}</Code>
        <Code n={10}>{`    `}<span className="text-cyan">action</span>{`("stripe.refund"),`}</Code>
        <Code n={11}>{`    `}<span className="text-cyan">action</span>{`("slack.notify", { channel: `}<span className="text-amber">"#disputes"</span>{` }),`}</Code>
        <Code n={12}>{`  ],`}</Code>
        <Code n={13}>{`});`}</Code>
      </pre>
    </div>
  );
}

function Terminal() {
  return (
    <div className="relative brackets rounded-sm border border-rule-strong bg-bg-2 p-3">
      <Header label="$ ./kraftain · run · refund-flow" badge="LIVE" />
      <pre className="mt-2 text-[12px] leading-relaxed">
        <span className="block text-ink-dim">$ kraftain run refund-flow --watch</span>
        <span className="block text-green">[ ok ]</span><span className="block text-ink-muted">  triggered: stripe.dispute.created · evt_8412</span>
        <span className="block text-green">[ ok ]</span><span className="block text-ink-muted">  ai · classify-dispute · 0.94 confidence</span>
        <span className="block text-green">[ ok ]</span><span className="block text-ink-muted">  rule · amount $480 {"<"} 500 · branch=auto</span>
        <span className="block text-green">[ ok ]</span><span className="block text-ink-muted">  action · stripe.refund · refunded $480</span>
        <span className="block text-green">[ ok ]</span><span className="block text-ink-muted">  action · slack.notify · #disputes</span>
        <span className="block text-amber">[ ✓ ]</span><span className="block text-ink-muted">  audit logged · 1.4s · trace=k_2a91f4</span>
        <span className="block text-green cursor">_</span>
      </pre>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="relative brackets rounded-sm border border-rule-strong bg-bg-2 p-3">
      <Header label="metrics · 24h" badge="STATS" />
      <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
        <Cell k="DECISIONS" v="4.8M" tone="green" />
        <Cell k="P50 LATENCY" v="38ms" tone="green" />
        <Cell k="P99 LATENCY" v="240ms" tone="amber" />
        <Cell k="ERRORS" v="0.04%" tone="cyan" />
        <Cell k="FLOWS LIVE" v="42" tone="purple" />
        <Cell k="MODELS" v="3" tone="orange" />
      </div>
    </div>
  );
}

function Header({ label, badge }: { label: string; badge: string }) {
  return (
    <div className="flex items-center justify-between border-b border-rule pb-1.5 text-[10.5px] uppercase tracking-[0.18em] text-ink-dim">
      <span className="truncate">{label}</span>
      <span className="text-green-2">{badge}</span>
    </div>
  );
}

function Line({ name, indent, t, mark }: { name: string; indent?: boolean; t: "file" | "folder"; mark?: string }) {
  const cls = mark === "active" ? "text-green phos" : t === "folder" ? "text-amber" : "text-ink";
  return (
    <div className={`${indent ? "pl-5" : ""}`}>
      <span className="text-ink-dim">{t === "folder" ? "▸ " : "· "}</span>
      <span className={cls}>{name}</span>
      {mark === "active" && <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-green-2">●</span>}
    </div>
  );
}

function Code({ n, children, c }: { n: number; children: React.ReactNode; c?: "dim" }) {
  return (
    <div className="grid grid-cols-[28px_1fr] items-baseline">
      <span className="text-right pr-2 text-[10.5px] text-ink-dim">{n}</span>
      <span className={c === "dim" ? "text-ink-dim" : "text-ink"}>{children}</span>
    </div>
  );
}

function Cell({ k, v, tone }: { k: string; v: string; tone: "green" | "amber" | "cyan" | "purple" | "orange" }) {
  const cls = tone === "green" ? "text-green" : tone === "amber" ? "text-amber" : tone === "cyan" ? "text-cyan" : tone === "purple" ? "text-purple" : "text-orange";
  return (
    <div className="rounded-sm border border-rule bg-bg-3 p-2.5">
      <div className="text-[9.5px] uppercase tracking-[0.18em] text-ink-dim">{k}</div>
      <div className={`mt-1 text-[18px] font-bold ${cls}`} style={{ fontFamily: "var(--font-display)" }}>{v}</div>
    </div>
  );
}
