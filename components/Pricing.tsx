const cameraPlans = [
  {
    name: "1 Camera",
    tier: "Standard",
    highlight: false,
    prices: [
      { matches: "1 Match", price: "₹4,000" },
      { matches: "2 Matches", price: "₹10,000" },
      { matches: "3 Matches", price: "₹14,000" },
    ],
    features: [
      "Basic Live Streaming",
      "Score Overlays",
      "1 Camera Operator",
      "YouTube / Facebook Stream",
      "Post-match raw footage",
    ],
  },
  {
    name: "2 Camera",
    tier: "Popular",
    highlight: true,
    prices: [
      { matches: "1 Match", price: "₹8,000" },
      { matches: "2 Matches", price: "₹15,000" },
      { matches: "3 Matches", price: "₹20,000" },
    ],
    features: [
      "Basic Live Streaming",
      "Score Overlays",
      "2 Camera Operators",
      "YouTube / Facebook Stream",
      "Post-match raw footage",
    ],
  },
  {
    name: "3 Camera",
    tier: "Premium",
    highlight: false,
    prices: [
      { matches: "1 Match", price: "₹12,000" },
      { matches: "2 Matches", price: "₹22,000" },
      { matches: "3 Matches", price: "₹30,000" },
    ],
    features: [
      "Basic Live Streaming",
      "Score Overlays",
      "Sponsor Graphics",
      "Full Branding Package",
      "3 Camera Operators",
      "YouTube / Facebook Stream",
      "Post-match raw footage",
    ],
  },
];

const socialPlans = [
  {
    name: "Standard",
    price: "₹3,000",
    per: "per match",
    desc: "Perfect for clubs wanting consistent match-day presence on social media.",
    highlight: false,
    features: [
      "2 Match-day Posters",
      "1 Highlight Reel",
      "Score Update Stories",
      "Instagram & Facebook",
    ],
  },
  {
    name: "Premium",
    price: "₹5,000",
    per: "per match",
    desc: "Full content coverage for clubs wanting maximum reach and engagement.",
    highlight: true,
    features: [
      "4 Match-day Posters",
      "2 Highlight Reels",
      "Player Spotlight Post",
      "Score Update Stories",
      "Instagram, Facebook & YouTube",
      "Same-day delivery",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad", color: "#facc15" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              Pricing
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.95 }}
              className="text-[clamp(36px,5vw,64px)] font-bold uppercase text-black"
            >
              PLANS THAT FIT<br />EVERY MATCH
            </h2>
          </div>
          <p className="text-black/45 text-[15px] leading-relaxed max-w-[300px] md:text-right">
            Transparent pricing for live streaming and social media — pick what works for your tournament.
          </p>
        </div>

        {/* ── Camera Pricing ── */}
        <div className="mb-6">
          <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[11px] font-bold tracking-[0.14em] uppercase text-black/35 mb-6">
            Live Streaming — Camera Packages
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cameraPlans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col p-8"
                style={{
                  background: plan.highlight ? "#004aad" : "#f8f8f8",
                  border: plan.highlight ? "none" : "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {/* Tier badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      background: plan.highlight ? "#facc15" : "#004aad",
                      color: plan.highlight ? "#0a0a0a" : "#facc15",
                    }}
                    className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1"
                  >
                    {plan.tier}
                  </span>
                </div>

                {/* Plan name */}
                <h3
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className={`text-[32px] font-bold uppercase mb-6 leading-none ${plan.highlight ? "text-white" : "text-black"}`}
                >
                  {plan.name}
                </h3>

                {/* Match pricing */}
                <div className={`flex flex-col gap-0 mb-6 border-t border-b ${plan.highlight ? "border-white/15" : "border-black/10"}`}>
                  {plan.prices.map((p) => (
                    <div
                      key={p.matches}
                      className={`flex items-center justify-between py-3.5 border-b last:border-b-0 ${plan.highlight ? "border-white/10" : "border-black/08"}`}
                    >
                      <span
                        style={{ fontFamily: "'Clash Display', sans-serif" }}
                        className={`text-[13px] font-semibold uppercase tracking-wide ${plan.highlight ? "text-white/70" : "text-black/55"}`}
                      >
                        {p.matches}
                      </span>
                      <span
                        style={{ fontFamily: "'Clash Display', sans-serif" }}
                        className={`text-[22px] font-bold ${plan.highlight ? "text-[#facc15]" : "text-black"}`}
                      >
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    background: plan.highlight ? "#facc15" : "#004aad",
                    color: plan.highlight ? "#0a0a0a" : "#ffffff",
                  }}
                  className="block w-full text-[12px] font-bold tracking-widest uppercase text-center py-4 mb-7"
                >
                  GET STARTED
                </a>

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                        style={{
                          background: plan.highlight ? "#facc15" : "#004aad",
                          color: plan.highlight ? "#0a0a0a" : "#ffffff",
                        }}
                      >
                        ✓
                      </span>
                      <span className={`text-[13px] leading-snug ${plan.highlight ? "text-white/70" : "text-black/60"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Social Media Pricing ── */}
        <div className="mt-16">
          <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[11px] font-bold tracking-[0.14em] uppercase text-black/35 mb-6">
            Social Media Packages
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialPlans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col p-8"
                style={{
                  background: plan.highlight ? "#004aad" : "#f8f8f8",
                  border: plan.highlight ? "none" : "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                    className={`text-[22px] font-bold uppercase ${plan.highlight ? "text-white" : "text-black"}`}
                  >
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span
                      style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
                      className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1"
                    >
                      Best Value
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-3">
                  <span
                    style={{ fontFamily: "'Clash Display', sans-serif", color: plan.highlight ? "#facc15" : "#0a0a0a" }}
                    className="text-[52px] font-bold leading-none"
                  >
                    {plan.price}
                  </span>
                  <span className={`text-[13px] mb-2 ${plan.highlight ? "text-white/50" : "text-black/40"}`}>
                    {plan.per}
                  </span>
                </div>

                <p className={`text-[14px] leading-relaxed mb-6 ${plan.highlight ? "text-white/60" : "text-black/50"}`}>
                  {plan.desc}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    background: plan.highlight ? "#facc15" : "#004aad",
                    color: plan.highlight ? "#0a0a0a" : "#ffffff",
                  }}
                  className="block w-full text-[12px] font-bold tracking-widest uppercase text-center py-4 mb-7"
                >
                  GET STARTED
                </a>

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 pb-3 border-b ${plan.highlight ? "border-white/10" : "border-black/07"} last:border-b-0 last:pb-0`}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                        style={{
                          background: plan.highlight ? "#facc15" : "#004aad",
                          color: plan.highlight ? "#0a0a0a" : "#ffffff",
                        }}
                      >
                        ✓
                      </span>
                      <span className={`text-[13px] ${plan.highlight ? "text-white/70" : "text-black/60"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-black/35 text-[13px] mt-10">
          All prices in INR. Custom packages available for full tournaments — <a href="#contact" style={{ color: "#004aad" }} className="underline underline-offset-2">contact us</a> for a quote.
        </p>

      </div>
    </section>
  );
}
