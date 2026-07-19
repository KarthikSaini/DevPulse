import api from "../api/axiosConfig";

import { LeetcodeResponse } from "../interfaces/Leetcode";

export const getLeetcodeDashboard = async (userId: number): Promise<LeetcodeResponse> => {
    const response = await api.get(`/leetcode/${userId}`);
    console.log(response.data);
    return response.data;
}