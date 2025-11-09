import { useMemo } from "react";
import axios, { AxiosInstance } from "axios";
import { useAuthContext } from "../context/AuthContext";
import { API_URL } from "../config";

export const useApiClient = () => {
    const { token, logout } = useAuthContext();

    const apiClient: AxiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: API_URL,
            headers: { "Content-Type": "application/json" },
        });

        instance.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response?.status === 401) {
                    logout();
                }
                return Promise.reject(error);
            }
        );

        return instance;
    }, [token, logout]);

    const analyze = async (input: string, source: string) => {
        const response = await apiClient.post("/analyze", { input, source });
        return response.data;
    };

    const fetchHistory = async () => {
        const response = await apiClient.get("/analyze/history");
        return response.data;
    };

    const googleLogin = async (token: string) => {
        const response = await apiClient.post("/auth/google-login", { credential: token });
        return response.data;
    };

    return {
        apiClient,
        analyze,
        fetchHistory,
        googleLogin,
    };
};
