"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#facc15", color: "#0a0a0a" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              Enroll Now
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.92 }}
              className="text-[clamp(36px,4.5vw,58px)] font-bold uppercase tracking-tight text-white mb-6"
            >
              READY TO COVER YOUR MATCH?
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-10">
              Tell us about your event. We'll get back within 24 hours with availability and a custom quote.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "📍", label: "Location", val: "Bengaluru, Karnataka — Available Pan-India" },
                { icon: "📞", label: "Phone", val: "+91 98000 00000" },
                { icon: "✉️", label: "Email", val: "hello@360sportsmedia.in" },
                { icon: "🕐", label: "Response Time", val: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[10px] tracking-widest uppercase text-white/30 mb-0.5">{item.label}</div>
                    <div className="text-[14px] text-white/70">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111] p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="text-5xl">🏏</div>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-2xl font-bold uppercase text-white">Message Sent!</h3>
                <p className="text-white/50 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Name *", type: "text", ph: "Your name" }, { label: "Phone *", type: "tel", ph: "+91..." }].map((f) => (
                    <div key={f.label}>
                      <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-white/35 mb-2">{f.label}</label>
                      <input required type={f.type} placeholder={f.ph} className="w-full bg-white/5 border border-white/10 text-white text-[13px] px-4 py-3.5 outline-none placeholder:text-white/20 focus:border-[#004aad] transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-white/35 mb-2">Email *</label>
                  <input required type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 text-white text-[13px] px-4 py-3.5 outline-none placeholder:text-white/20 focus:border-[#004aad] transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-white/35 mb-2">Sport</label>
                    <select className="w-full bg-[#1a1a1a] border border-white/10 text-white/70 text-[13px] px-4 py-3.5 outline-none" style={{ appearance: "none" }}>
                      <option value="">Select...</option>
                      <option>Cricket</option>
                      <option>Football</option>
                      <option>Badminton</option>
                      <option>Multiple Sports</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-white/35 mb-2">Services</label>
                    <select className="w-full bg-[#1a1a1a] border border-white/10 text-white/70 text-[13px] px-4 py-3.5 outline-none" style={{ appearance: "none" }}>
                      <option value="">Select...</option>
                      <option>Live Streaming</option>
                      <option>Commentary</option>
                      <option>Umpiring / Refereeing</option>
                      <option>Content Creation</option>
                      <option>Social Media</option>
                      <option>Full Package</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Clash Display', sans-serif" }} className="block text-[10px] tracking-widest uppercase text-white/35 mb-2">Tell us about your event</label>
                  <textarea rows={3} placeholder="Tournament name, dates, location, expected audience..." className="w-full bg-white/5 border border-white/10 text-white text-[13px] px-4 py-3.5 outline-none placeholder:text-white/20 resize-none focus:border-[#004aad] transition-colors" />
                </div>
                <button
                  type="submit"
                  style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad" }}
                  className="w-full flex items-center justify-between text-white text-[13px] font-bold tracking-widest uppercase px-6 py-4 hover:bg-[#0057cc] transition-colors mt-1"
                >
                  Submit Request
                  <span style={{ background: "#facc15", color: "#004aad" }} className="w-7 h-7 flex items-center justify-center text-lg font-bold">↗</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
