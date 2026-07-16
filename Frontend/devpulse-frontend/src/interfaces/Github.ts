export interface GithubProfile {

    login: string;

    name: string;

    avatarUrl: string;

    bio: string;

    htmlUrl: string;

    followers: number;

    following: number;

    publicRepos: number;

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