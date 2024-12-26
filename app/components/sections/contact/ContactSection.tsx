"use client"
import React, { useState } from "react";
import { EnvelopeIcon, Square2StackIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useMainContext } from "../../context/mainContext";

interface LinkProps {
    url: string;
    label: string;
    icon: any;
}

export default function ContactSection() {
    const { resolvedTheme } = useTheme();
    const { language } = useMainContext();

    const LINKS: LinkProps[] = [
        {
            url: "https://github.com/brunoformagio",
            label: "github.com/brunoformagio",
            icon: <img className={`${resolvedTheme === "light" ? `` : `invert`} w-[7vw] lg:w-[1.8vw]`} src="logos/github.svg" alt="GitHub" />
        },
        {
            url: "mailto:contato@brunoformagio.com.br",
            label: "contato@brunoformagio.com.br",
            icon: <EnvelopeIcon className="w-[7vw] lg:w-[1.8vw]" />
        },
        {
            url: "https://www.linkedin.com/in/brunoformagio/",
            label: "linkedin.com/in/brunoformagio/",
            icon: <img className={`${resolvedTheme === "light" ? `` : `invert`} w-[7vw] lg:w-[1.8vw]`} src="logos/linkedin.png" alt="LinkedIn" />
        }
    ];

    const LinkElement = ({ url, label, icon }: LinkProps) => {
        const [copied, setCopied] = useState(false);

        const handleCopy = () => {
            navigator.clipboard.writeText(label);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000); // A mensagem desaparece após 2 segundos
        };

        return (
            <div className="border dark:border-white/20 p-[5vw] lg:p-[2vw]">
                <div className="text-[4vw] lg:text-[1vw] lg:flex-row flex-col flex items-center justify-start w-full gap-[1vw]">
                    {icon}
                    <div className="flex lg:flex-row flex-col gap-[2vw] lg:gap-[1vw]">
                        <div onClick={() => window.open(url, "_blank")} className="cursor-pointer hover:underline w-full flex gap-[1vw] lg:gap-[0.5vw]">
                            <span className="text-[3vw] lg:text-[1vw]">{label}</span>
                            <span onClick={() => window.open(url, "_blank")} className="w-[4vw] lg:w-[1.3vw]">
                                <ArrowTopRightOnSquareIcon />
                            </span>
                        </div>
                        <span
                            onClick={handleCopy}
                            className="dark:bg-[#333333] bg-[#f1f1f1] hover:scale-110 transition rounded-[0.5vw] text-[3vw] lg:text-[0.7vw] flex gap-[1vw] lg:gap-[0.2vw] items-center justify-center px-[0.5vw] py-[2vw] lg:py-[0.2vw] cursor-pointer"
                        >
                            {language === "en-US" ? "COPY" : "COPIAR"}
                            <Square2StackIcon className="w-[3vw] lg:w-[1vw]" />
                        </span>
                    </div>
                    {copied && (
                    <div className="text-green-800 dark:text-green-500 texy-[1vw] lg:text-[0.8vw]  mt-[0.5vw] fadeOut" style={{animationDuration:"1.5s"}}>
                        {language === "en-US" ? "Copied to clipboard." : "Copiado para a área de transferência."}
                    </div>
                )}
                </div>

            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col gap-[1vw] mt-[1vw]">
                {LINKS.map((link, i) => (
                    <LinkElement key={i} {...link} />
                ))}
            </div>
        </>
    );
}
