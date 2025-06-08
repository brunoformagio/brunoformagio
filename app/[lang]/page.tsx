"use client";
import React from "react";
import { SiteSection } from "./components/layout/SiteSection";
import StartSection from "./components/sections/start/StartSection";
import StackSection from "./components/sections/stack/StackSection";
import TimelineSection from "./components/sections/timeline/TimelineSection";
import ContactSection from "./components/sections/contact/ContactSection";
import PortfolioSection from "./components/sections/portfolio/PortfolioSection";
import SectionTitle from "./components/layout/SectionTitle";
import { useMainContext } from "./components/context/mainContext";

export default  function Home() {
  const { dict } = useMainContext();

  return (
    dict && <div className="w-full max-w-[80vw]">
        {/* START */}
        <SiteSection id="start">
          <StartSection />
        </SiteSection>

        {/* SKILLS */}
        <SiteSection id="skills" className="h-full pt-[8vh]  !justify-start">
        <SectionTitle title={dict.nav["Skills"]} />
          <StackSection/>
        </SiteSection>

        {/* TIMELINE */}
        <SiteSection id="timeline" className="h-full pt-[8vh]  !justify-start">
        <SectionTitle title={dict.nav["Timeline"]} />
          <TimelineSection/>
        </SiteSection>

        {/* PORTFOLIO */}
        <div>
        <SiteSection id="portfolio" className="h-full pt-[8vh]  !justify-start">
        <SectionTitle title={dict.nav["Portfolio"]} />
          <PortfolioSection/>
        </SiteSection>
        </div>

        {/* CONTACT */}
        <SiteSection id="contact" className="h-full pt-[8vh]  !justify-start">
          <SectionTitle title={dict.nav["Contact"]} />
         <ContactSection/>
        </SiteSection>
    </div>
  );
}
