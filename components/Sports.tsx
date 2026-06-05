import Image from "next/image";

const sports = [
  {
    name: "Cricket",
    img: "/images/cricket.png",
    desc: "Full tournament coverage — live streaming, commentary, umpiring, and scorecards for T10 to Test matches.",
  },
  {
    name: "Football",
    img: "/images/football.png",
    desc: "Match-day production, referee services, goal highlights, and social-ready content for leagues at every level.",
  },
  {
    name: "Badminton",
    img: "/images/badminton.png",
    desc: "Multi-court streaming, draw management, player spotlights, and real-time score updates for tournaments.",
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
            className="text-[clamp(36px,5vw,60px)] font-bold uppercase tracking-normal text-black mb-3"
          >
            EXPLORE OUR SPORTS
          </h2>
          <p className="text-black/50 text-[15px] max-w-[480px] leading-relaxed">
            Structured media programs built for cricket, football, and badminton — from Bengaluru's grassroots to national stages.
          </p>
        </div>

        {/* 3 cards — matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="relative overflow-hidden group"
              style={{ height: "520px" }}
            >
              {/* Full bleed photo */}
              <Image
                src={sport.img}
                alt={sport.name}
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="33vw"
              />

              {/* Blue-tinted gradient overlay — strong at bottom, fades up */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,74,173,0.90) 0%, rgba(0,74,173,0.40) 45%, rgba(0,74,173,0.10) 100%)",
                }}
              />

              {/* Sport name — top left */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-[26px] font-bold uppercase text-white tracking-normal drop-shadow-md"
                >
                  {sport.name}
                </span>
              </div>

              {/* Bottom: description + button */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <p className="text-white/85 text-[14px] leading-relaxed px-5 pb-4">
                  {sport.desc}
                </p>
                <a
                  href="#contact"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="btn-dark block w-full text-[13px] font-bold tracking-widest uppercase text-center py-4"
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
