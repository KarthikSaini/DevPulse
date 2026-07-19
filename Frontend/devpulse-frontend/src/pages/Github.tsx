import { useEffect, useState } from "react";
import "./CSS/Github.css";

import { GithubResponse } from "../interfaces/Github";
import { getGithubDashboard } from "../services/githubService";

import GithubHeader from "../components/github/GithubHeader";
import GithubStats from "../components/github/GithubStats";
import LanguageChart from "../components/github/LanguageChart";
import ActivityChart from "../components/github/ActivityChart";
import RepositoryList from "../components/github/RepositoryList";
import ContributionHeatMap from "../components/github/ContributionHeatMap";

function Github() {

    const [github, setGithub] = useState<GithubResponse>();

    useEffect(() => {

        loadGithub();

    }, []);

    async function loadGithub() {

        const userId = Number(localStorage.getItem("userId"));

        const response = await getGithubDashboard(userId);

        setGithub(response);

    }

    if (!github)
        return <h2>Loading...</h2>;

    return (

        <div className="app-layout">
        
        <div className="github-page">

            <GithubHeader profile={github} />

            <GithubStats profile={github} />

            <div className="chart-grid">

                <LanguageChart languages={github.languages} />

                <ActivityChart activity={github.weeklyActivity} />

            </div>

            <ContributionHeatMap
                heatmap={github.contributionHeatmap}
            />

            <RepositoryList repositories={github.repositories} />

        </div>

        </div>

    );

}

export default Github;