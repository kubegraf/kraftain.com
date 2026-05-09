export default function Closing() {
  return (
    <section id="cta" className="relative isolate overflow-hidden px-3 py-20 sm:px-6 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green to-transparent opacity-30 scan-bar" />
      <div className="mx-auto max-w-3xl text-center">
        <pre className="text-[10px] leading-tight text-green sm:text-[12px]">{String.raw`
  >  $ kraftain init
  >    init :: ready
  >    your business · meet your runtime
  >  _
        `}</pre>
        <h2 className="mt-6 text-[32px] font-bold leading-[1.0] sm:text-[60px] lg:text-[80px]" style={{ fontFamily: "var(--font-display)" }}>
          stop gluing scripts.<br />
          <span className="text-green phos">start dispatching decisions.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[13.5px] text-ink-muted">
          Open the repo. Run the binary. Or grab a managed cloud key. The first decision happens in minutes.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-green bg-green/10 px-6 py-3 text-[12.5px] font-bold uppercase tracking-[0.18em] text-green hover:bg-green/20">
            $ git clone kraftain
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-sm border border-rule-strong bg-bg-2 px-6 py-3 text-[12.5px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-bg-3">
            $ kraftain login
          </a>
        </div>

        <div className="mt-10 text-[10.5px] uppercase tracking-[0.22em] text-ink-dim">
          // berlin · bengaluru · toronto · v1.0 · apache 2.0
        </div>
      </div>
    </section>
  );
}
