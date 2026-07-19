export interface GithubRepository {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    htmlUrl: string;
    updatedAt: string;
}

export interface GithubResponse {

    login: string;
    name: string;
    avatarUrl: string;
    bio: string;
    htmlUrl: string;
    location: string;

    followers: number;
    following: number;
    publicRepos: number;

    totalStars: number;
    totalForks: number;

    languages: Record<string, number>;

    weeklyActivity: Record<string, number>;

    contributionHeatmap: Record<string, number>;

    repositories: GithubRepository[];
}