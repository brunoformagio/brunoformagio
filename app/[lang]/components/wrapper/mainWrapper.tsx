"use client";
import { ThemeProvider } from "next-themes";
import { MainContextProvider } from "../context/mainContext";
import useMainReducer from "../reducer/mainReducer";
import { useEffect, useState } from "react";
import { MainContent } from "../layout/mainContent";

export const MainWrapper = ({ children, dict }: { children: any, dict: any }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const mainReducer = useMainReducer();
  useEffect(() => {
    console.clear();
    console.log(dict.settings.presentation);
  },[mainReducer.language])

  useEffect(() => {
    if (typeof window !== "undefined") {
      mainReducer.setDict(dict);
    }
  } ,[mounted]);

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