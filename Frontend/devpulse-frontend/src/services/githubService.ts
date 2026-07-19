import api from '../api/axiosConfig';

export const getGithubDashboard = async (userId: number) => {

    const response = await api.get(`/github/${userId}`);

    console.log(response.data);
    

    return response.data;

}