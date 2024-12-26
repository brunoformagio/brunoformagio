"use client";
import { useMainContext } from "../context/mainContext";
import ThemeSwitcher from "../ThemeSwitcher";
import { Button } from "./Button";
import { ArrowUpRightIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { LanguageSelector } from "./LanguageSelector";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
    const router = useRouter();
    const { section } = useMainContext();

    const handleDownloadCV = () => {
        window.open("/cv/bruno-formagio-curriculum.pdf", "_blank");
    }

    return (
        <div className="scale-75 lg:scale-100 origin-top-right right-[3vw] lg:right-[2vw] top-[3vw] lg:top-[2vw] fixed gap-[2vw] lg:gap-[1vw] flex flex-col items-end">
            <div className="flex gap-[0.9vw]">
                <ThemeSwitcher />
                <LanguageSelector />
            </div>
            {section === "start" && <div className=" flex flex-col items-end gap-[3vw] lg:gap-[1vw] ">
            <Button onClick={() => handleDownloadCV()} solidButton>DOWNLOAD FULL CV <ArrowDownIcon className="w-[3vw] lg:w-[1vw]" /></Button>
            <Button onClick={() => window.open("https://www.linkedin.com/in/brunoformagio/", "_blank")} solidButton>LINKEDIN <ArrowUpRightIcon className="w-[3vw] lg:w-[1vw]" /></Button>
            <Button onClick={() => window.open("https://github.com/brunoformagio", "_blank")} solidButton>GITHUB <ArrowUpRightIcon className="w-[3vw] lg:w-[1vw]" /></Button>
            <div className="dark:opacity-50 bg-[url(/detail_1.svg)] mb-[2vw] w-[10vw] relative right-[-5vw] mt-[20vw] h-[20vw] bg-contain bg-no-repeat " />
            </div>}
        </div>
    );
};
