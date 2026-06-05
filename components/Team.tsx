const team = [
  { name: "Ali Hassan", role: "Lead Commentator", sport: "🎙️ Cricket", color: "#001f5c" },
  { name: "Sara Khan", role: "Content Director", sport: "🎬 Media", color: "#1a0d00" },
  { name: "Usman Tariq", role: "Stream Engineer", sport: "📡 Tech", color: "#00103a" },
  { name: "Bilal Raza", role: "Head Umpire", sport: "⚖️ Cricket", color: "#001a0d" },
  { name: "Hira Malik", role: "Social Media Lead", sport: "📲 Digital", color: "#0a001a" },
  { name: "Kamran Mir", role: "Match Producer", sport: "⚽ Football", color: "#1a0a00" },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 mb-14">
        <div className="text-center">
          <span
            style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
            className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
          >
            Coaches
          </span>
          <h2
            style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
            className="text-[clamp(36px,5vw,60px)] font-bold uppercase tracking-normal text-black mb-4"
          >
            EXPERTS BEHIND<br />THE MIC
          </h2>
          <p className="text-black/50 text-[15px] max-w-[420px] mx-auto leading-relaxed">
            Seasoned professionals with a shared passion for sport and storytelling.
          </p>
        </div>
      </div>

      {/* Horizontal scroll row — like reference coaches section */}
      <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-4 px-6 min-w-max max-w-[1200px] mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="relative overflow-hidden flex-shrink-0 group"
              style={{ width: "220px", height: "320px", background: m.color }}
            >
              {/* Big emoji */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] opacity-15 select-none group-hover:scale-110 transition-transform duration-500">
                {m.sport.split(" ")[0]}
              </div>

              {/* Sport label top-left like reference */}
              <div
                style={{ fontFamily: "'Clash Display', sans-serif" }}
                className="absolute top-4 left-4 flex items-center gap-1.5 text-white/70 text-[11px] font-semibold tracking-widest uppercase"
              >
                <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[9px]">
                  {m.sport.split(" ")[0]}
                </span>
                {m.sport.split(" ")[1]}
              </div>

              {/* Bottom info */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
              >
                <div
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-[20px] font-bold uppercase text-white tracking-normal leading-tight"
                >
                  {m.name.split(" ")[0].toUpperCase()}<br />{m.name.split(" ")[1].toUpperCase()}
                </div>
                <div
                  className="text-[10px] uppercase tracking-widest mt-1"
                  style={{ color: "#facc15", fontFamily: "'Clash Display', sans-serif" }}
                >
                  {m.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
