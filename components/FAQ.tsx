"use client";
import { useState } from "react";

const faqs = [
  { q: "What types of tournaments do you cover?", a: "Everything from local club cricket and football leagues to national-level tournaments — academies, district boards, corporate events, and federation-level competitions." },
  { q: "Can you handle live streaming and umpiring for the same event?", a: "Absolutely — that's our core strength. One unified team for commentary, streaming, officiating, and content creation." },
  { q: "Which platforms can you stream to?", a: "YouTube Live, Facebook Live, Instagram Live, and any custom RTMP endpoint. We can also set up a white-label streaming page for your tournament." },
  { q: "Do you provide bilingual commentary?", a: "Yes. Our commentary team delivers both English and Urdu commentary tracks simultaneously." },
  { q: "How far in advance should we book?", a: "2–3 weeks for large tournaments; 5–7 days for smaller matches. Contact us and we'll confirm availability quickly." },
  { q: "Do you deliver post-match content the same day?", a: "Yes — highlight clips and social-ready reels within 1–3 hours of the final whistle, ready to post the same evening." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-16 items-start">
          <div className="md:sticky md:top-28">
            <span
              style={{ fontFamily: "'Clash Display', sans-serif", background: "#004aad", color: "#facc15" }}
              className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-5"
            >
              FAQs
            </span>
            <h2
              style={{ fontFamily: "'Clash Display', sans-serif", lineHeight: 0.95 }}
              className="text-[clamp(36px,4.5vw,52px)] font-bold uppercase tracking-tight text-black mb-5"
            >
              LOOKING FOR ANSWERS?
            </h2>
            <p className="text-black/50 text-[14px] leading-relaxed">
              Everything you need to know before your first match.{" "}
              <a href="#contact" style={{ color: "#004aad" }} className="underline underline-offset-2">Reach out to us.</a>
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black/10 first:border-t first:border-black/10">
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-5"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-[16px] font-bold uppercase tracking-tight text-black">
                    {faq.q}
                  </span>
                  <span
                    className="w-7 h-7 flex items-center justify-center text-white text-lg shrink-0 transition-transform duration-200"
                    style={{
                      background: "#004aad",
                      transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openIdx === i && (
                  <p className="pb-5 text-[14px] text-black/55 leading-relaxed max-w-[580px]">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
