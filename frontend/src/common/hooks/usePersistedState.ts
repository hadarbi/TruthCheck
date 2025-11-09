import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const usePersistedState = <S>(key: string, initialState: S): [S, Dispatch<SetStateAction<S>>] => {
    const toString = (value: S): string => {
        try {
            return JSON.stringify(state);
        }
        catch (e) {
            return value as string;
        }
    }

    const fromString = (stringfiedValue: string): S => {
        try {
            return JSON.parse(stringfiedValue) as S;
        }
        catch (e) {
            return stringfiedValue as S;
        }
    }

    const [state, setState] = useState<S>(() => {
        const persistedState = sessionStorage.getItem(key);
        if (persistedState) {
            return fromString(persistedState);
        }
        else return initialState
    });

    useEffect(() => {
        if (!state) {
            sessionStorage.removeItem(key);
            return;
        }

        sessionStorage.setItem(key, toString(state));
    }, [state]);

    return [state, setState];
}