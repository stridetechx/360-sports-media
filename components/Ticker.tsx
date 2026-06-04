const items = [
  "Live Streaming", "Cricket Coverage", "Football Media", "Badminton Coverage", "Commentary",
  "Umpiring Services", "Content Creation", "Social Media", "Match Production", "Sports Analytics",
  "Live Streaming", "Cricket Coverage", "Football Media", "Badminton Coverage", "Commentary",
  "Umpiring Services", "Content Creation", "Social Media", "Match Production", "Sports Analytics",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden py-3.5" style={{ background: "#facc15" }}>
      <div className="inline-flex gap-14 whitespace-nowrap" style={{ animation: "ticker 35s linear infinite" }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="flex items-center gap-4 text-[12px] font-bold tracking-widest uppercase text-[#0a0a0a] shrink-0"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[#004aad]/40" />
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
