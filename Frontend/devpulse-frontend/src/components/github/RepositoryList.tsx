import { Repository } from "../../interfaces/Github";
import RepositoryCard from "./RepositoryCard";

interface Props {

    repositories: Repository[];

}

function RepositoryList({ repositories }: Props) {

    return (

        <div>

            <h2>Repositories</h2>

            {
                repositories.length === 0 ?

                    <p>No repositories found.</p>

                    :

                    repositories.map(repo => (

                        <RepositoryCard
                            key={repo.name}
                            repository={repo}
                        />

                    ))
            }

        </div>

    );

}

export default RepositoryList;