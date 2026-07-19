import { Project } from "../../interfaces/Project";

interface Props{

    project:Project;

}

function ProjectCard({project}:Props){

    return(

        <div className="project-card">

            {/* <img
                src={project.image}
                alt={project.name}
            /> */}

            <div className="project-body">

                <div className="project-top">

                    <h2>{project.name}</h2>

                    <span className="status">
                        {project.status}
                    </span>

                </div>

                <p>
                    {project.description}
                </p>

                <div className="tech-list">

                    {

                        project.tech.map(skill=>

                            <span
                                key={skill}
                                className="tech-chip"
                            >
                                {skill}
                            </span>

                        )

                    }

                </div>

                <div className="project-stats">

                    <span>⭐ {project.stars}</span>

                    <span>🍴 {project.forks}</span>

                    <span>{project.language}</span>

                </div>

                <p className="updated">

                    Updated {project.updated}

                </p>

                <div className="project-links">

                    <a
                        href={project.github}
                        target="_blank"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                    >
                        Live Demo
                    </a>

                </div>

            </div>

        </div>

    );

}

export default ProjectCard;