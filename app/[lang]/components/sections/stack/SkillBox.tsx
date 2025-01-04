
export const SkillBox = ({ title, experience, icon }: { title: any, experience:any, icon: any }) => {
    return <div className="relative w-full min-w-0 h-[26vw] lg:h-[5.5vw] overflow-hidden flex items-center justify-center fadeIn border dark:border-white/20 border-black/10">
        <div className="flex lg:flex-row flex-col gap-[1vw] items-center justify-center lg:justify-start lg:pl-[2vw] w-full text-left">
            <span className="lg:h-[2vw] lg:w-[2vw] w-[7vw] mb-[1vw] lg:mb-0 ">{icon}</span>
            <span className=" flex flex-col items-center lg:items-start text-center justify-center text-[2.7vw] leading-[4vw] lg:text-[1vw]  lg:leading-[1.4vw] ">
                <span className="font-bold">{title}</span>
                <span className="text-center">{experience}</span>
            </span>
        </div>
    </div>
}