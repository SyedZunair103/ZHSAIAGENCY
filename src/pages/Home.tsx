import Seo from "../components/ui/Seo";
import Hero from "./home/Hero";
import TrustStrip from "./home/TrustStrip";
import ProblemSection from "./home/ProblemSection";
import AiSection from "./home/AiSection";
import AiAgentsVisual from "./home/AiAgentsVisual";
import AutomationWorkflow from "./home/AutomationWorkflow";
import TechnologySection from "./home/TechnologySection";
import CreativeSection from "./home/CreativeSection";
import ThreeDSection from "./home/ThreeDSection";
import GrowthSection from "./home/GrowthSection";
import HowWeWork from "./home/HowWeWork";
import IndustriesSection from "./home/IndustriesSection";
import CaseStudiesPreview from "./home/CaseStudiesPreview";
import WhyZhs from "./home/WhyZhs";
import AboutPreview from "./home/AboutPreview";
import FinalCta from "./home/FinalCta";

export default function Home() {
  return (
    <>
      <Seo
        title="ZHS AI Agency — Build Smarter. Automate Faster. Grow Better."
        description="ZHS AI Agency builds intelligent AI systems, automation workflows, digital products, creative experiences and growth solutions for modern businesses."
        path="/"
      />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <AiSection />
      <AiAgentsVisual />
      <AutomationWorkflow />
      <TechnologySection />
      <CreativeSection />
      <ThreeDSection />
      <GrowthSection />
      <HowWeWork />
      <IndustriesSection />
      <CaseStudiesPreview />
      <WhyZhs />
      <AboutPreview />
      <FinalCta />
    </>
  );
}
