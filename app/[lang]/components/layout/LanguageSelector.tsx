"use  client";
import { useMainContext } from "../context/mainContext";
import {useRouter} from "next/navigation";

export const LanguageSelector = () => {
    const { language, setLanguage } = useMainContext();
    const router = useRouter();


    const handleChangeLanguage = (e:"en" | "pt") => {
        setLanguage(e);
        localStorage.setItem("language", e);
        router.replace("/"+e);
    }
    

    return <select className="bg-transparent px-[1vw] lg:px-0 py-[0.1vw]  h-[7.5vw] lg:h-[2vw] text-[4.5vw] lg:text-[1vw] flex items-center justify-center gap-[0.6vw] rounded-full" 
    onChange={(e) => handleChangeLanguage(e.target.value as "en" | "pt")}
    value={language}
    >
        <option value="en">en-US</option>
        <option value="pt">pt-BR</option>
    </select>
}