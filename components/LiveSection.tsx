import { ArrowUpRight } from "lucide-react";

const features = [
  "Multi-camera HD & 4K production",
  "Real-time scores and graphics overlay",
  "YouTube, Facebook & custom RTMP streaming",
  "Low-latency delivery under 3 seconds",
  "Instant highlights clipping",
  "Dedicated stream engineer on-site",
];

export default function LiveSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="p-14 md:p-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-center"
          style={{ background: "#004aad" }}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" style={{ animation: "pulse 1.2s infinite" }} />
              <span style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[11px] tracking-[0.14em] uppercase text-white/80 font-semibold">
                Live Now — Always Ready
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
              className="text-[clamp(34px,4vw,56px)] font-bold uppercase tracking-normal text-white mb-5"
            >
              PROFESSIONAL<br />LIVE STREAMING
            </h2>

            <p className="text-white/60 text-[15px] leading-relaxed max-w-[460px] mb-8">
              We set up, operate, and monitor your entire live broadcast — every wicket, every goal, in crystal-clear quality.
            </p>

            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 text-[13px] text-white/70">
                  <span style={{ color: "#facc15" }} className="text-base">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center gap-5">
            <a
              href="#contact"
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15" }}
              className="flex items-center gap-3 text-[#0a0a0a] text-[12px] font-bold tracking-widest uppercase px-6 py-4 hover:bg-[#e6b800] transition-colors whitespace-nowrap"
            >
              Book A Stream
              <span style={{ background: "#004aad" }} className="w-6 h-6 flex items-center justify-center"><ArrowUpRight size={14} color="#facc15" /></span>
            </a>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-white/30 text-[11px] tracking-widest uppercase">
              Available 7 Days / Week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
