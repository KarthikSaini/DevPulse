import { Dashboard } from "../../interfaces/Dashboard";

interface Props{

    dashboard?: Dashboard;

}

function IntegrationPanel({dashboard}:Props){

    return(

        <div className="integration-card">

            <h2>

                Connected Platforms

            </h2>

            <div className="integration-list">

                {

                    dashboard?.platforms.map(platform=>(

                        <div
                            key={platform.name}
                            className="platform"
                        >

                            <div>

                                <strong>

                                    {platform.icon}

                                    {" "}

                                    {platform.name}

                                </strong>

                                <br/>

                                {

                                    platform.connected ?

                                        <small>

                                            @{platform.username}

                                        </small>

                                    :

                                        <small>

                                            Not Connected

                                        </small>

                                }

                            </div>

                            {

                                platform.connected ?

                                    <button className="connected">

                                        Connected

                                    </button>

                                :

                                    <button>

                                        Connect

                                    </button>

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default IntegrationPanel;