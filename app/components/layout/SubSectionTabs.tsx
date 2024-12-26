import { useMainContext } from "../context/mainContext"

export const SubSectionTabs = ({ sections, subSection, setSubSection }: { sections: string[], subSection: string, setSubSection: (subSection: any) => void }) => {
        const {language} = useMainContext()

        const translations: { [key: string]: { [key: string]: string } } = {
            "en-US": {
                "code": "Code",
                "design": "Design",
                "simple": "Simple",
                "detailed": "Detailed",
            },
            "pt-BR": {
                "code": "Código",
                "design": "Design",
                "simple": "Simples",
                "detailed": "Detalhado",
            }
        }
    const SectionTab = ({ text }: { text: string }) => {
        return <div
            onClick={() => setSubSection(text)}
            className={` cursor-pointer text-[4vw] lg:text-[1.3vw] leading-[2.4vw] ${subSection === text ? `font-bold ` : `font-normal`}`}>
            <span className={`${subSection === text ? `` : `hidden hover:inline`}`}>{"["}</span>
            {translations[language][text.toLowerCase()]}
            <span className={`${subSection === text ? `` : ` :!block hidden`}`}>{"]"}</span>
        </div>
    }
    
    return <div className="flex gap-[2vw] lg:gap-[1vw] ">
        {sections.map((text, i) => <SectionTab key={i} text={text} />)}
    </div>
    }