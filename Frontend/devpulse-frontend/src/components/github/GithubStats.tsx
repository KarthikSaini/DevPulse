import { GithubResponse } from "../../interfaces/Github";

interface Props {

    profile: GithubResponse;

}

function GithubStats({ profile }: Props) {

    return (

        <div className="stats-grid">

            <div className="stat-card">

                <h2>{profile.publicRepos}</h2>

                <span>Repositories</span>

            </div>

            <div className="stat-card">

                <h2>{profile.followers}</h2>

                <span>Followers</span>

            </div>

            <div className="stat-card">

                <h2>{profile.totalStars}</h2>

                <span>Stars</span>

            </div>

            <div className="stat-card">

                <h2>{profile.totalForks}</h2>

                <span>Forks</span>

            </div>

        </div>

    );

}

export default GithubStats;