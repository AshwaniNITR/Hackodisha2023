import Faq from "@/components/FAQs/Faq";
import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/Timeline/timeline";
import Statistics from "../components/suraj/Statistics";
import { AboutUs } from "@/components/AboutUs";
import Footer from "@/components/Footer/Footer";
import { Sponsor } from "@/components/Sponsor/Sponsors";
import Judges from "@/components/Judges/Judges";
import Events from "@/components/Events/Events";
import Partners from "@/components/Partners/Partners";
import Prize from "@/components/Prizes/Prize";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Statistics />
      <Timeline />
      <Prize />
      <Judges />
      <Events />
      <Sponsor />
      <Partners />
      <div className="relative">
        <Faq/>
        <Footer />
      </div>
    </>
  );
}
