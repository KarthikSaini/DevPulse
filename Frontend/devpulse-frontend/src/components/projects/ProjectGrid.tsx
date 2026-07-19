import { Project } from "../../interfaces/Project";
import ProjectCard from "./ProjectCard";

interface Props{

    projects:Project[];

}

function ProjectGrid({projects}:Props){

    return(

        <div className="project-grid">

            {

                projects.map(project=>

                    <ProjectCard
                        key={project.name}
                        project={project}
                    />

                )

            }

        </div>

    );

}

export default ProjectGrid;