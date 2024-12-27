"use client"
import React from "react";
import SubTitle from "../../layout/SubTitle";
import { SkillBox } from "./SkillBox";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const SkillsContainer = ({ children }: { children: any }) => {
    const [scrolledMaxRight, setScrolledMaxRight] = React.useState(true);
    
    const handleScroll = (e: any) => {
        if (e.target.scrollLeft + e.target.clientWidth === e.target.scrollWidth) {
            setScrolledMaxRight(false);
        } else {
            setScrolledMaxRight(true);
        }
    }

    return <div className=" relative lg:h-auto max-w-full w-[80vw] mt-[1.4vw]">
        <div className="relative gap-[2vw] h-[37vw] lg:h-auto max-w-full w-[80vw]  lg:gap-[1vw]  overflow-y-hidden overflow-x-auto flex lg:grid lg:grid-cols-4 " onScroll={handleScroll}>{children}</div>
        <span className={`${scrolledMaxRight ? `lg:hidden block` : `hidden`} fadeIn absolute top-0 -right-[1px] w-[10vw] h-[calc(100%-7vw)]  flex items-center justify-center bg-gradient-to-l from-black/100 to-black/0`}>
        {/* <span className="!rotate-90 relative w-[10vw] h-[10vw] "><ChevronUpIcon className=" animate-bounce " /></span> */}
        </span>
    </div>
}

export default function SkillsSection({ subSection }: { subSection: "code" | "design" }) {
    return <div className="mt-[1vw] overflow-hidden w-full">
        <SubTitle text={subSection === "code" ? "Main Technologies" : "Softwares"} />
        {subSection === "code" ? <SkillsContainer>
            <SkillBox title="Javascript" icon={<img src="/logos/javascript.webp" alt={"Javascript"} />} experience={"15+ years"} />
            <SkillBox title="Typescript" icon={<img src="/logos/typescript.webp" alt={"Typescript"} />} experience={"5+ years"} />
            <SkillBox title="HTML" icon={<img src="/logos/html.webp" alt={"HTML5"} />} experience={"15+ years"} />
            <SkillBox title="CSS" icon={<img src="/logos/css.webp" alt={"CSS3"} />} experience={"15+ years"} />
            <SkillBox title="NodeJS" icon={<img src="/logos/node.webp" alt={"NodeJS"} />} experience={"10+ years"} />
            <SkillBox title="React.js" icon={<img src="/logos/react.webp" alt={"React"} />} experience={"10+ years"} />
            <SkillBox title="Next.js" icon={<img src="/logos/nextjs.webp" alt={"Next"} />} experience={"5+ years"} />
            <SkillBox title="TailwindCSS" icon={<img src="/logos/tailwind.webp" alt={"TailwindCSS"} />} experience={"2+ years"} />
            <SkillBox title={"Sass"} icon={<img src="/logos/sass.webp" alt={"Sass"} />} experience={"5+ years"} />
            <SkillBox title={"REST API"} icon={<img src="/logos/restapi.webp" alt={"REST API"} />} experience={"10+ years"} />
            {/* <SkillBox title={"MongoDB"} icon={<img src="/logos/mongo.webp" alt={"MongoDB"} />} experience={"5+ years"} /> */}
            <SkillBox title={"GraphQL"} icon={<img src="/logos/graphql.webp" alt={"GraphQL"} />} experience={"3+ years"} />
            {/* <SkillBox title={"Websockets"} icon={<img src="/logos/websockets.webp" alt={"Websockets"} />} experience={"2+ years"} /> */}
            <SkillBox title={"JEST"} icon={<img src="/logos/jest.webp" alt={"JEST"} />} experience={"2+ years"} />
            {/* <SkillBox title={"Git"} icon={<img src="/logos/git.webp" alt={"Git"} />} experience={"10+ years"} /> */}
        </SkillsContainer> :
            <SkillsContainer>
                <SkillBox title="Figma" icon={<img src="/logos/figma.webp" alt={"Figma"} />} experience={"3+ years"} />
                <SkillBox title="Photoshop" icon={<img src="/logos/photoshop.webp" alt={"Photoshop"} />} experience={"15+ years"} />
                <SkillBox title="Illustrator" icon={<img src="/logos/illustrator.webp" alt={"Illustrator"} />} experience={"15+ years"} />
                <SkillBox title="After Effects" icon={<img src="/logos/after-effects.webp" alt={"After Effects"} />} experience={"10+ years"} />
                <SkillBox title="FigJam" icon={<img src="/logos/figma.webp" alt={"FigJam"} />} experience={"2+ years"} />
                <SkillBox title="Miro" icon={<img src="/logos/miro.webp" alt={"Miro"} />} experience={"2+ years"} />
                <SkillBox title="Blender" icon={<img src="/logos/blender.webp" alt={"Blender"} />} experience={"2+ years"} />
                <SkillBox title="Cinema 4D" icon={<img src="/logos/cinema4d.webp" alt={"Cinema 4D"} />} experience={"5+ years"} />
            </SkillsContainer>
        }

    </div>
}