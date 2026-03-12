import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import InfiniteBanking from "@/components/InfiniteBanking";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <InfiniteBanking />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
