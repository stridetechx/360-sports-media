"use client";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { num: "500+", label: "Matches Covered" },
  { num: "1.2M+", label: "Live Viewers" },
  { num: "8+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "linear-gradient(150deg, #001f5c 0%, #004aad 50%, #002966 100%)" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Yellow glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(250,204,21,0.10) 0%, transparent 55%)" }} />

      {/* Watermark */}
      <div
        className="absolute bottom-[-60px] right-[-40px] select-none pointer-events-none leading-none"
        style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(160px,22vw,300px)", fontWeight: 700, color: "rgba(255,255,255,0.04)", letterSpacing: "-0.05em" }}
      >
        360
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-16 pt-36 w-full">
        <div className="flex items-center gap-3 mb-7">
          <span className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse" />
          <span style={{ fontFamily: "'Clash Display', sans-serif", color: "#facc15" }} className="text-[11px] tracking-[0.14em] uppercase font-semibold">
            Bengaluru's #1 Sports Media Company
          </span>
        </div>

        <h1
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(52px,8.5vw,116px)", letterSpacing: "0.02em", lineHeight: 0.9 }}
          className="font-bold uppercase text-white mb-8"
        >
          <span className="block">WHERE THE</span>
          <span className="block" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.25)", color: "transparent" }}>GAME</span>
          <span className="block">COMES ALIVE</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-2">
          <div>
            <p className="text-white/55 text-[15px] leading-relaxed max-w-[380px] mb-7">
              Cricket, Football & Badminton — powered by world-class live streaming, commentary, umpiring, and content creation. Based in Bengaluru, India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#services"
                style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15" }}
                className="flex items-center gap-3 text-[#0a0a0a] text-[12px] font-bold tracking-widest uppercase px-5 py-3.5 hover:bg-[#e6b800] transition-colors"
              >
                Our Services
                <span className="w-6 h-6 flex items-center justify-center" style={{ background: "#004aad" }}><ArrowUpRight size={14} color="#facc15" /></span>
              </a>
              <a
                href="#contact"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
                className="flex items-center gap-3 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-3.5 border border-white/30 hover:border-white/70 transition-colors"
              >
                Work With Us
              </a>
            </div>
          </div>

          <div className="flex gap-10 md:gap-14">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Clash Display', sans-serif", color: "#facc15" }} className="text-4xl font-bold leading-none">{s.num}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-25">
        <div className="w-px h-10 bg-white animate-bounce" style={{ animationDuration: "1.8s" }} />
        <span style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[9px] tracking-[0.18em] uppercase text-white">Scroll</span>
      </div>
    </section>
  );
}
