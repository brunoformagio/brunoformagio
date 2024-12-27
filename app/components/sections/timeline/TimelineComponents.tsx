"use client";
import { useState } from "react";
import { useMainContext } from "../../context/mainContext";
import { Button } from "../../layout/Button";

export interface TimelineItemProps {
    legend?: string;
    titleEn: string;
    titleBr: string;
    descriptionEn: string;
    descriptionBr: string;
    stacksLearned?: string[];
}


const ProfessionalTimelineVerticalLine = () => <div className={` w-[0.3vw] lg:w-[0.1vw]  dark:bg-white bg-black h-full py-[1.75vw]`} />;

// const AcademicTimelineVerticalLine = ({ mergeProfessionalStart, mergeProfessionalEnd }: { mergeProfessionalStart?: boolean, mergeProfessionalEnd?: boolean }) => {
//     return <div className={`relative ${mergeProfessionalStart ? `border-l-2 border-t-2  w-[2.7vw] mt-[4.4vw] rounded-tl-[5vw] mr-[-2vw] ` : mergeProfessionalEnd ? `border-l-2 border-b-2   mb-[4.4vw] rounded-bl-[5vw]  ` : `border-l-2`} border-dashed   dark:border-white border-black h-full `} />
// };

const CIRCLE_CSS = "w-[3.5vw] h-[3.5vw] min-h-[3.5vw] min-w-[3.5vw] aspect-square lg:w-[1.25vw] lg:h-[1.25vw] lg:min-h-[1.25vw] lg:min-w-[1.25vw]";

const TimelineCircle = ({animate}:{animate?:boolean}) => <div className={`border-2 rounded-full ${CIRCLE_CSS} dark:border-white border-black flex items-center justify-center`} >{animate && <div className={`animate-ping border-2 rounded-full ${CIRCLE_CSS} aspect-square dark:border-white border-black`} />}</div>;

const TimelineItemLineArea = ({ children}: { children: any }) => <div className={` flex items-center justify-center flex-col relative h-full ml-[1vw] mr-[2vw] lg:mr-0 lg:ml-[3vw] `}>{children}</div>;

// const RenderStacks = ({ stacks }: { stacks: string[] }) => {
//     return stacks.length > 0 && <div className="  fadeIn flex-wrap border dark:border-white/20 border-transparent dark:bg-[#333333] flex items-center justify-center  mt-[0.4vw] py-[0.4vw] dark:px-[0.4vw] gap-[0.4vw] rounded-[0.4vw]">
//         {stacks.map((stack, i) => <span key={i}  className="group relative">
//             {/* Image */}
//             <img alt={stack} className="w-[1.23vw]  " src={`/logos/${stack}.webp`} />
//                     {/* tooltip */}
//         <span className="backdrop-blur-lg hidden group-hover:!block absolute bottom-[-3vw] border border-white/20 left-[50%] ml-[-3vw] w-[6vw] text-center bg-black/75 text-white p-[0.4vw] rounded-[0.4vw] text-[0.8vw]">
//         {stack}
//         </span>
//         </span>)}
//         </div>
// }

const RenderDescription = ({ title, legend, description, stacks, detailedMode }: { title:string, legend?:string, description:string, stacks:string[],  detailedMode:boolean }) => {
    const [showDescription, setShowDescription] = useState(false);
    
    return <div className="flex flex-col items-start justify-start w-full text-left px-[2vw]">
        <div className="text-[3vw] lg:text-[1vw] font-bold">
            <div>{<span className="opacity-75 font-regular text-[2.5vw] lg:text-[0.75vw] italic ">{legend}</span>}
            <div>{title}</div>
            </div>
        </div>
        {/* <RenderStacks stacks={stacks} /> */}
    <div className={`${showDescription ? `grid-rows-[1fr]  ` : `grid-rows-[0fr] lg:grid-rows-[1fr]`} grid  duration-500 overflow-hidden text-[3vw] lg:text-[0.8vw] relative   w-full`}><div className={`w-full overflow-hidden`}>{description}</div></div>
    <div className={`lg:hidden inline-flex mt-[2vw]`}>
    <Button onClick={() => setShowDescription(!showDescription)} solidButton={showDescription}>{showDescription ? "[-] Hide" : "[+] Show"} description</Button>
    </div>
       
        </div>            

}

const TimelineItem = ({ item, fadeStart, fadeEnd, detailedMode,}: { item: TimelineItemProps, fadeStart?: boolean, fadeEnd?: boolean, detailedMode?:boolean}) => {
    const {language} = useMainContext();
    
    return <div className=" fadeIn flex flex-row items-center justify-start relative  w-full">
        

        {/* Timeline draw */}
        <TimelineItemLineArea>
            {!fadeStart ? <ProfessionalTimelineVerticalLine /> : <div className="h-full"/>}
            <TimelineCircle animate={fadeStart} />
            <ProfessionalTimelineVerticalLine />
        </TimelineItemLineArea>

        {/* Professional side */}
        <div className="flex flex-col  w-full items-start relative justify-start !z-[5] pb-[5vw] lg:pb-[1vw]">
            {item && 
                <RenderDescription 
                    legend={item.legend || ""}
                    title={language === "en-US" ? item.titleEn : item.titleBr}
                    description={language === "en-US" ? item.descriptionEn : item.descriptionBr}
                    stacks={item.stacksLearned || []}
                    detailedMode={detailedMode || false}
                    />
            }
        </div>

        {fadeEnd && <div className=" absolute h-[5vw] w-full bg-gradient-to-t bottom-0  z-[1] from-white to-white/0 dark:from-black dark:to-black/0" />}
    </div>
}

export {
    TimelineItem,
    ProfessionalTimelineVerticalLine,
    // AcademicTimelineVerticalLine,
    TimelineCircle,
    TimelineItemLineArea
};