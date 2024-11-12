"use client"

import { User } from "@/types/User";
import api from "@/utils/axiosInterceptor"
import { createContext, FC, ReactElement, useContext, useEffect, useState } from "react"



interface ApiResponse {
    data: User
}


const UserContext = createContext<User | null>(null);

interface UserContextProviderProps {
    children: ReactElement
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const token = localStorage?.getItem('token');


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get<ApiResponse>("/user/");
                setUser(response.data.data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                setUser(null);
            }
        };
        if (!token) {
            return;
        }
        else {
            fetchUserData();
        }
    }, [token])


    return (<UserContext.Provider value={user}>{children}</UserContext.Provider>)
}

export const useUserContext = () => {
    const user = useContext(UserContext);


    return user
}

export type { User }
