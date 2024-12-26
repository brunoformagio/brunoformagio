"use client"
import React from "react";
import { useMainContext } from "../../context/mainContext";
import { GeneralTranslations } from "@/app/constants/GeneralTranslations";
import { Button } from "../../layout/Button";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { SpinBarTextAnimation } from "../../fx/SpinBarTextAnimation";
import HomeHeadline from "./HomeHeadline";

export default function StartSection() {
    const { language, setSection, section } = useMainContext();
    const [seeMore, setSeeMore] = React.useState(false);

    return section === "start" && <div className="h-screen lg:h-auto lg:block flex  flex-col items-start justify-center lg:pt-[8vw]">

        {/* HEADLINE */}
        <HomeHeadline />

        {/* SUBTITLE */}
        <div className="mb-[4vw] lg:mb-[1vw] mt-[3vw] lg:mt-[0.5vw] text-[4vw] lg:text-[1.6vw] w-[80vw] lg:w-[42vw]  lg:leading-[2.4vw]">
            {GeneralTranslations.section_one[3][language]}{seeMore && <span className="text-[4vw] lg:text-[1.6vw] pl-2 fadeIn">{GeneralTranslations.section_one[6][language]} </span>}
            <span onClick={() => setSeeMore(!seeMore)} className={`${seeMore ? `inline`: `lg:inline block`}  font-bold cursor-pointer lg:text-[1.3vw] lg:!pl-[0.2vw]`}>[{!seeMore ? GeneralTranslations.section_one[4][language] : GeneralTranslations.section_one[7][language]} <SpinBarTextAnimation />]</span>
        </div>

        {/* CTA BUTTON */}
        <Button onClick={() => setSection("skills")}>
            {GeneralTranslations.section_one[5][language]}  
            <ArrowDownIcon className="w-[5vw] lg:w-[1vw] animate-bounce" />
        </Button>
    </div>
}