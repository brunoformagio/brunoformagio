"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  //render a toggle button to switch between themes
  return (
    <button
      className="relative border-[0.4vw] lg:border-[0.1vw] border-black dark:border-white py-[0.1vw] w-[14vw] lg:w-[4vw] h-[7.5vw] lg:h-[2vw] text-[1vw] flex items-center justify-center gap-[0.6vw] rounded-full"
      onClick={() => {
        setTheme && setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      <div className={`${resolvedTheme === "dark" ? `left-[7.2vw] lg:left-[2.1vw]` : `left-[0.4vw] lg:left-[0.2vw] `} transition-[0.2s] absolute rounded-full aspect-square w-[5.5vw] lg:w-[1.5vw] h-[5.5vw] lg:h-[1.5vw] border-[0.4vw] lg:border-[0.1vw] border-black dark:border-white`} />
      <div><SunIcon className={`${resolvedTheme === "dark" ? `opacity-100` : `opacity-0`} w-[5.5vw] lg:w-[1vw]`} /></div>
      <div><MoonIcon className={`${resolvedTheme !== "dark" ? `opacity-100` : `opacity-0`} w-[5.5vw] lg:w-[1vw]`} /></div>
    </button>
  );
}

export default ThemeSwitcher;

