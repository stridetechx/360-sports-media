import Image from "next/image";

// 16 poster images — drop 1.png to 16.png into /public/images/
const posters = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/${i + 1}.png`,
  alt: `360 Sports Media poster ${i + 1}`,
}));

// Split into two rows: first 8 scroll left, next 8 scroll right
const row1 = posters.slice(0, 8);
const row2 = posters.slice(8, 16);

export default function SocialSection() {
  return (
    <section id="social" className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              Social Media
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
              className="text-[clamp(36px,5vw,62px)] font-bold uppercase text-black"
            >
              CONTENT THAT<br />GOES VIRAL
            </h2>
          </div>
          <p className="text-black/45 text-[14px] leading-relaxed max-w-[280px] md:text-right">
            Every match we cover becomes a content machine — posters, reels, scorecard updates, and more.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div
          className="flex gap-4"
          style={{ animation: "scrollLeft 35s linear infinite", width: "max-content" }}
        >
          {[...row1, ...row1].map((p, i) => (
            <PosterCard key={i} src={p.src} alt={p.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative mb-14">
        <div
          className="flex gap-4"
          style={{ animation: "scrollRight 35s linear infinite", width: "max-content" }}
        >
          {[...row2, ...row2].map((p, i) => (
            <PosterCard key={i} src={p.src} alt={p.alt} />
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {[
            { num: "200+", label: "Posters Monthly" },
            { num: "500+", label: "Reels Created" },
            { num: "1.2M+", label: "Total Reach" },
            { num: "4", label: "Platforms Covered" },
          ].map((s) => (
            <div key={s.label} className="bg-white px-8 py-7 text-center">
              <div
                style={{ fontFamily: "'Clash Display', sans-serif", color: "#004aad" }}
                className="text-3xl font-bold leading-none mb-2"
              >
                {s.num}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-black/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function PosterCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden group"
      style={{ width: "260px", height: "325px" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        sizes="280px"
      />
      {/* Subtle blue hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(0,74,173,0.2)" }}
      />
    </div>
  );
}
