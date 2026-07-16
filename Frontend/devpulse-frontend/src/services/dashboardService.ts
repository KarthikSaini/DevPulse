import api from "../api/axiosConfig";

export const getDashboard = async (userId: number) => {

    const response = await api.get(`/dashboard/${userId}`);

    return response.data;

};