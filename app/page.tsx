"use client"
import React from "react";
import { SiteSection } from "./components/layout/SiteSection";
import StartSection from "./components/sections/start/StartSection";
import StackSection from "./components/sections/stack/StackSection";
import TimelineSection from "./components/sections/timeline/TimelineSection";
import ContactSection from "./components/sections/contact/ContactSection";
import PortfolioSection from "./components/sections/portfolio/PortfolioSection";
import SectionTitle from "./components/layout/SectionTitle";
import { useMainContext } from "./components/context/mainContext";

export default function Home() {
  const { language } = useMainContext();
  
  return (
    <div className="w-full max-w-[80vw]">
        {/* START */}
        <SiteSection id="start">
          <StartSection/>
        </SiteSection>

        {/* SKILLS */}
        <SiteSection id="skills">
        <SectionTitle title={language === "en-US" ? "SKILLS" : "HABILIDADES"} />
          <StackSection/>
        </SiteSection>

        {/* TIMELINE */}
        <SiteSection id="timeline">
        <SectionTitle title={"TIMELINE"} />
          <TimelineSection/>
        </SiteSection>

        {/* PORTFOLIO */}
        <SiteSection id="portfolio">
        <SectionTitle title={language === "en-US" ? "PORTFOLIO" : "PORTFÓLIO"} />
          <PortfolioSection/>
        </SiteSection>

        {/* CONTACT */}
        <SiteSection id="contact">
          <SectionTitle title={language === "en-US" ? "CONTACT" : "CONTATO"} />
         <ContactSection/>
        </SiteSection>
    </div>
  );
}
