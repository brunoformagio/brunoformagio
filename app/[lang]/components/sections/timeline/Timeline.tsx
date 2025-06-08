"use client"
import React, { useEffect } from "react";
import { SubSectionTabs } from "../../layout/SubSectionTabs";
import { TimelineItem, TimelineItemProps } from "./TimelineComponents";
import { useMainContext } from "../../context/mainContext";

const TIMELINE_ITEMS: TimelineItemProps[] = [
    {
        "legend": "2025 - Present",
        "titleEn": "Frontend Engineer  • Nuvia (AI Startup)",
        "titleBr": "Frontend Engineer  • Nuvia (Startup de IA)",
        "descriptionEn": "Working on the frontend of the company's AI platform, helping to build the product and the design system.",
        "descriptionBr": "Trabalhando no frontend da plataforma de IA da empresa, ajudando a construir o produto e o sistema de design.",
    },
    {
        "legend": "2023 - 2025",
        "titleEn": "Tech Lead (Frontend)  • Bren (AI Startup)",
        "titleBr": "Tech Lead (Frontend)  • Bren (Startup de IA)",
        "descriptionEn": "Led the frontend development of the company's AI platform, planing the architecture and mentoring a small team of developers and a UX designer.\n\nPlanned and executed a scalable frontend structure using Next.js and Tailwind CSS.\n\nOptimized performance, reducing TTFB by 30% and improving LCP by 25%.",
        "descriptionBr": "Liderou o desenvolvimento frontend da plataforma de IA da empresa, planejando a arquitetura e orientando uma pequena equipe de desenvolvedores e um designer UX.\n\nPlanejou e executou uma estrutura frontend escalável usando Next.js e Tailwind CSS.\n\nOtimização de desempenho, reduzindo TTFB em 30% e melhorando o LCP em 25%.",
    },
    {
        "legend": "2022 - 2023",
        "titleEn": "Frontend Engineer  • FYNT (Crypto RWA Startup)",
        "titleBr": "Frontend Engineer  • FYNT (Startup de Crypto RWA)",
        "descriptionEn": "Buil the company's SaaS from scratch using the latest frontend technologies, including React and Next.js.\n\nCollaborated with backend teams to implement RESTful APIs, ensuring seamless data fetching and dynamic page generation.\n\n.",
        "descriptionBr": "Construiu o SaaS da empresa do zero usando as mais recentes tecnologias frontend, incluindo React e Next.js.\n\nColaborou com equipes de backend para implementar APIs RESTful, garantindo a busca de dados e geração de páginas dinâmicas.\n\n."
    },
    {
        "legend": "2019 - 2022",
        "titleEn": "Co-Founder & Frontend Developer  • Web3 NFT Project",
        "titleBr": "Co-Fundador & Desenvolvedor Frontend  • Projeto NFT Web3",
        "descriptionEn": "Co-founded and developed a Web3 NFT collection during the peak of crypto hype, leveraging Next.js and GraphQL.\n\nDesigned and implemented smart contract interaction UI, leading to the successful minting of over 2,500 NFTs.",
        "descriptionBr": "Co-fundou e desenvolveu uma coleção NFT Web3 durante o auge do hype cripto, usando Next.js e GraphQL.\n\nProjetou e implementou a interface de interação com contratos inteligentes, resultando na cunhagem bem-sucedida de mais de 2.500 NFTs."
    },
    {
        "legend": "2016 - 2018",
        "titleEn": "Web Design Professor  • Local Tech School",
        "titleBr": "Professor de Web Design  • Escola Técnica Local",
        "descriptionEn": "Taught web design and frontend development to students of all ages, creating custom curricula focused on HTML, CSS, JavaScript, and responsive design.",
        "descriptionBr": "Ensinou web design e desenvolvimento frontend para alunos de todas as idades, criando currículos personalizados focados em HTML, CSS, JavaScript e design responsivo."
    },
    {
        "legend": "2013 - 2016",
        "titleEn": "Freelance Web Developer  • Self-Employed",
        "titleBr": "Desenvolvedor Web Freelancer  • Autônomo",
        "descriptionEn": "Operated as a freelance web developer and designer, delivering custom websites and branding for various clients.\n\nEnhanced skills in responsive design, SEO optimization, and client communication.\n\nManaged multiple projects simultaneously, honing time management and problem-solving abilities.",
        "descriptionBr": "Atuou como desenvolvedor e designer freelancer, desenvolvendo sites personalizados e identidades visuais para diversos clientes.\n\nAprimorou habilidades em design responsivo, otimização para SEO e comunicação com clientes.\n\nGerenciou vários projetos simultaneamente, aprimorando habilidades de gestão de tempo e resolução de problemas."
    },

    {
        "legend": "2011 - 2013",
        "titleEn": "Designer & Web Developer  • Aversa (In-House Design Agency)",
        "titleBr": "Designer & Web Developer  • Aversa (Agência de Design Interna)",
        "descriptionEn": "Designed advertising materials, printed assets, and maintained the company's website.\n\nGained initial experience with OOP principles applied to JavaScript.\n\nCollaborated with marketing teams to align design strategies with business goals.",
        "descriptionBr": "Desenvolveu materiais publicitários, peças impressas e fez manutenção do site da empresa.\n\nTeve o primeiro contato com princípios de POO aplicados ao JavaScript.\n\nColaborou com equipes de marketing para alinhar estratégias de design aos objetivos de negócios."
    },
    {
        "legend": "2010 - 2012",
        "titleEn": "Graphic Design Associate Degree",
        "titleBr": "Técnico em Design Gráfico",
        "descriptionEn": "Completed a two-year graphic design program, focusing on print design, typography, and color theory.\n\nDeveloped a strong foundation in Adobe Creative Suite, including Photoshop, Illustrator, and InDesign.",
        "descriptionBr": "Concluiu um programa de design gráfico de dois anos, focado em design gráfico, tipografia e teoria das cores.\n\nDesenvolveu uma base sólida em Adobe Creative Suite, incluindo Photoshop, Illustrator e InDesign."
    },
    {
        "legend": "2009 - 2010",
        "titleEn": "Web Designer  • One2UP (Digital Agency)",
        "titleBr": "Web Designer  • One2UP (Agência Digital)",
        "descriptionEn": "Designed and coded layouts for a wide range of websites, collaborating with backend teams for seamless integration.",
        "descriptionBr": "Projetou e codificou layouts para uma ampla variedade de sites, colaborando com equipes de backend para integração contínua."
    },
    {
        "legend": "2007 - 2008",
        "titleEn": "Photo Editor & Designer  • Retratto Photo Products",
        "titleBr": "Editor de Fotos & Designer  • Retratto Photo Products",
        "descriptionEn": "Created photo montages and edited images for physical printed products, marking the start of my design career.",
        "descriptionBr": "Criou montagens fotográficas e editou imagens para produtos impressos físicos, marcando o início da carreira em design."
    }
]






export default function Timeline() {
    const { language, setSection, section } = useMainContext();
    const [timeline, setTimeline] = React.useState<TimelineItemProps[]>(TIMELINE_ITEMS);
    const [expanded, setExpanded] = React.useState<boolean | null>(null);


    return <>
        <div className={`mt-[3vw] mb-[20vw] lg:mb-[0vw] lg:mt-0 !transition-[0.2s] relative w-full overflow-hidden flex justify-center`}>
            <div className={`!transition-[0.2s] justify-start flex flex-col items-start  max-w-full pt-[2vw]   pb-[7vw] ${!expanded ? `h-[60vh] lg:h-[40vw] overflow-hidden` : `h-auto`}`}>
                {timeline.map((item, i) =>
                    <TimelineItem
                        fadeStart={i === 0}
                        fadeEnd={i === timeline.length - 1}
                        key={i}
                        item={item}
                    />)
                }
                <div className="w-full absolute flex items-end left-0 bottom-0 h-[15vw] z-[10] bg-gradient-to-t from-white to-white/0 dark:from-black dark:to-black/0">
                <button className="cursor-pointer bg-white dark:bg-black border-black dark:border-white border-[0.1vw] w-full p-[2vw] lg:p-[1vw] text-center font-bold" onClick={() => setExpanded(!expanded)}>
                    {!expanded && <>{language === "en" ? "Show more" : "Mostrar mais"}</>}
                    {expanded && <>{language === "en" ? "Show less" : "Mostrar menos"}</>}
                    {expanded ? <span className="ml-[1vw]">-</span> : <span className="ml-[1vw]">+</span>}
                </button>
                </div>
            </div>
                    
        </div>

    </>
}

