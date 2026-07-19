import { Repository } from "../../interfaces/Github";
import RepositoryCard from "./RepositoryCard";

interface Props {
    repositories: Repository[];
}

function RepositoryList({ repositories }: Props) {

    console.log(repositories);

    return (
        <div className="repo-section">

            <div className="repo-header">
                <h2>Repositories</h2>
                <span className="repo-count">
                    {repositories.length} repositories
                </span>
            </div>

            <div className="repo-grid">

                {repositories.map(repo => (
                    <RepositoryCard
                        key={repo.name}
                        repository={repo}
                    />
                ))}

            </div>

        </div>
    );
}

export default RepositoryList;