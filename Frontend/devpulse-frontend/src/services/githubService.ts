import api from '../api/axiosConfig';
import { GithubProfile } from '../interfaces/Github';

export const getGithubProfile = async (userId: number): Promise<GithubProfile> => {
    const response = await api.get(`/github/${userId}`)
    return response.data;
}