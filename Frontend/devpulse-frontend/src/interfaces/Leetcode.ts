export interface RecentSubmission {
    title: string;
    titleSlug: string;
    statusDisplay: string;
    lang: string;
    timestamp: string;
}

export interface LeetcodeResponse {
    username: string;
    realName: string;
    avatar: string;

    ranking: number;
    reputation: number;

    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    totalSolved: number;

    contestRating: number;
    contestRanking: number;
    contestsAttended: number;

    submissionCalendar: Record<string, number>;

    recentSubmissions: RecentSubmission[];
}