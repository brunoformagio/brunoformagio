"use client"
import React from "react";
import SubTitle from "../../layout/SubTitle";
import { useTheme } from "next-themes";
import { ArrowPathIcon, BookOpenIcon, DevicePhoneMobileIcon, MinusCircleIcon, Square3Stack3DIcon, SquaresPlusIcon, UserCircleIcon, WindowIcon } from "@heroicons/react/24/outline";

const PrincipleBox = ({ title, icon }: { title: any, icon: any }) => {
    const { resolvedTheme } = useTheme();
    return <div className=" relative h-[18vw] w-[30vw] lg:w-full lg:h-[11.5vw] overflow-hidden flex items-center justify-center fadeIn">
        <div className="flex flex-col gap-[0.5vw] items-center justify-center w-full text-center">
            <span className="h-[5vw] w-[5vw] lg:h-[2vw] lg:w-[2vw]">{icon}</span>
            <span className="w-full  flex items-center justify-center text-[3vw] lg:text-[1vw] px-[1vw] lg:leading-[1.5vw] ">{title}</span>
        </div>
        <svg className="w-full absolute" viewBox="0 0 175 105.6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5.5h158.1l14.9,15.3v88.7H16.4l-14.9-15.3V.5Z" strokeWidth={0.5} fill="none" stroke={resolvedTheme === "dark" ? "white" : "black"}/>
        <rect x="1" width="6" height="70" fill={resolvedTheme === "dark" ? "white" : "black"}/>
        </svg>

    </div>
}

const PrincipleContainer = ({ children }: { children: any }) => {
    return <div className=" flex flex-wrap items-center lg:grid-cols-5 lg:grid gap-[2vw] lg:gap-[1vw]">
        {children}
    </div>
}


export default function PrinciplesSection({ subSection }: { subSection: "code" | "design" }) {
    return <div className="mt-[1.2vw]">
        <SubTitle text={subSection === "code" ? "Development Principles" : "Design Principles"} />
        {subSection === "code" ? <PrincipleContainer>
            <PrincipleBox title={<>OOP + SOLID</>} icon={<SquaresPlusIcon />} />
            <PrincipleBox title={<>Unit Tests</>} icon={<ArrowPathIcon />} />
            <PrincipleBox title={<>Git Workflow</>} icon={<Square3Stack3DIcon />} />
            <PrincipleBox title={<>Documentation</>} icon={<BookOpenIcon  />} />
        </PrincipleContainer> :
             <PrincipleContainer>
                <PrincipleBox title={<>Wireframing<br/>& Prototyping</>} icon={<WindowIcon/>} />
                <PrincipleBox title={<>Responsive<br/>design</>} icon={<DevicePhoneMobileIcon />} />
                <PrincipleBox title={<>User-centered<br/>design</>} icon={<UserCircleIcon />} />
                <PrincipleBox title={<>Minimalism<br/>DNA</>} icon={<MinusCircleIcon/>} />
            </PrincipleContainer>
        }
    </div>
}