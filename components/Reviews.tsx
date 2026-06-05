const reviews = [
  {
    quote: "360 Sports Media completely transformed how we broadcast our cricket league. The production quality was incredible and their bilingual commentary team knew the game inside out. Our viewership tripled in one season.",
    name: "Arjun Hegde",
    role: "Director, Bengaluru Premier Cricket League",
  },
  {
    quote: "We hired them for a full football season — streaming, content, and social media. Their reels consistently hit 100K+ views and the match-day energy they brought was unmatched. Best investment our club made.",
    name: "Sunita Rao",
    role: "Marketing Head, FC Bengaluru United",
  },
  {
    quote: "For our state badminton championship, 360 handled streaming across 4 courts simultaneously. Professional, punctual, and the highlight reels they delivered the same evening were absolutely brilliant.",
    name: "Kiran Murthy",
    role: "Secretary, Karnataka Badminton Association",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24" style={{ background: "#facc15" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <span
            style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad", color: "#facc15" }}
            className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
          >
            Reviews
          </span>
          <h2
            style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.95 }}
            className="text-[clamp(36px,5vw,58px)] font-bold uppercase tracking-normal text-black mb-3"
          >
            WHAT PEOPLE SAY
          </h2>
          <p className="text-black/60 text-[15px] max-w-[500px] leading-relaxed">
            Real stories from tournament directors, clubs, and associations across Bengaluru and Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 flex flex-col" style={{ minHeight: "320px" }}>
              {/* Big quote mark */}
              <div
                style={{ fontFamily: "'Clash Display', sans-serif", color: "rgba(0,74,173,0.12)", fontSize: "80px", lineHeight: 1 }}
                className="font-bold mb-2 select-none"
              >
                "
              </div>
              <p className="text-black/65 text-[14px] leading-relaxed flex-1 mb-8">{r.quote}</p>
              <div>
                <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[16px] font-bold text-black">{r.name}</div>
                <div className="text-[12px] text-black/45 mt-1">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
