import { useEffect, useState } from "react";
import "./CSS/Github.css";

import { GithubResponse } from "../interfaces/Github";
import { getGithubDashboard } from "../services/githubService";
import { getDashboard } from "../services/dashboardService";

import GithubHeader from "../components/github/GithubHeader";
import GithubStats from "../components/github/GithubStats";
import LanguageChart from "../components/github/LanguageChart";
import ActivityChart from "../components/github/ActivityChart";
import RepositoryList from "../components/github/RepositoryList";
import ContributionHeatMap from "../components/github/ContributionHeatMap";

function Github() {

    const [github, setGithub] = useState<GithubResponse>();
    const [loading, setLoading] = useState(true);
    const [githubConnected, setGithubConnected] = useState(true);

    useEffect(() => {
        loadGithub();
    }, []);

    async function loadGithub() {

        try {

            const userId = Number(localStorage.getItem("userId"));

            const user = await getDashboard(userId);

            console.log(user);

            const githubPlatform = user.platforms.find(
                (platform: any) => platform.name === "GitHub"
            );

            if (!githubPlatform || !githubPlatform.connected) {
                setGithubConnected(false);
                return;
            }

            const response = await getGithubDashboard(userId);

            setGithub(response);

        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }

    }

    if (loading) {
        return <h2 className="loading">Loading...</h2>;
    }

    if (!githubConnected) {

        return (

            <div className="empty-state">

                <div className="empty-card">

                    <h1>🐙 Connect GitHub</h1>

                    <p>
                        You haven't connected your GitHub account yet.
                    </p>

                    <p>
                        Add your GitHub username from your Profile page to
                        view repositories, languages, activity and contribution heatmap.
                    </p>

                    <button
                        onClick={() => window.location.href = "/profile"}
                    >
                        Go to Profile
                    </button>

                </div>

            </div>

        );

    }

    return (

        <div className="github-page">

            <GithubHeader profile={github!} />

            <GithubStats profile={github!} />

            <div className="chart-grid">

                <LanguageChart
                    languages={github!.languages}
                />

                <ActivityChart
                    activity={github!.weeklyActivity}
                />

            </div>

            <ContributionHeatMap
                heatmap={github!.contributionHeatmap}
            />

            <RepositoryList
                repositories={github!.repositories}
            />

        </div>

    );

}

export default Github;