"use client";
import { useEffect, useReducer } from 'react';
import { useParams } from 'next/navigation';
import { SkillSection } from '../types';

export interface MainResultProps
    extends MainSectionStateProps {
    setLoadingState: (state: MainLoadingState) => void;
    setSection: (section: string) => void;
    setLanguage: (language: string) => void;
    setDict: (dict: any) => void;
    setSkillSection: (skillSection: SkillSection) => void;
}
export enum MainLoadingState {
    FIRST_LOAD,
    IDLE,
    FETCHING,
    REFETCHING,
}

export interface MainSectionStateProps {
    loadingState?: MainLoadingState;
    language: "en" | "pt";
    dict: any;
    section: "start" | "skills" | "timeline" | "portfolio" | "contact";
    skillSection: SkillSection;

}
export interface AccountCreditsMainActionProps {
    type: MainActionType;
    payload?: any;
}
export enum MainActionType {
    SET_LOADING_STATE,
    SET_LANGUAGE,
    SET_SECTION,
    SET_DICT,
    SET_SKILL_SECTION,
}


export const MainStateInitialValues: MainSectionStateProps = {
    loadingState: MainLoadingState.FIRST_LOAD,
    language: "en",
    section: "start",
    dict: {},
    skillSection: "code"

};

const reducer = (
    state: MainSectionStateProps,
    action: AccountCreditsMainActionProps,
) => {
    switch (action.type) {
        case MainActionType.SET_LOADING_STATE:
            return { ...state, loadingState: action.payload };
        case MainActionType.SET_LANGUAGE:
            return { ...state, language: action.payload };
        case MainActionType.SET_SECTION:
            return { ...state, section: action.payload };
        case MainActionType.SET_DICT:
            return { ...state, dict: action.payload };
        case MainActionType.SET_SKILL_SECTION:
            return { ...state, skillSection: action.payload };
        default:
            return state;
    }
};

export default function useMainReducer(): MainResultProps {
    const { lang } = useParams();

    function ReceiveInitialLanguage () {
        if(!lang) return "en";
        return lang as "en" | "pt";
    }

    const [state, dispatch] = useReducer(
        reducer,
        MainStateInitialValues
    );

    const setLoadingState = (state: MainLoadingState) => {
        dispatch({
            type: MainActionType.SET_LOADING_STATE,
            payload: state,
        });
    };

    const setSection = (section: string) => {
        dispatch({
            type: MainActionType.SET_SECTION,
            payload: section,
        });
    }

    const setDict = (dict: any) => {
        dispatch({
            type: MainActionType.SET_DICT,
            payload: dict,
        });
    }

    const setLanguage = (language: string) => {
        dispatch({
            type: MainActionType.SET_LANGUAGE,
            payload: language,
        });
    }

    const setSkillSection = (skillSection: SkillSection) => {
        dispatch({
            type: MainActionType.SET_SKILL_SECTION,
            payload: skillSection,
        });
    }


    /* First Load */
    useEffect(() => {
        const lang = ReceiveInitialLanguage();
        setLanguage(lang);
    }, [state.loadingState]);

    return {
        ...state,
        setLoadingState,
        setLanguage,
        setSection,
        setDict,
        setSkillSection
    };
}
