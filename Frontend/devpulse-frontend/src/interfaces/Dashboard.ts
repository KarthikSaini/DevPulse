export interface Platform {
    name: string;
    connected: boolean;
    username: string | null;
    icon: string;
}

export interface Dashboard {
    id: number;
    name: string;
    email: string;
    bio: string;
    profileImage: string;
    profileCompletion: number;
    platforms: Platform[];
}