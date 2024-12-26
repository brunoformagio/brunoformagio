    export interface AnchorLinkProps {
        href: string;
        title: {
            en: string;
            pt: string;
        }
    }

    //start, stack, timeline, portfolio, contact
    export const anchorLinks: AnchorLinkProps[] = [
        {
            href: "#start",
            title: {
                en: "Intro",
                pt: "Intro"
            }
        },
        {
            href: "#skills",
            title: {
                en: "Skills",
                pt: "Habilidades"
            }
        },
        {
            href: "#timeline",
            title: {
                en: "Timeline",
                pt: "Timeline"
            }
        },
        {
            href: "#portfolio",
            title: {
                en: "Portfolio",
                pt: "Portfólio"
            }
        },
        {
            href: "#contact",
            title: {
                en: "Contact",
                pt: "Contato"
            }
        }
    ];

