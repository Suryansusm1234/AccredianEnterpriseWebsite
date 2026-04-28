import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CATFramework from "@/components/sections/CATFramework";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import DeliverySteps from "@/components/sections/DeliverySteps";
import DomainExpertise from "@/components/sections/DomainExpertise";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";
import SkillEnhancement from "@/components/sections/SkillEnhancement";
import Testimonials from "@/components/sections/Testimonials";
import TrackRecord from "@/components/sections/TrackRecord";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <Hero />
        <TrackRecord />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <SkillEnhancement />
        <CATFramework />
        <DeliverySteps />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
