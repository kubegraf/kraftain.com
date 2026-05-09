import { useEffect, useState } from "react";

export default function StatusLine() {
  const [t, setT] = useState(() => clock());
  useEffect(() => {
    const id = window.setInterval(() => setT(clock()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-3 font-mono text-[12px] sm:px-6">
        <div className="flex items-center gap-3 text-green">
          <span className="phos">[ kraftain · master ]</span>
          <span className="hidden text-ink-dim sm:inline">tmux v3 · 4 panes · 1.0.0</span>
        </div>
        <nav className="hidden items-center gap-3 text-ink-muted sm:flex">
          <a href="#boot" className="hover:text-green">$ /boot</a>
          <a href="#panes" className="hover:text-green">$ /panes</a>
          <a href="#man" className="hover:text-green">$ /man</a>
          <a href="#ops" className="hover:text-green">$ /ops</a>
          <a href="#pricing" className="hover:text-green">$ /pricing</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-green">$ /github</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-ink-dim md:inline">{t}</span>
          <span className="rounded-sm border border-green/40 bg-green/10 px-1.5 py-0.5 text-green">PROC OK</span>
        </div>
      </div>
    </header>
  );
}

function clock() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")} UTC`;
}
