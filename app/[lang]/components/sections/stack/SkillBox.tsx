
export const SkillBox = ({ title, experience, icon }: { title: any, experience:any, icon: any }) => {
    return <div className="relative w-full min-w-0 h-[26vw] lg:h-[12vw] overflow-hidden flex items-center justify-center fadeIn border dark:border-white/20 border-black/10">
        <div className="flex flex-col gap-[1vw] items-center justify-center w-full text-center">
            <span className="lg:w-[4vw] w-[7vw] mb-[1vw] lg:mb-0 text-center mx-auto flex items-center justify-center">{icon}</span>
            <span className=" flex flex-col items-center  text-center justify-center text-[2.7vw] leading-[4vw] lg:text-[1vw]  lg:leading-[1.4vw] ">
                <span className="font-bold">{title}</span>
                <span className="text-center">{experience}</span>
            </span>
        </div>
    </div>
}