import "./CSS/Projects.css";
import ProjectGrid from "../components/projects/ProjectGrid";
import { Project } from "../interfaces/Project";

const projects:Project[]=[

{
    name:"DevPulse",

    description:"Developer analytics dashboard integrating GitHub and LeetCode.",

    image:"/projects/devpulse.png",

    github:"https://github.com/KarthikSaini/DevPulse",

    demo:"#",

    tech:[
        "React",
        "Spring Boot",
        "TypeScript",
        "MySQL"
    ],

    language:"Java",

    stars:0,

    forks:0,

    updated:"19 Jul 2026",

    status:"In Progress"
},

{
    name:"Netflix",

    description:"Netflix clone built using Spring Boot Microservices.",

    image:"/projects/netflix.png",

    github:"https://github.com/KarthikSaini/Netflix",

    demo:"#",

    tech:[
        "Spring Boot",
        "Kafka",
        "Redis",
        "Docker",
        "AWS"
    ],

    language:"Java",

    stars:0,

    forks:0,

    updated:"18 Jun 2026",

    status:"Completed"
},

{
    name:"JournalApp",

    description:"Personal journal application using Redis and MongoDB.",

    image:"/projects/journal.png",

    github:"https://github.com/KarthikSaini/JournalApp",

    demo:"#",

    tech:[
        "Java",
        "MongoDB",
        "Redis"
    ],

    language:"Java",

    stars:0,

    forks:0,

    updated:"17 Jun 2026",

    status:"Completed"
}

];

function Projects(){

    return(

        <div className="projects-page">

            <h1>Projects</h1>

            <p>Applications and products I've built.</p>

            <ProjectGrid
                projects={projects}
            />

        </div>

    );

}

export default Projects;