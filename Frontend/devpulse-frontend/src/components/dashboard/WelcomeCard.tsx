import { Dashboard } from "../../interfaces/Dashboard";

interface Props{

    dashboard?: Dashboard;

}

function WelcomeCard({dashboard}:Props){

    return(

        <div className="welcome-card">

            <h1>

                Welcome back,

                {dashboard?.name} 👋

            </h1>

            <p>

                {dashboard?.bio}

            </p>

        </div>

    );

}

export default WelcomeCard;