export interface User {

    id: number;

    name: string;

    email: string;

    bio: string;

    profileImage: string | null;

    githubUsername: string | null;

    leetcode_username: string | null;

    githubAccessToken?: string | null;

    profileCompletion?: number;

}