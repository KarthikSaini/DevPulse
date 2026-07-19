interface Props{

    level:number;

    color:string;

}

function SkillProgress({level,color}:Props){

    return(

        <div className="progress">

            <div
                className="progress-fill"
                style={{
                    width:`${level}%`,
                    background:color
                }}
            />

        </div>

    );

}

export default SkillProgress;