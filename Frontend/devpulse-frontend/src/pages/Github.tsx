import { useEffect, useState } from "react";

import "./CSS/Github.css";

// import GithubProfileCard from "../components/github/GithubProfileCard";
import GithubStats from "../components/github/GithubStats";
import RepositoryList from "../components/github/RepositoryList";

import {
    getGithubProfile,
    getRepositories
} from "../services/githubService";

import {
    GithubProfile,
    Repository
} from "../interfaces/Github";

function Github() {

    const [profile, setProfile] = useState<GithubProfile>();

    const [repositories, setRepositories] = useState<Repository[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadGithubData();

    }, []);

    async function loadGithubData() {

        try {

            const userId = Number(localStorage.getItem("userId"));

            if (!userId) {
                return;
            }

            const profileResponse = await getGithubProfile(userId);

            const repositoryResponse = await getRepositories(userId);

            setProfile(profileResponse);

            setRepositories(repositoryResponse);

        }
        catch (error) {

            console.error("Failed to load GitHub data", error);

        }
        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <div className="github-loading">

                Loading GitHub Data...

            </div>

        );

    }

    return (

        <div className="github-page">

            {/* <GithubProfileCard profile={profile} /> */}

            <GithubStats profile={profile} />

            <RepositoryList repositories={repositories} />

        </div>

    );

}

export default Github;