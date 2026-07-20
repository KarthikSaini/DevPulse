import api from "../api/axiosConfig";

import { LoginRequest, LoginResponse } from "../interfaces/Login";
import { SignupRequest } from "../interfaces/Signup";

export const signup = async (data: SignupRequest): Promise<void> => {
    
    const response = await api.post("/auth/signup",data);

    return response.data;
}

export const login = async(data:LoginRequest): Promise<LoginResponse> => {
    const response = await api.post("/auth/login",data);
    console.log(response.data);
    
    return response.data;
}