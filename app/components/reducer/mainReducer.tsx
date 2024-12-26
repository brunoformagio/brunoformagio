"use client";
import { useEffect, useReducer } from 'react';
export interface MainResultProps
    extends MainSectionStateProps {
    setLoadingState: (state: MainLoadingState) => void;
    setSection: (section: string) => void;
    setLanguage: (language: string) => void;
}
export enum MainLoadingState {
    FIRST_LOAD,
    IDLE,
    FETCHING,
    REFETCHING,
}

export interface MainSectionStateProps {
    loadingState?: MainLoadingState;
    language: "en-US" | "pt-BR";
    section: "start" | "skills" | "timeline" | "portfolio" | "contact";

}
export interface AccountCreditsMainActionProps {
    type: MainActionType;
    payload?: any;
}
export enum MainActionType {
    SET_LOADING_STATE,
    SET_LANGUAGE,
    SET_SECTION,
}

function ReceiveInitialLanguage () {
    if(typeof window === "undefined") return "en-US";
    const ls = localStorage;
    if(ls === undefined) return "en-US";
    const language = ls.getItem("language");
    return language ? language as "en-US" || "pt-BR" || "en-US" : "en-US";
}

export const MainStateInitialValues: MainSectionStateProps = {
    loadingState: MainLoadingState.FIRST_LOAD,
    language: ReceiveInitialLanguage(),
    section: "start",

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
        default:
            return state;
    }
};

export default function useMainReducer(): MainResultProps {
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

    const setLanguage = (language: string) => {
        dispatch({
            type: MainActionType.SET_LANGUAGE,
            payload: language,
        });
    }


    /* Effect for loadEmpresa on First Load */
    useEffect(() => {
        // loadUserEntitiesHeader();
    }, [state.loadingState]);

    return {
        ...state,
        setLoadingState,
        setLanguage,
        setSection,
    };
}
