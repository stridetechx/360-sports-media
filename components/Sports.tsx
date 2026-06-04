import Image from "next/image";

const sports = [
  {
    name: "Cricket",
    // → Replace with your photo: /images/cricket.png
    img: "/images/cricket.png",
    desc: "Full tournament coverage — live streaming, commentary, umpiring, and scorecards for T10 to Test matches.",
    tags: ["T20 / T10", "Live Scoring", "Commentary", "Umpiring"],
    tint: "rgba(0,26,77,0.55)",
  },
  {
    name: "Football",
    // → Replace with your photo: /images/football.png
    img: "/images/football.png",
    desc: "Match-day production, referee services, goal highlights, and social-ready content for leagues at every level.",
    tags: ["League Coverage", "Referee Services", "Goal Clips", "Match Reports"],
    tint: "rgba(0,40,10,0.50)",
  },
  {
    name: "Badminton",
    // → Replace with your photo: /images/badminton.png
    img: "/images/badminton.png",
    desc: "Multi-court streaming, draw management, player spotlights, and real-time score updates for tournaments.",
    tags: ["Multi-Court Stream", "Draw Management", "Player Profiles", "Highlights"],
    tint: "rgba(10,0,30,0.60)",
  },
];

export default function Sports() {
  return (
    <section id="sports" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span
            style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
            className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
          >
            Our Programs
          </span>
          <h2
            style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.95 }}
            className="text-[clamp(36px,5vw,60px)] font-bold uppercase tracking-tight text-black mb-3"
          >
            EXPLORE OUR SPORTS
          </h2>
          <p className="text-black/50 text-[14px] max-w-[500px] leading-relaxed">
            Structured media programs built for cricket, football, and badminton — from Bengaluru's grassroots to national stages.
          </p>
        </div>

        {/* 3-column cards — real photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="relative overflow-hidden group cursor-pointer"
              style={{ height: "520px" }}
            >
              {/* Real photo */}
              <Image
                src={sport.img}
                alt={sport.name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Color tint overlay */}
              <div className="absolute inset-0 transition-opacity duration-300" style={{ background: sport.tint }} />

              {/* Bottom gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }}
              />

              {/* Sport name — top left like reference */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-[26px] font-bold uppercase text-white tracking-tight drop-shadow-lg"
                >
                  {sport.name}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <div className="px-5 pb-4">
                  <p className="text-white/70 text-[13px] leading-relaxed mb-3">{sport.desc}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {sport.tags.map((t) => (
                      <span
                        key={t}
                        style={{ fontFamily: "'Clash Display', sans-serif", borderColor: "rgba(255,255,255,0.25)" }}
                        className="text-[9px] font-semibold tracking-widest uppercase text-white/60 border px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Enroll button like reference */}
                <a
                  href="#contact"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="block w-full bg-white text-[#0a0a0a] text-[13px] font-bold tracking-widest uppercase text-center py-4 hover:bg-[#facc15] transition-colors duration-200"
                >
                  INQUIRE NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
