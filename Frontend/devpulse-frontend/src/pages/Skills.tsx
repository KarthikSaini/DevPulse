import "./CSS/Skills.css";
import SkillCategory from "../components/skills/SkillCategory";
import { Skill } from "../interfaces/Skill";

const skills: Skill[] = [

    // Backend

    {
        name: "Java",
        level: 90,
        category: "Backend",
        color: "#f89820"
    },

    {
        name: "Spring Boot",
        level: 85,
        category: "Backend",
        color: "#6db33f"
    },

    {
        name: "Hibernate",
        level: 80,
        category: "Backend",
        color: "#59666c"
    },

    {
        name: "REST API",
        level: 90,
        category: "Backend",
        color: "#2563eb"
    },

    // Frontend

    {
        name: "React",
        level: 80,
        category: "Frontend",
        color: "#61dafb"
    },

    {
        name: "TypeScript",
        level: 75,
        category: "Frontend",
        color: "#3178c6"
    },

    {
        name: "HTML",
        level: 90,
        category: "Frontend",
        color: "#e34f26"
    },

    {
        name: "CSS",
        level: 85,
        category: "Frontend",
        color: "#264de4"
    },

    // Database

    {
        name: "MySQL",
        level: 80,
        category: "Database",
        color: "#00758f"
    },

    {
        name: "MongoDB",
        level: 75,
        category: "Database",
        color: "#47a248"
    },

    // DevOps

    {
        name: "Docker",
        level: 70,
        category: "DevOps",
        color: "#2496ed"
    },

    {
        name: "AWS",
        level: 65,
        category: "DevOps",
        color: "#ff9900"
    }

];

function Skills() {

    const categories = [...new Set(skills.map(skill => skill.category))];

    return (

        <div className="skills-page">

            <h1>Technical Skills</h1>

            <p>
                Technologies, frameworks and tools I use.
            </p>

            {

                categories.map(category => (

                    <SkillCategory
                        key={category}
                        title={category}
                        skills={
                            skills.filter(
                                skill => skill.category === category
                            )
                        }
                    />

                ))

            }

        </div>

    );

}

export default Skills;