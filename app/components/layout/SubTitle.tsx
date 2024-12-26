"use client";
function SubTitle({text}:{text:string}) {
  return <div className=" lg:my-0 my-[5vw] w-full truncate flex items-center justify-center gap-[2vw] lg:gap-[0.5vw]"><span className="text-[2.5vw] lg:text-[1vw]">{text}</span><span className="w-full h-[0.05vw] dark:bg-white/30 bg-black/20"/></div>;
}

export default SubTitle;

