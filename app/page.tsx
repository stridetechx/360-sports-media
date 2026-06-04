import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Sports from "@/components/Sports";
import LiveSection from "@/components/LiveSection";
import SocialSection from "@/components/SocialSection";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Alumni from "@/components/Alumni";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Sports />
      <LiveSection />
      <SocialSection />
      <WhyUs />
      <Team />
      <Alumni />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
