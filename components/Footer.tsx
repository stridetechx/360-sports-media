export default function Footer() {
  return (
    <footer className="bg-[#f0ebe0]">
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-8">

        {/* Top: logo left, socials right */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center text-lg font-bold" style={{ background: "#004aad", color: "#facc15", fontFamily: "'Clash Display', sans-serif" }}>
                3
              </div>
              <span style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-2xl font-bold tracking-tight text-black">
                360<span style={{ color: "#004aad" }}>SPORTS</span> MEDIA
              </span>
            </div>
            <p className="text-black/45 text-[13px] leading-relaxed max-w-[280px]">
              Bengaluru's leading sports media company.<br />Cricket, Football & Badminton — covered with passion.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[{ label: "𝕏", href: "#" }, { label: "in", href: "#" }, { label: "f", href: "#" }, { label: "▶", href: "#" }].map((s) => (
              <a key={s.label} href={s.href} style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-black/50 hover:text-[#004aad] text-[18px] font-bold transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* 5-column grid — ADDRESS | OPEN HOURS | MAIN PAGE | ALL PAGES | ABOUT US */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-10 border-b border-black/10">
          {/* Address */}
          <div>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] font-bold tracking-[0.12em] uppercase text-black/35 mb-4">Address</div>
            <p className="text-black/65 text-[13px] leading-relaxed">
              Koramangala,<br />Bengaluru - 560034,<br />Karnataka, India
            </p>
          </div>

          {/* Hours + Contact */}
          <div>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] font-bold tracking-[0.12em] uppercase text-black/35 mb-4">Open Hours</div>
            <p className="text-black/65 text-[13px] leading-relaxed mb-4">
              Mon – Fri: 9AM – 9PM<br />Sat – Sun: 10AM – 6PM
            </p>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] font-bold tracking-[0.12em] uppercase text-black/35 mb-2">Contact</div>
            <p className="text-black/65 text-[13px]">+91 98000 00000</p>
            <p className="text-black/65 text-[13px]">hello@360sportsmedia.in</p>
          </div>

          {/* Main Page */}
          <div>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] font-bold tracking-[0.12em] uppercase text-black/35 mb-4">Main Page</div>
            <ul className="flex flex-col gap-3">
              {["Our Mission", "Services", "Sports", "Reviews", "Alumni"].map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[13px] font-bold uppercase text-black hover:text-[#004aad] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* All Pages */}
          <div>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] font-bold tracking-[0.12em] uppercase text-black/35 mb-4">All Pages</div>
            <ul className="flex flex-col gap-3">
              {["Homepage", "About Us", "All Services", "Our Team", "Enroll Now"].map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[13px] font-bold uppercase text-black hover:text-[#004aad] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] font-bold tracking-[0.12em] uppercase text-black/35 mb-4">About Us</div>
            <ul className="flex flex-col gap-3">
              {["Our Team", "Our Facility", "FAQs", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[13px] font-bold uppercase text-black hover:text-[#004aad] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-[11px] text-black/35">
          <span>© {new Date().getFullYear()} 360 Sports Media. All Rights Reserved. Bengaluru, India.</span>
          <span style={{ fontFamily: "'Clash Display', sans-serif" }} className="uppercase tracking-widest">Cricket • Football • Badminton</span>
        </div>
      </div>
    </footer>
  );
}
