export interface GithubProfile {

    login: string;

    name: string;

    avatar_url: string;

    bio: string;

    htmlUrl: string;

    followers: number;

    following: number;

    public_repos: number;

    location: string;

}

export interface Repository {

    name: string;

    description: string;

    language: string;

    stars: number;

    forks: number;

    updatedAt: string;

    htmlUrl: string;

}