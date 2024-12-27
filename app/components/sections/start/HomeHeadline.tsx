"use client"
import { useMainContext } from "../../context/mainContext";
import { GeneralTranslations } from "@/app/constants/GeneralTranslations";
import { RandomLetterChangeAnimation } from "../../fx/RandomLetterChangeAnimation";

export default function HomeHeadline() {
    const { language } = useMainContext();
    return <>
            <div style={{backgroundImage:`url(/me_mobile.webp)`}} className={`block md:hidden [@media(max-height:500px)]:hidden bg-cover relative  h-[25vw] w-[25vw] mt-[-15vw] mb-[2vw] slideIn`}/>

        <div className="text-[5vw] lg:text-[2.2vw] mb-[1vw] lg:mb-0">{GeneralTranslations.section_one[0][language]}</div>
        <h1 className="text-[12vw] lg:text-[8vw] font-black tracking-tight leading-[12vw] lg:leading-[7vw]">
            <RandomLetterChangeAnimation originalText={language === "en-US" ? "F5OXTEN2" : "!NXENH&IRO"} finalText={GeneralTranslations.section_one[1][language]} /><br />
            <RandomLetterChangeAnimation duration={500} originalText={language === "en-US" ? "ENGINEER" : "F5OXTEN2"} finalText={language === "en-US" ? "ENGINEER" : "FRONTEND"} />
        </h1>
    </>

}