"use client"
import { useMainContext } from "../../context/mainContext";
import { RandomLetterChangeAnimation } from "../../fx/RandomLetterChangeAnimation";

export default function HomeHeadline() {
    const { dict, language } = useMainContext();
    return language && <>
            <div style={{backgroundImage:`url(/me_mobile.webp)`}} className={`block md:hidden [@media(max-height:500px)]:hidden bg-cover relative  h-[25vw] w-[25vw] mt-[-15vw] mb-[2vw] slideIn`}/>

        <div className="text-[5vw] lg:text-[2.2vw] mb-[1vw] lg:mb-0">{dict.home["presentation"]}</div>
        <h1 className="text-[12vw] lg:text-[8vw] font-black tracking-tight leading-[12vw] lg:leading-[7vw]">
            <RandomLetterChangeAnimation originalText={language === "en" ? "F5OXTEN2" : "!NXENH&IRO"} finalText={language === "en" ? "FRONTEND" : "ENGENHEIRO"} /><br />
            <RandomLetterChangeAnimation duration={500} originalText={language === "en" ? "ENGINEER" : "F5OXTEN2"} finalText={language === "en" ? "ENGINEER" : "FRONTEND"} />
        </h1>
    </>

}