"use client";
import { createContext, useContext } from 'react';
import { MainResultProps, MainStateInitialValues } from '../reducer/mainReducer';

const context = createContext<MainResultProps>({
  ...MainStateInitialValues,
  setLoadingState: () => {}, 
  setSection: () => {},
  setLanguage: () => {},
  setDict: () => {},
  setSkillSection: () => {},
});

export const useMainContext = () =>
  useContext<MainResultProps>(context);

export const MainContextProvider = context.Provider;
