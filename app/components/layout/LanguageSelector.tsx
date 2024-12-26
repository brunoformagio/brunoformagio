import { useEffect } from "react";
import { useMainContext } from "../context/mainContext";

export const LanguageSelector = () => {
    const { language, setLanguage } = useMainContext();

    //record the language selected by the user on local storage
    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);
    

    return <select className="bg-transparent px-[1vw] lg:px-0 py-[0.1vw]  h-[7.5vw] lg:h-[2vw] text-[2.5vw] lg:text-[1vw] flex items-center justify-center gap-[0.6vw] rounded-full" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en-US">en-US</option>
        <option value="pt-BR">pt-BR</option>
    </select>
}