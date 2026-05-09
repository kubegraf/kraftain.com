export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-gradient-to-br from-bg-elev via-bg-soft to-bg-soft p-10 text-center sm:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl animate-drift" />
            <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-float-slow" />
          </div>
          <h2 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[52px]">
            Wire the brain.{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Ship the action.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">Clone the repo or spin up cloud — your first workflow runs in minutes.</p>
          <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <code className="rounded-md border border-border-strong bg-black/40 px-5 py-3.5 text-left font-mono text-[13.5px] text-brand">
              $ npx create-kraftain-app my-flow
            </code>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3.5 font-mono text-[13.5px] font-semibold text-bg transition-transform hover:scale-[1.02]">
              Open dashboard
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[12px] text-ink-dim">
            <span>OPEN SOURCE</span><span aria-hidden="true">·</span>
            <span>CLOUD OR SELF-HOST</span><span aria-hidden="true">·</span>
            <span>NO LOCK-IN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
