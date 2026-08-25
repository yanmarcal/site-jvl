import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <AboutUs />
      <WhyUs />
      <Testimonials />
      <ContactLocation />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}

