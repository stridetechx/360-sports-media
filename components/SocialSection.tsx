// Social media poster showcase section
const posters = [
  {
    type: "Match Day",
    sport: "Cricket",
    title: "MATCH DAY",
    subtitle: "PSL Semi Final",
    detail: "Lahore vs Karachi",
    date: "TUE, 15 JAN",
    emoji: "🏏",
    bg: "linear-gradient(135deg, #004aad 0%, #0057cc 100%)",
    accent: "#facc15",
    platform: "Instagram",
    platformIcon: "📸",
  },
  {
    type: "Score Update",
    sport: "Cricket",
    title: "SCORECARD",
    subtitle: "Live Update",
    detail: "LAH 186/4 (18.2)",
    date: "LIVE NOW 🔴",
    emoji: "📊",
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    accent: "#facc15",
    platform: "Twitter / X",
    platformIcon: "𝕏",
  },
  {
    type: "Player Spotlight",
    sport: "Football",
    title: "PLAYER OF",
    subtitle: "THE WEEK",
    detail: "Ahmed Bilal — 2 Goals",
    date: "FC UNITED",
    emoji: "⚽",
    bg: "linear-gradient(135deg, #facc15 0%, #e6b800 100%)",
    accent: "#004aad",
    platform: "Instagram",
    platformIcon: "📸",
  },
  {
    type: "Match Result",
    sport: "Cricket",
    title: "FULL TIME",
    subtitle: "Match Wrap",
    detail: "KHI won by 6 wickets",
    date: "FRI, 19 JAN",
    emoji: "🏆",
    bg: "linear-gradient(135deg, #002966 0%, #004aad 100%)",
    accent: "#facc15",
    platform: "Facebook",
    platformIcon: "f",
  },
  {
    type: "Event Promo",
    sport: "Football",
    title: "CUP FINAL",
    subtitle: "Coming This Friday",
    detail: "United vs Rangers",
    date: "FRI, 8PM",
    emoji: "🥅",
    bg: "linear-gradient(135deg, #1a0d00 0%, #3d2a00 100%)",
    accent: "#facc15",
    platform: "TikTok",
    platformIcon: "♪",
  },
  {
    type: "Reel Cover",
    sport: "Cricket",
    title: "HIGHLIGHTS",
    subtitle: "Best Catches This Week",
    detail: "Watch Now →",
    date: "TOP 5 MOMENTS",
    emoji: "🎬",
    bg: "linear-gradient(135deg, #000d26 0%, #003380 100%)",
    accent: "#facc15",
    platform: "Reels",
    platformIcon: "▶",
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="bg-[#0a0a0a] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              Social Media
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
              className="text-[clamp(36px,5vw,62px)] font-bold uppercase tracking-tight text-white"
            >
              CONTENT THAT<br />GOES VIRAL
            </h2>
          </div>
          <p className="text-white/40 text-[14px] leading-relaxed max-w-[280px] md:text-right">
            Every match we cover becomes a content machine — posters, reels, scorecard updates, and more.
          </p>
        </div>

        {/* Poster grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posters.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "1 / 1", background: p.bg }}
            >
              {/* Platform badge */}
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-sm">
                <span className="text-white text-[11px]">{p.platformIcon}</span>
                <span style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-white text-[10px] tracking-wider uppercase font-semibold">
                  {p.platform}
                </span>
              </div>

              {/* Type tag */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  style={{ fontFamily: "'Clash Display', sans-serif", background: p.accent, color: p.accent === "#facc15" ? "#0a0a0a" : "#facc15" }}
                  className="text-[9px] font-bold tracking-widest uppercase px-2 py-1"
                >
                  {p.type}
                </span>
              </div>

              {/* Big emoji */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110"
                style={{ opacity: 0.1 }}
              >
                {p.emoji}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}>
                <div
                  style={{ fontFamily: "'Clash Display', sans-serif", color: p.accent }}
                  className="text-[10px] font-semibold tracking-[0.16em] uppercase mb-1"
                >
                  {p.date}
                </div>
                <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[22px] font-bold uppercase text-white leading-none tracking-tight">
                  {p.title}
                </div>
                <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[13px] font-semibold uppercase text-white/70 tracking-wide">
                  {p.subtitle}
                </div>
                <div className="text-[12px] text-white/50 mt-1">{p.detail}</div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: "rgba(0,74,173,0.15)" }}>
                <div style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }} className="text-[11px] font-bold tracking-widest uppercase px-4 py-2">
                  View Post
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { num: "200+", label: "Posters Monthly" },
            { num: "500+", label: "Reels Created" },
            { num: "1.2M+", label: "Total Reach" },
            { num: "4", label: "Platforms Covered" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] px-8 py-7 text-center">
              <div style={{ fontFamily: "'Clash Display', sans-serif", color: "#facc15" }} className="text-3xl font-bold leading-none mb-2">
                {s.num}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/35">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
