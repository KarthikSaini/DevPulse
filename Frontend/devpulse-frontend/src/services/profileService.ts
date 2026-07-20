import api from "../api/axiosConfig";

export const getProfile = async (userId: number) => {

    const response = await api.get(`users/profile/${userId}`);

    return response.data;

};