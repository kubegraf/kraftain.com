import { useEffect, useState } from "react";

const BOOT = [
  { ok: true, msg: "init :: kraftain core 1.0.0" },
  { ok: true, msg: "load :: workflows · 12 found" },
  { ok: true, msg: "load :: rules · 84 found" },
  { ok: true, msg: "load :: models · core-7b · core-32b · pro" },
  { ok: true, msg: "open :: dispatch port 9001" },
  { ok: true, msg: "auth :: api keys · 4 active · 2 pending rotation" },
  { ok: true, msg: "audit :: ledger writable · region eu-west" },
  { ok: true, msg: "ready :: $ kraftain run refund-flow" },
];

const ASCII = String.raw`
   _
  | | ___ __ __ _ ___| |_ ___ _ __ ___
  | |/ / '__/ _\` |/ __| __/ _ \\ '__/ _ \\
  |   <| | | (_| | (__| ||  __/ | |  __/
  |_|\\_\\_|  \\__,_|\\___|\\__\\___|_|  \\___|
                  · ai operating engine
`;

export default function BootSequence() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setN((x) => Math.min(x + 1, BOOT.length)), 280);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section id="boot" className="relative isolate overflow-hidden border-b border-rule px-3 py-12 sm:px-6 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green to-transparent opacity-30 scan-bar" />

      <div className="mx-auto max-w-[1400px] grid gap-8 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
        <div>
          <pre className="text-[12px] leading-tight text-green phos sm:text-[14px]">{ASCII}</pre>
          <h1 className="mt-7 max-w-3xl text-[36px] font-bold leading-[0.98] tracking-tight text-ink sm:text-[56px] lg:text-[72px]" style={{ fontFamily: "var(--font-display)" }}>
            run AI from the
            <br />
            <span className="text-green phos">command line.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-ink-muted">
            kraftain is the open-core AI workflow runtime engineers run from a terminal. Self-host. Fine-tune. Deploy. Replay. The platform tax stops here.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#panes" className="inline-flex items-center gap-2 rounded-sm border border-green bg-green/10 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-green hover:bg-green/20">
              $ /panes →
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-rule-strong bg-bg-2 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-bg-3">
              $ git clone
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[11.5px] text-ink-dim">
            {["apache_2.0", "self_host_ok", "k8s_native", "no_signup_to_run", "byo_model"].map((t) => (
              <span key={t} className="text-green-2">· {t}</span>
            ))}
          </div>
        </div>

        <div className="relative brackets rounded-sm border border-green/30 bg-bg-2/80 p-5 shadow-[0_0_60px_rgba(0,255,136,0.20)]">
          <div className="flex items-center justify-between border-b border-rule pb-2 text-[11px] uppercase tracking-[0.22em] text-ink-dim">
            <span>~/kraftain.shell · /boot</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-magenta" />
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span className="h-2 w-2 rounded-full bg-green" />
            </span>
          </div>
          <pre className="mt-4 space-y-1 text-[12.5px]">
            {BOOT.slice(0, n).map((b, i) => (
              <div key={i} className="flex gap-3">
                <span className={b.ok ? "text-green" : "text-magenta"}>{b.ok ? "[ ok ]" : "[err]"}</span>
                <span className="text-ink-muted">{b.msg}</span>
              </div>
            ))}
            {n < BOOT.length && <div className="text-green cursor">_</div>}
            {n >= BOOT.length && (
              <>
                <div className="mt-3 text-green phos">[ READY ]</div>
                <div className="text-ink-dim">type <span className="text-green">$ kraftain run refund-flow</span> to dispatch</div>
              </>
            )}
          </pre>
        </div>
      </div>
    </section>
  );
}
