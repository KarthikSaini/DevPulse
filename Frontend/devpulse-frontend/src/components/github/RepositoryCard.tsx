import { Repository } from "../../interfaces/Github";

interface Props {
    repository: Repository;
}

function RepositoryCard({ repository }: Props) {

    const formatDate = (date?: string) => {

        if (!date) return "N/A";

        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

    };

    const formatSize = (size?: number) => {

        if (!size) return "0 KB";

        if (size >= 1024)
            return `${(size / 1024).toFixed(1)} MB`;

        return `${size} KB`;

    };

    return (

        <div className="repository-card">

            <div className="repo-top">

                <h3>📁 {repository.name}</h3>

                <span className={`visibility ${repository.visibility}`}>
                    {repository.visibility}
                </span>

            </div>

            <p>

                {repository.description || "No description available."}

            </p>

            <div className="repo-language">

                🟢 {repository.language || "Unknown"}

            </div>

            <div className="repo-stats">

                <span>⭐ {repository.stars}</span>

                <span>🍴 {repository.forks_count}</span>

                <span>👀 {repository.watchers_count}</span>

                <span>🐞 {repository.open_issues_count}</span>

            </div>

            <div className="repo-details">

                <div>

                    <strong>🌿 Branch </strong>

                    <span>{repository.default_branch}</span>

                </div>

                <div>

                    <strong>📦 Size </strong>

                    <span>{formatSize(repository.size)}</span>

                </div>

                <div>

                    <strong>📅 Created </strong>

                    <span>{formatDate(repository.created_at)}</span>

                </div>

                <div>

                    <strong>🚀 Last Push </strong>

                    <span>{formatDate(repository.pushed_at)}</span>

                </div>

            </div>

            <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-button"
            >
                Open Repository ↗
            </a>

        </div>

    );

}

export default RepositoryCard;