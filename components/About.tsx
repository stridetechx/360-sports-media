const stats = [
  { num: "500+", label: "Matches Produced" },
  { num: "1.2M+", label: "Viewers Reached" },
  { num: "40+", label: "Expert Team" },
  { num: "8+", label: "Years in Media" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f0ebe0] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad", color: "#facc15" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-6"
            >
              About Us
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.95 }}
              className="text-[clamp(36px,4.5vw,58px)] font-bold uppercase tracking-tight text-black"
            >
              GREAT SPORTS{" "}
              <span className="text-black/20">DESERVES</span>{" "}
              GREAT MEDIA
            </h2>
          </div>

          <div>
            <p className="text-black/55 text-[15px] leading-relaxed mb-6">
              360 Sports Media is Bengaluru's leading full-service sports production house. We cover cricket, football, and badminton — bringing broadcast-quality media to tournaments of every size, from local leagues to national championships.
            </p>
            <p className="text-black/55 text-[15px] leading-relaxed mb-10">
              Our team handles everything — cameras, commentary in English, Hindi & Kannada, streaming, officiating, content, and social media — so organisers can focus entirely on the game.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} style={{ borderTopColor: "#004aad" }} className="border-t-2 pt-4">
                  <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-4xl font-bold text-black leading-none">{s.num}</div>
                  <div className="text-[11px] uppercase tracking-widest text-black/40 mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
