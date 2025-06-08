"use client";
import { useMainContext } from "../context/mainContext";
import ThemeSwitcher from "../ThemeSwitcher";
import { Button } from "./Button";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { LanguageSelector } from "./LanguageSelector";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export const Sidebar = () => {
    const { section, dict } = useMainContext();

    const handleDownloadCV = () => {
        window.open("/cv/bruno-formagio-curriculum.pdf", "_blank");
    }

    return (
        <div className="scale-75 lg:scale-100 origin-top-right right-[3vw] lg:right-[2vw] top-[3vw] lg:top-[2vw] fixed gap-[2vw] lg:gap-[1vw] flex flex-col items-end">
            <div className="flex gap-[2.5vw] lg:gap-[0.9vw] mb-[2vw] lg:mb-[0.2vw] lg:py-0 py-[2vw]">
                <ThemeSwitcher />
                <LanguageSelector />
            </div>
            {<div className={`${section === "start" ? `fadeIn` : `fadeOut opacity-0 hidden`} flex flex-col items-end gap-[3vw] lg:gap-[1vw] `}>
            <Button onClick={() => handleDownloadCV()} solidButton>{dict.home["Resume (PDF)"]} <ArrowDownTrayIcon className="w-[3vw] lg:w-[1vw]" /></Button>
            <div className="flex lg:flex-col gap-[3vw] lg:gap-[1vw]">
                <Button onClick={() => window.open("https://www.linkedin.com/in/brunoformagio/", "_blank")} solidButton>
                    <span className="hidden lg:flex items-center justify-center gap-[3vw] lg:gap-[1vw]">LINKEDIN <ArrowUpRightIcon className="w-[3vw] lg:w-[1vw]" />
                    </span>
                    <img src="logos/linkedin.png" alt="linkedin" className={`w-[7vw] flex lg:hidden dark:invert-0 invert  `}/>
                </Button>
                <Button onClick={() => window.open("https://github.com/brunoformagio", "_blank")} solidButton>
                    <span className="hidden lg:flex items-center justify-center gap-[3vw] lg:gap-[1vw]">GITHUB <ArrowUpRightIcon className="w-[3vw] lg:w-[1vw]" /></span>
                    <img src="logos/github.svg" alt="github" className={`w-[7vw] flex lg:hidden dark:invert-0 invert `}/>
                </Button>
            </div>
            <div className="dark:opacity-50 bg-[url(/detail_1.svg)] mb-[2vw] w-[10vw] relative right-[-5vw] mt-[20vw] h-[20vw] bg-contain bg-no-repeat " />
            </div>}
        </div>
    );
};
