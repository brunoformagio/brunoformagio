"use client"
import React from "react";
import SkillsSection from "../stack/SkillsSection";
import { SubSectionTabs } from "../../layout/SubSectionTabs";

export default function StackSection() {
    const [subSection, setSubSection] = React.useState<"code" | "design">("code");

    return <>
        <SubSectionTabs
            sections={["code", "design"]}
            subSection={subSection}
            setSubSection={setSubSection}
        />
        {/* <PrinciplesSection subSection={subSection} /> */}
        <SkillsSection subSection={subSection} />
    </>
}