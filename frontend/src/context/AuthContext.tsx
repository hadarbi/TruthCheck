import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { usePersistedState } from "../common/hooks/usePersistedState";
import { User } from "../types/User";

interface AuthContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;

    token: string;
    setToken: Dispatch<SetStateAction<string>>

    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = usePersistedState<User | undefined>('user', undefined);
    const [token, setToken] = usePersistedState<string>("token", '');

    const logout = () => {
        setToken('');
        setUser(undefined);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};
