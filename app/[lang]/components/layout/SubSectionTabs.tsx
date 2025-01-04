import { useTheme } from "next-themes"
import { useMainContext } from "../context/mainContext"

export const SubSectionTabs = ({ sections, subSection, setSubSection }: { sections: string[], subSection: string, setSubSection: (subSection: any) => void }) => {
    const { language, dict } = useMainContext()
    const { resolvedTheme } = useTheme()

    const SectionTab = ({ text }: { text: string }) => {
        return <div
            onClick={() => setSubSection(text)}
            className={`lg:mb-[2vw] mt-[1vw] lg:mt-[0.25vw] cursor-pointer text-center text-[3.5vw] lg:text-[1.3vw] leading-[2.4vw] ${subSection === text ? `font-bold` : `font-normal opacity-75`}`}>
            <div className={`w-[30vw] lg:w-[9vw] ${subSection === text ? `lg:stroke-[1] ` : `lg:stroke-[0.5]`} relative flex items-center justify-center`}>
                <span className="absolute w-full uppercase">{dict.skills[text.toLowerCase()]}</span>
                <svg className="w-full" viewBox="0 0 175 75.1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5.5h158.1l14.9,15.3v58.7H16.4L1.5,59.2V.5Z" stroke={subSection === text ? resolvedTheme === "dark" ? "white" : "black" : "grey"} />
                    <rect x="1" width="6" height="40" fill={subSection === text ? resolvedTheme === "dark" ? "white" : "black" : "grey"}  />
                </svg>
            </div>
        </div>
    }

    return <div className="flex gap-[2vw] lg:gap-[1vw] ">
        {sections.map((text, i) => <SectionTab key={i} text={text} />)}
    </div>
}