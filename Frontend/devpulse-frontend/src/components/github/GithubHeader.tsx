import { GithubResponse } from "../../interfaces/Github";

interface Props {
    profile: GithubResponse;
}

function GithubHeader({ profile }: Props) {

    return (

        <div className="github-header">

            <div className="github-profile">

                <img
                    className="github-avatar"
                    src={profile.avatarUrl}
                    alt={profile.name}
                />

                <div className="github-info">

                    <div className="github-title">

                        <h1>{profile.name}</h1>

                        <span>@{profile.login}</span>

                    </div>

                    <p className="github-bio">
                        {profile.bio || "No bio available"}
                    </p>

                    <div className="github-location">

                        📍 {profile.location || "Location not available"}

                    </div>

                    <a
                        href={profile.htmlUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="github-button"
                    >
                        View GitHub Profile →
                    </a>

                </div>

            </div>

            <div className="github-overview">

                <div className="overview-card">

                    <h2>{profile.followers}</h2>

                    <p>Followers</p>

                </div>

                <div className="overview-card">

                    <h2>{profile.following}</h2>

                    <p>Following</p>

                </div>

                <div className="overview-card">

                    <h2>{profile.publicRepos}</h2>

                    <p>Repositories</p>

                </div>

            </div>

        </div>

    );

}

export default GithubHeader;