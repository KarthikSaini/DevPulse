import { GithubResponse } from "../../interfaces/Github";

interface Props {
    profile?: GithubResponse;
}

function GithubProfileCard({ profile }: Props) {

    if (!profile) {
        return <p>Loading profile...</p>;
    }

    console.log(profile);
    

    return (
        <div className="github-profile-card">

            <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="github-avatar"
            />

            <div className="github-profile-info">

                <h2>{profile.name}</h2>

                <p>@{profile.login}</p>

                <p>{profile.bio}</p>

                <p>📍 {profile.location || "Not Available"}</p>

                <a
                    href={profile.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    View GitHub Profile
                </a>

            </div>

        </div>
    );
}

export default GithubProfileCard;