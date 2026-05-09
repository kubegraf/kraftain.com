import StatusLine from "./components/StatusLine";
import BootSequence from "./components/BootSequence";
import TmuxPanes from "./components/TmuxPanes";
import ManPage from "./components/ManPage";
import LiveOps from "./components/LiveOps";
import Pricing from "./components/Pricing";
import Closing from "./components/Closing";
import CrtOverlay from "./components/CrtOverlay";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <StatusLine />
      <main className="relative">
        <BootSequence />
        <TmuxPanes />
        <ManPage />
        <LiveOps />
        <Pricing />
        <Closing />
      </main>
      <CrtOverlay />
    </div>
  );
}
