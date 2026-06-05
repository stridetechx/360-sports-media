const reasons = [
  { title: "End-to-End Coverage", desc: "Cameras, commentators, umpires, stream, and post-production — one team, one invoice. No juggling multiple vendors." },
  { title: "Cricket-First Expertise", desc: "500+ cricket matches covered across Karnataka, from grassroots club games to state-level tournaments, with proven broadcast quality." },
  { title: "Social-Ready Output", desc: "Every match generates highlight clips and reels optimised for Instagram, TikTok, and Twitter — delivered the same evening." },
  { title: "Rapid Deployment", desc: "Our mobile production units can be set up and broadcasting live in under 90 minutes, anywhere in Bengaluru." },
  { title: "Trilingual Commentary", desc: "English, Hindi, and Kannada commentary tracks available simultaneously — maximising reach across all audiences." },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          <div className="md:sticky md:top-28">
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad", color: "#facc15" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-6"
            >
              Why 360
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
              className="text-[clamp(36px,4.5vw,60px)] font-bold uppercase tracking-tight text-black mb-6"
            >
              ONE TEAM.<br />FULL COVERAGE.
            </h2>
            <p className="text-black/50 text-[16px] leading-relaxed mb-10 max-w-[380px]">
              Most tournaments struggle because their media is fragmented. We bring streaming, commentary, officiating, and content under one roof.
            </p>
            <a
              href="#contact"
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad" }}
              className="inline-flex items-center gap-3 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-3.5 hover:bg-[#0057cc] transition-colors"
            >
              Partner With Us
              <span style={{ background: "#facc15", color: "#004aad" }} className="w-6 h-6 flex items-center justify-center text-sm font-bold">↗</span>
            </a>
          </div>

          <div className="flex flex-col divide-y divide-black/10">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-6 py-8">
                <div style={{ fontFamily: "'Clash Display', sans-serif", color: "#004aad", minWidth: "36px" }} className="text-[13px] font-bold tracking-widest pt-1">
                  0{i + 1}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[20px] font-bold text-black mb-3 leading-tight">
                    {r.title}
                  </h4>
                  <p className="text-black/50 text-[15px] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
