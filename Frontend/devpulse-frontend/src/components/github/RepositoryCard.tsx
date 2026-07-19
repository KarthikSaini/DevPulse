import { GithubRepository } from "../../interfaces/Github";

interface Props {

    repository: GithubRepository;

}

function RepositoryCard({ repository }: Props) {

    return (

        <div className="repository-card">

            <h3>{repository.name}</h3>

            <p>

                {repository.description || "No description available"}

            </p>

            <div className="repository-footer">

                <span>💻 {repository.language}</span>

                <span>⭐ {repository.stars}</span>

                <span>🍴 {repository.forks}</span>

            </div>

            <p>

                Updated :
                {" "}
                {new Date(repository.updatedAt).toLocaleDateString()}

            </p>

            <a
                href={repository.htmlUrl}
                target="_blank"
                rel="noreferrer"
            >
                Open Repository →
            </a>

        </div>

    );

}

export default RepositoryCard;