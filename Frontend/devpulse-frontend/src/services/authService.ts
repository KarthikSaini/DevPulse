import api from "../api/axiosConfig";

export const signup = async (data: any) => {
    
    const response = await api.post("/auth/signup",data);

    return response.data;
}

export const login = async(data:any) => {
    const response = await api.post("/auth/login",data);
    return response.data;
}