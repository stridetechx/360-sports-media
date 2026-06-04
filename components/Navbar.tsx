"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Sports", href: "#sports" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-xl font-bold tracking-tight text-white">
            360<span style={{ color: "#facc15" }}>SPORTS</span> MEDIA
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-white/60 hover:text-white text-[13px] font-semibold tracking-widest uppercase transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad" }}
            className="hidden md:flex items-center gap-3 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-3 transition-colors hover:bg-[#0057cc]"
          >
            Get In Touch
            <span className="w-5 h-5 flex items-center justify-center text-[#004aad] bg-[#facc15] text-xs font-bold">↗</span>
          </a>

          <button className="md:hidden text-white" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-[99] flex flex-col items-center justify-center gap-10">
          <button className="absolute top-5 right-6 text-white" onClick={() => setOpen(false)}>
            <X size={30} />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-5xl font-bold uppercase text-white hover:text-[#facc15] tracking-tight transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad" }}
            className="mt-4 text-white text-sm font-bold tracking-widest uppercase px-8 py-4"
          >
            Get In Touch
          </a>
        </div>
      )}
    </>
  );
}
