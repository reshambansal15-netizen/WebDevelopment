import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ServicesPreview from "../components/ServicesPreview";
import WhyChoose from "../components/WhyChoose";
import AboutSection from "../components/AboutSection";
import PortfolioPreview from "../components/PortfolioPreview";
import Team from "../components/Team";
import TestimonialsPreview from "../components/TestimonialsPreview";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutSection />
      <WhyChoose />
      <PortfolioPreview />
      <Team />
      <TestimonialsPreview />
      <CTA />
    </>
  );
}

export default Home;