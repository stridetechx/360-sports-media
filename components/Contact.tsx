"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/contact-bg.png"
        alt="Stadium background"
        fill
        unoptimized
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Clean dark overlay — no grid, just a smooth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,10,40,0.97) 0%, rgba(0,30,80,0.85) 55%, rgba(0,10,40,0.60) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* Left — contact info */}
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              Get In Touch
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
              className="text-[clamp(36px,4.5vw,58px)] font-bold uppercase tracking-normal text-white mb-5"
            >
              READY TO COVER YOUR MATCH?
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-12">
              Tell us about your event and we'll get back within 24 hours with availability and a custom quote.
            </p>

            {/* Contact details — highlighted cards */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Location", val: "Bengaluru, Karnataka — Available Pan-India" },
                { label: "Phone", val: "+91 98000 00000" },
                { label: "Email", val: "hello@360sportsmedia.in" },
                { label: "Response Time", val: "Within 24 hours" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.08)", borderLeft: "3px solid #facc15" }}
                >
                  <div>
                    <div
                      style={{ fontFamily: "'Clash Display', sans-serif", color: "#facc15" }}
                      className="text-[10px] tracking-widest uppercase font-bold mb-0.5"
                    >
                      {item.label}
                    </div>
                    <div className="text-[14px] text-white font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — clean white form */}
          <div className="bg-white p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="text-5xl">🏏</div>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-2xl font-bold uppercase text-black">
                  Message Sent!
                </h3>
                <p className="text-black/50 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
                <h3
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-[20px] font-bold uppercase text-black tracking-normal mb-2"
                >
                  Send Us A Message
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Name *", type: "text", ph: "Your name" }, { label: "Phone *", type: "tel", ph: "+91..." }].map((f) => (
                    <div key={f.label}>
                      <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-black/40 mb-2">{f.label}</label>
                      <input required type={f.type} placeholder={f.ph} className="w-full bg-[#f8f8f8] border border-black/10 text-black text-[13px] px-4 py-3.5 outline-none placeholder:text-black/25 focus:border-[#004aad] transition-colors" />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-black/40 mb-2">Email *</label>
                  <input required type="email" placeholder="your@email.com" className="w-full bg-[#f8f8f8] border border-black/10 text-black text-[13px] px-4 py-3.5 outline-none placeholder:text-black/25 focus:border-[#004aad] transition-colors" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-black/40 mb-2">Sport</label>
                    <select className="w-full bg-[#f8f8f8] border border-black/10 text-black/70 text-[13px] px-4 py-3.5 outline-none focus:border-[#004aad] transition-colors" style={{ appearance: "none" }}>
                      <option value="">Select...</option>
                      <option>Cricket</option>
                      <option>Football</option>
                      <option>Badminton</option>
                      <option>Multiple Sports</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-black/40 mb-2">Services</label>
                    <select className="w-full bg-[#f8f8f8] border border-black/10 text-black/70 text-[13px] px-4 py-3.5 outline-none focus:border-[#004aad] transition-colors" style={{ appearance: "none" }}>
                      <option value="">Select...</option>
                      <option>Live Streaming</option>
                      <option>Commentary</option>
                      <option>Umpiring / Refereeing</option>
                      <option>Branding</option>
                      <option>Social Media & Content</option>
                      <option>Full Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-black/40 mb-2">Tell us about your event</label>
                  <textarea rows={3} placeholder="Tournament name, dates, location, expected audience..." className="w-full bg-[#f8f8f8] border border-black/10 text-black text-[13px] px-4 py-3.5 outline-none placeholder:text-black/25 resize-none focus:border-[#004aad] transition-colors" />
                </div>

                <button
                  type="submit"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="btn-blue w-full flex items-center justify-between text-[13px] font-bold tracking-widest uppercase px-6 py-4"
                >
                  Submit Request
                  <span style={{ background: "#facc15" }} className="w-7 h-7 flex items-center justify-center"><ArrowUpRight size={16} color="#004aad" /></span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
