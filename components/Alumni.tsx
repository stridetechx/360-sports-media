import Image from "next/image";

const alumni = [
  {
    name: "Rohit Sharma",
    achievement: "Karnataka Premier League",
    desc: "Our live coverage of his debut season reached 400K viewers across Karnataka — his club went from unknown to viral.",
    sport: "Cricket",
    img: "/images/cricket.png",
  },
  {
    name: "FC Bengaluru FC",
    achievement: "State League Champions",
    desc: "Full-season media partnership. 12 matches streamed live, 800K total views, and a documentary that's still trending.",
    sport: "Football",
    img: "/images/football.png",
  },
  {
    name: "Priya Nair",
    achievement: "National Badminton Finalist",
    desc: "From a local Bengaluru tournament we streamed to the national spotlight — her highlight reel hit 200K views in 48 hours.",
    sport: "Badminton",
    img: "/images/badminton.png",
  },
];

export default function Alumni() {
  return (
    <section id="alumni" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span
            style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
            className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
          >
            360 Alumni
          </span>
          <h2
            style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
            className="text-[clamp(36px,5vw,60px)] font-bold uppercase tracking-tight text-black"
          >
            ATHLETES WHO<br />WORKED WITH US
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {alumni.map((a) => (
            <div key={a.name} className="relative overflow-hidden group" style={{ height: "440px" }}>
              {/* Real photo background */}
              <Image
                src={a.img}
                alt={a.name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.45) 100%)" }} />

              {/* Achievement badge — top left like reference */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: "#facc15" }}>
                  🏅
                </div>
                <span
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-white text-[11px] font-bold tracking-widest uppercase leading-tight"
                >
                  {a.achievement}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                <div style={{ fontFamily: "'Clash Display', sans-serif", color: "#facc15" }} className="text-[10px] font-semibold tracking-widest uppercase mb-2">
                  {a.sport}
                </div>
                <h3
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-[28px] font-bold uppercase text-white tracking-tight leading-tight mb-2"
                >
                  {a.name.toUpperCase()}
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
