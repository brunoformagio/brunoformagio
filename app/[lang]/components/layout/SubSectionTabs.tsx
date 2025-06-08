import { useTheme } from "next-themes"
import { useMainContext } from "../context/mainContext"
import { SKILL_SECTIONS } from "../constants"
import { SkillSection } from "../types"

export const SubSectionTabs = () => {
    const { language, dict, skillSection, setSkillSection } = useMainContext()
    const { resolvedTheme } = useTheme()

    const SectionTab = ({ text }: { text: SkillSection }) => {
        return <div
            onClick={() => setSkillSection(text as SkillSection)}
            className={` mt-[1vw] lg:mt-[0.25vw] cursor-pointer text-center text-[3.5vw] lg:text-[1vw] leading-[2.4vw] ${skillSection === text ? `font-bold` : `font-normal opacity-75`}`}>
            <div className={`w-[30vw] lg:w-[9vw] ${skillSection === text ? `lg:stroke-[1] ` : `lg:stroke-[0.5]`} relative flex items-center justify-center`}>
                <span className="absolute w-full uppercase text-center ">{dict.skills[text.toLowerCase()]}</span>
                <svg className="w-full" viewBox="0 0 175 75.1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5.5h158.1l14.9,15.3v58.7H16.4L1.5,59.2V.5Z" stroke={skillSection === text ? resolvedTheme === "dark" ? "white" : "black" : "grey"} />
                    <rect x="1" width="6" height="40" fill={skillSection === text ? resolvedTheme === "dark" ? "white" : "black" : "grey"}  />
                </svg>
            </div>
        </div>
    }

    return <div className="flex flex-col gap-[2vw] lg:gap-[1vw] pb-5 md:pb-0 overflow-x-auto relative ">
        <div className="flex gap-[2vw] lg:gap-[1vw] pb-5 md:pb-0 overflow-x-auto relative ">
            {SKILL_SECTIONS.map((text, i) => <SectionTab key={i} text={text} />)}
            {/* right fade effect */}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent dark:from-black dark:to-transparent" />
    </div>
}