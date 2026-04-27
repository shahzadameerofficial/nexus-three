import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ClientsSection /> */}
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      {/* <TeamSection /> */}
      <FAQSection />
      <CTASection />

    </>
  );
}
