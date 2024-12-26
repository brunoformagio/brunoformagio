import { useEffect, useState } from "react";
import { useMainContext } from "../context/mainContext";
import { anchorLinks } from "../wrapper/constants/AnchorLinks";

export const Header = () => {
    const { language, setSection, section } = useMainContext();
    const [mobileMode, setMobileMode] = useState(false);

    // Função de smooth scroll
    const smoothScroll = (id: string) => {
        setSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    //detect section on scroll
    window.onscroll = () => {
        setTimeout(() => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const top = window.scrollY;
                const offset = section.offsetTop - 200;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (top >= offset && top < offset + height) {
                    setSection(id || "");
                }
            });
        }, 1000); // Adding a delay of 100ms
    };

    //detect section on section state change and scroll
    useEffect(() => {
        if(mobileMode) return;
        smoothScroll(section);
    }, [section]);

    //detect mobile (tailwind lg breakpoint)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setMobileMode(true);
            } else {
                setMobileMode(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Função para scrollar para a seção
    const scrollToSection = async (id: string, event: React.MouseEvent) => {
        event.preventDefault();  // Evita o comportamento padrão do link
        //espera 1 segundo para dar tempo de fechar o menu
        await new Promise((resolve) => setTimeout(resolve, 200));
        setSection(id);
        smoothScroll(id);
    };

    return (
        <header className="sticky top-[5vh] h-screen flex flex-col fadeIn mr-[3vw] w-[12vw] slideIn">
            <div className="dark:opacity-50 bg-[url(/detail_1.svg)]  mb-[2vw] w-[10vw] relative left-[-2vw] h-[20vw] bg-contain bg-no-repeat "/>
            <img src="/me.webp" alt="Bruno Formagio" className={`hidden lg:block transition-[2s] relative  ${section === "start" ? ` h-[25vw] w-[11vw] mt-[-15vw] mb-[2vw] fadeIn`  : `h-0 fadeOut`}`}/>
            <nav>
                <ul className="flex flex-col gap-2 truncante max-w-[10vw] ">
                    {anchorLinks.map((link, index) => (
                        <li key={index}>
                            <a
                            className={`transition-[2s] truncante text-[1vw] flex gap-2 lg:!gap-[0.2vw] items-center ${section === link.href.replace("#", "") ? "font-bold left-0" : "font-normal opacity-[40%] left-[-2vw]"} relative outline-none`}
                                href={link.href}
                                onClick={(event) =>  scrollToSection(link.href.replace("#", ""), event)}
                            >
                                <span className={` min-h-[1px] h-[20px] lg:h-[0.05vw] w-[5vw]  bg-black dark:bg-white`}/><span className="lg:flex hidden">{language === "en-US" ? link.title.en : link.title.pt}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
