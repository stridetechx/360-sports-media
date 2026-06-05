import Image from "next/image";

const services = [
  {
    name: "Live Streaming",
    desc: "Multi-camera HD & 4K production streamed live to YouTube, Facebook, Instagram, and custom platforms with real-time scoreboards.",
    img: "/images/streaming.png",
  },
  {
    name: "Commentary",
    desc: "Expert English, Hindi & Kannada commentators for cricket, football, and badminton — every match, every moment.",
    img: "/images/commentary.png",
  },
  {
    name: "Umpiring & Refereeing",
    desc: "Certified officials for cricket, football, and badminton across all levels in Karnataka.",
    img: "/images/umpiring.png",
  },
  {
    name: "Branding",
    desc: "Team kits, tournament logos, match-day graphics, sponsor decks, and full visual identity packages.",
    img: "/images/branding.png",
  },
  {
    name: "Social Media & Content",
    desc: "Match-day posters, highlight reels, player profiles, scorecards, and real-time updates across all platforms.",
    img: "/images/social.png",
  },
  {
    name: "Match Management",
    desc: "Draw management, live scorekeeping, digital scorecards, stats tracking, and post-match reports.",
    img: "/images/management.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad", color: "#facc15" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              What We Do
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.95 }}
              className="text-[clamp(36px,5vw,64px)] font-bold uppercase tracking-normal text-black"
            >
              OUR<br />SERVICES
            </h2>
          </div>
          <p className="text-black/45 text-[14px] leading-relaxed max-w-[260px] md:text-right">
            Every tool for professional sports media — under one roof in Bengaluru.
          </p>
        </div>

        {/* 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.name}
              className="relative overflow-hidden group"
              style={{ height: "520px" }}
            >
              {/* Full bleed photo */}
              <Image
                src={s.img}
                alt={s.name}
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Blue gradient tint — same as Sports cards */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,74,173,0.92) 0%, rgba(0,74,173,0.40) 50%, rgba(0,74,173,0.10) 100%)",
                }}
              />

              {/* Service name — top left */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-[22px] font-bold uppercase text-white tracking-normal drop-shadow-md"
                >
                  {s.name}
                </span>
              </div>

              {/* Bottom: desc + button — pinned inside card like reference */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <div
                  className="px-5 pt-10 pb-4"
                  style={{ background: "linear-gradient(to top, rgba(0,74,173,0.98) 0%, rgba(0,74,173,0.85) 60%, transparent 100%)" }}
                >
                  <p className="text-white/90 text-[13px] leading-relaxed mb-4">{s.desc}</p>
                  <a
                    href="#contact"
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                    className="block w-full bg-white text-black text-[12px] font-bold tracking-widest uppercase text-center py-4 hover:bg-[#facc15] transition-colors duration-200"
                  >
                    INQUIRE NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
