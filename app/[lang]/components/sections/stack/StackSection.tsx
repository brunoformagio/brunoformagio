"use client"
import React from "react";
import SkillsSection from "../stack/SkillsSection";
import { SubSectionTabs } from "../../layout/SubSectionTabs";
import { useMainContext } from "../../context/mainContext";

export default function StackSection() {

    return <>
        <SubSectionTabs
        />
        <SkillsSection/>
    </>
}