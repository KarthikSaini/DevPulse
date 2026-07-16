import { Dashboard } from "../../interfaces/Dashboard";

interface Props{

    dashboard?: Dashboard;

}

function StatsCard({dashboard}:Props){

    return(

        <div className="stats-grid">

            <div className="stat-card">

                <h3>

                    Profile

                </h3>

                <h2>

                    {dashboard?.profileCompletion}%

                </h2>

            </div>

            <div className="stat-card">

                <h3>

                    Connected Platforms

                </h3>

                <h2>

                    {

                        dashboard?.platforms.filter(p=>p.connected).length

                    }

                </h2>

            </div>

            <div className="stat-card">

                <h3>

                    Skills

                </h3>

                <h2>

                    --

                </h2>

            </div>

            <div className="stat-card">

                <h3>

                    Projects

                </h3>

                <h2>

                    --

                </h2>

            </div>

        </div>

    );

}

export default StatsCard;