import { GithubProfile } from "../../interfaces/Github";

interface Props {
    profile?: GithubProfile;
}

function GithubStats({ profile }: Props) {

    if (!profile) return null;

    return (

        <div className="github-stats">

            <div className="stat-box">
                <h3>{profile.followers}</h3>
                <p>Followers</p>
            </div>

            <div className="stat-box">
                <h3>{profile.following}</h3>
                <p>Following</p>
            </div>

            <div className="stat-box">
                <h3>{profile.publicRepos}</h3>
                <p>Repositories</p>
            </div>

        </div>

    );

}

export default GithubStats;