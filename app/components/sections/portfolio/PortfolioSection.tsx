"use client"
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useMainContext } from "../../context/mainContext";
import { Button } from "../../layout/Button";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface PortfolioProps {
    title: string;
    role: string;
    image_url: any;
    url?: string;
}

export default function PortfolioSection() {
    const { resolvedTheme } = useTheme();
    const { language } = useMainContext();

    const LINKS: PortfolioProps[] = [
        {
            title: "Bunny Knights",
            role: "Frontend, UX/UI",
            image_url: "portfolio/1.webp",
            url: "https://bunnyknights.com"
        },
        {
            title: "NFEAT",
            role: "Frontend, UX/UI",
            image_url: "portfolio/2.webp"
        },
        {
            title: "FYNT",
            role: "Frontend, UX/UI",
            image_url: "portfolio/3.webp"
        },
        {
            title: "Bren",
            role: "Frontend, UX/UI",
            image_url: "portfolio/4.webp",
            url: "https://wearebren.com"
        },
        {
            title: "Bianello",
            role: "UI/UX",
            image_url: "portfolio/5.webp",
            url: "https://bianello.com.br"
        },
    ];

    const PortfolioElement = ({ title, role, image_url, url }: PortfolioProps) => {
        return (
            <div className="group border w-full h-[52vw] lg:h-[14vw] dark:border-white/20  bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(${image_url})`}} >
                <div className="dark:bg-black/30  bg-white/90 backdrop-blur-lg p-[2vw] group-hover:flex hidden text-[1vw] h-full transition-[0.2s] items-center justify-center text-center w-full gap-[1vw] ">
                    <div className="flex flex-col gap-[0.8vw] text-[4vw] lg:text-[1vw] lg:leading-[0.9vw]">
                        <span className="font-bold">{title}</span>
                        <span>{role}</span>
                        {url && <Button  onClick={()=> window.open(url, "_blank")}>
                            {language === "en-US" ? "Access" : "Acessar"}<ArrowTopRightOnSquareIcon className="w-[4vw] lg:w-[1vw]"/>
                        </Button>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="grid  lg:grid-cols-3 gap-[1vw] mt-[1vw]">
                {LINKS.map((link, i) => (
                    <PortfolioElement key={i} {...link} />
                ))}
            </div>
        </>
    );
}
