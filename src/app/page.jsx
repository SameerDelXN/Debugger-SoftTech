import Image from "next/image";
import Hero from "@/components/HeroSection";
import Why_Choose_Us from "@/components/Why_Choose_Us"
import Courses from "@/components/Courses"
import Statistics from "@/components/Statistics"
import Mission from  "@/components/Mission"
import SuccessStory from "@/components/Success_Story"
import Training from "@/components/Training"
import Partners from "@/components/Partners"
import CTA from "@/components/CTA"
import Placement_Assistant from "@/components/Placement_Assistant"
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Home | Debugger Softtech",
  description: "Welcome to Debugger Softtech – Innovating IT solutions for a better tomorrow.",
};

export default function Home() {
  
  return (
  <>
    <Hero/>
    <Why_Choose_Us/>
    <Courses/>
    <Statistics/>
    <Mission/>
    {/* <SuccessStory/> */}
    <Training/>
    <Partners/>
    <CTA/>
    <Placement_Assistant/>
    <ContactUs/>
  </>
  );
}
