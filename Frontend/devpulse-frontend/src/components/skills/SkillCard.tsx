import { Skill } from "../../interfaces/Skill";
import SkillProgress from "./SkillProgress";

interface Props{

    skill:Skill;

}

function SkillCard({skill}:Props){

    return(

        <div className="skill-card">

            <div className="skill-title">

                <span>{skill.name}</span>

                <span>{skill.level}%</span>

            </div>

            <SkillProgress
                level={skill.level}
                color={skill.color}
            />

        </div>

    );

}

export default SkillCard;