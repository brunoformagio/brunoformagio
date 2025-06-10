"use client"
import React, { useEffect, useMemo, useState } from "react";
import { useMainContext } from "../../context/mainContext";
import { Button } from "../../layout/Button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { ImageLightbox } from "../../layout/ImageLightbox";

interface PortfolioProps {
    title: string;
    role: string;
    image_url: any;
    url?: string;
    fullImage?: string;
}

export default function PortfolioSection() {
    const { language } = useMainContext();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const LINKS: PortfolioProps[] = [
        {
            title: "Bunny Knights (dApp)",
            role: "Frontend, UX/UI",
            image_url: "portfolio/1.webp",
            url: "https://bunnyknights.com"
        },
        {
            title: "NFEAT",
            role: "Frontend, UX/UI",
            image_url: "portfolio/2.webp",
            fullImage: "portfolio/2_full.webp",

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



    const PortfolioElement =({ title, role, image_url, url, fullImage }: PortfolioProps) => {
        const [fullImageUrl, setFullImageUrl] = useState<string | null>(null);

        return (
            <>
            <div className="group border w-full h-[52vw] lg:h-[14vw] dark:border-white/20  bg-cover bg-top-center bg-no-repeat" style={{backgroundImage:`url(${image_url})`}} >
                <div className="dark:bg-black/30  bg-white/90 backdrop-blur-lg p-[2vw] group-hover:flex hidden text-[1vw] h-full transition-[0.2s] items-center justify-center text-center w-full gap-[1vw] ">
                    <div className="flex flex-col gap-[0.8vw] text-[4vw] lg:text-[1vw] lg:leading-[0.9vw]">
                        <span className="font-bold">{title}</span>
                        <span>{role}</span>
                        {url && <Button  onClick={()=> window.open(url, "_blank")}>
                            {language === "en" ? "Access" : "Acessar"}<ArrowTopRightOnSquareIcon className="w-[4vw] lg:w-[1vw]"/>
                        </Button>}
                        {fullImage && <Button  onClick={()=> setFullImageUrl(fullImage)}>
                            {language === "en" ? "Expand" : "Expandir"}<ArrowTopRightOnSquareIcon className="w-[4vw] lg:w-[1vw]"/>
                        </Button>}
                    </div>
                </div>
            </div>

            {/* Full Image (Lightbox) */}
            {fullImageUrl && 
            <ImageLightbox image={fullImageUrl} onClose={()=> setFullImageUrl(null)} />}
            </>
        );
    };    
    
    
    const renderPortfolioElement = useMemo(() => {
        return LINKS.map((link, i) => (
            <PortfolioElement key={i} {...link} />
        )) ;
    }, [language]);

    return (
        <>
            <div className="grid  lg:grid-cols-3 gap-[1vw] mt-[1vw]">
                {isMounted && renderPortfolioElement}
            </div>
        </>
    );
}
