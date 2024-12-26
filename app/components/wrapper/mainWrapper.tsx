"use client";
import { ThemeProvider } from "next-themes";
import { MainContextProvider } from "../context/mainContext";
import useMainReducer from "../reducer/mainReducer";
import { useEffect, useState } from "react";
import { MainContent } from "../layout/mainContent";
import { GeneralTranslations } from "@/app/constants/GeneralTranslations";

export const MainWrapper = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const mainReducer = useMainReducer();
  useEffect(() => {
    console.clear();
    console.log(GeneralTranslations.settings[0][mainReducer.language]);
  },[mainReducer.language])

  return (
    mounted && 
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MainContextProvider value={mainReducer}>
        <MainContent>
          {children}
        </MainContent>
      </MainContextProvider>
    </ThemeProvider>
  );
};