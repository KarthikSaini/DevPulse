import { useState } from "react";

import { Dashboard } from "../../interfaces/Dashboard";
import ConnectLeetcode from "../Leetcode/ConnectLeetcode";

interface Props {
    dashboard?: Dashboard;
}

function IntegrationPanel({ dashboard }: Props) {

    const [openLeetcodeModal, setOpenLeetcodeModal] = useState(false);

    const [leetcodeUsername, setLeetcodeUsername] = useState("");

    const openLeetcode = (username?: string | null) => {

        setLeetcodeUsername(username ?? "");

        setOpenLeetcodeModal(true);

    };

    return (

        <>

            <div className="integration-card">

                <h2>Connected Platforms</h2>

                <div className="integration-list">

                    {dashboard?.platforms.map((platform) => (

                        <div
                            key={platform.name}
                            className="platform"
                        >

                            <div>

                                <strong>

                                    {platform.icon} {platform.name}

                                </strong>

                                <br />

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

                            {/* LeetCode */}

                            {platform.name === "LeetCode" ? (

                                <button

                                    className={platform.connected ? "connected" : ""}

                                    onClick={() =>
                                        openLeetcode(platform.username)
                                    }

                                >

                                    {platform.connected ? "Update" : "Connect"}

                                </button>

                            ) : (

                                platform.connected ?

                                    <button className="connected">

                                        Connected

                                    </button>

                                    :

                                    <button

                                        onClick={() => {

                                            switch (platform.name) {

                                                case "GitHub":

                                                const userId = localStorage.getItem("userId");

                                                window.location.href =
                                                    `http://localhost:8080/api/github/connect/${userId}`;

                                                break;

                                                case "LinkedIn":
                                                    alert("LinkedIn connection coming soon");
                                                    break;

                                                case "Jira":
                                                    alert("Jira connection coming soon");
                                                    break;

                                                default:
                                                    break;

                                            }

                                        }}

                                    >

                                        Connect

                                    </button>

                            )}

                        </div>

                    ))}

                </div>

            </div>

            <ConnectLeetcode

                open={openLeetcodeModal}

                currentUsername={leetcodeUsername}

                onClose={() => setOpenLeetcodeModal(false)}

            />

        </>

    );

}

export default IntegrationPanel;