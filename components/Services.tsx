import Image from "next/image";

// Row 1: Live Streaming (wide) | Commentary
// Row 2: Umpiring | Branding | Social Media  (3 equal)
// Row 3: Content Creation (full width)

const row1 = [
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
];

const row2 = [
  {
    name: "Umpiring & Refereeing",
    desc: "Certified officials for cricket, football, and badminton across all levels in Karnataka.",
    img: "/images/umpiring.png",
  },
  {
    name: "Branding",
    desc: "Team kits, tournament logos, match-day graphics, sponsor decks, and full visual identity packages for clubs and associations.",
    img: "/images/branding.png",
  },
  {
    name: "Match Management",
    desc: "Draw management, live scorekeeping, digital scorecards, stats tracking, and post-match reports.",
    img: "/images/management.png",
  },
];

const row3 = [
  {
    name: "Social Media & Content",
    desc: "Full-service social media management combined with same-day content production — match-day posters, highlight reels, player profiles, scorecards, and real-time updates across Instagram, YouTube, Facebook, and TikTok.",
    img: "/images/social.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f0ebe0] py-24">
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
              className="text-[clamp(36px,5vw,64px)] font-bold uppercase tracking-tight text-black"
            >
              OUR<br />SERVICES
            </h2>
          </div>
          <p className="text-black/45 text-[14px] leading-relaxed max-w-[260px] md:text-right">
            Every tool for professional sports media — under one roof in Bengaluru.
          </p>
        </div>

        {/* Row 1 — Live Streaming (wide) + Commentary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <ServiceCard s={row1[0]} height="360px" className="md:col-span-2" />
          <ServiceCard s={row1[1]} height="360px" className="md:col-span-1" />
        </div>

        {/* Row 2 — 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row2.map((s) => (
            <ServiceCard key={s.name} s={s} height="300px" className="" />
          ))}
        </div>

        {/* Row 3 — Content Creation full width */}
        <div className="grid grid-cols-1 gap-4">
          <ServiceCard s={row3[0]} height="280px" className="" />
        </div>

      </div>
    </section>
  );
}

function ServiceCard({
  s,
  height,
  className,
}: {
  s: { name: string; desc: string; img: string };
  height: string;
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden group cursor-default ${className}`}
      style={{ height }}
    >
      {/* Photo */}
      <Image
        src={s.img}
        alt={s.name}
        fill
        unoptimized
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="800px"
      />

      {/* Gradient — visible photo, dark bottom for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* Blue tint on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(0,74,173,0.28)" }}
      />

      {/* Text content — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <div
          className="h-[2px] mb-4 transition-all duration-300 group-hover:w-14"
          style={{ background: "#facc15", width: "28px" }}
        />
        <h3
          style={{ fontFamily: "'Clash Display', sans-serif" }}
          className="text-[20px] font-bold uppercase text-white tracking-tight leading-tight mb-2"
        >
          {s.name}
        </h3>
        <p className="text-white/55 text-[13px] leading-relaxed">{s.desc}</p>
      </div>
    </div>
  );
}
