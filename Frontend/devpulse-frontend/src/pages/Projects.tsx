import { useEffect, useState } from "react";
import "./CSS/Projects.css";

import ProjectGrid from "../components/projects/ProjectGrid";
import { Project } from "../interfaces/Project";
import { getGithubDashboard } from "../services/githubService";
import { Link } from "react-router-dom";

function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [githubConnected, setGithubConnected] = useState(true);

    useEffect(() => {
        loadProjects();
    }, []);

    async function loadProjects() {

        try {

            const userId = Number(localStorage.getItem("userId"));

            const github = await getGithubDashboard(userId);

            // GitHub username not added
            if (
                !github ||
                !github.repositories ||
                github.repositories.length === 0
            ) {

                setGithubConnected(false);
                return;
            }

            const mappedProjects: Project[] = github.repositories.map((repo: any) => ({

                name: repo.name,

                description: repo.description || "No description provided.",

                image: "/projects/default-project.png",

                github: repo.html_url,

                demo: "#",

                tech: repo.language ? [repo.language] : [],

                language: repo.language || "Unknown",

                stars: repo.stargazers_count,

                forks: repo.forks_count,

                updated: new Date(repo.updated_at).toLocaleDateString(
                    "en-GB",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                ),

                status: "Completed"

            }));

            setProjects(mappedProjects);

        } catch (error) {

            setGithubConnected(false);

        } finally {

            setLoading(false);

        }
    }

    if (loading) {
        return <div className="loading">Loading projects...</div>;
    }

    if (!githubConnected) {

        return (

            <div className="empty-state">

                <div className="empty-card">

                    <div className="empty-icon">
                        🐙
                    </div>

                    <h2>GitHub Not Connected</h2>

                    <p>

                        Connect your GitHub account to display your repositories,
                        technologies, and project statistics.

                    </p>

                    <Link
                        to="/dashboard"
                        className="connect-btn"
                    >
                        Connect GitHub
                    </Link>

                </div>

            </div>

        );
    }

    return (

        <div className="projects-page">

            <h1>Projects</h1>

            <p>Applications and products I've built.</p>

            <ProjectGrid projects={projects} />

        </div>

    );

}

export default Projects;