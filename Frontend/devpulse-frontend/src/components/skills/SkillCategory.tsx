import SkillCard from "./SkillCard";
import { Skill } from "../../interfaces/Skill";

interface Props{

    title:string;

    skills:Skill[];

}

function SkillCategory({title,skills}:Props){

    return(

        <div className="skill-category">

            <h2>{title}</h2>

            <div className="skill-grid">

                {

                    skills.map(skill=>

                        <SkillCard
                            key={skill.name}
                            skill={skill}
                        />

                    )

                }

            </div>

        </div>

    );

}

export default SkillCategory;