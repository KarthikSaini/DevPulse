import { useState } from "react";
import { updateLeetcodeUsername } from "../../services/leetcodeService";
import "./Css/ConnectLeetcode.css";

interface Props {

    open: boolean;

    onClose: () => void;

    currentUsername?: string;

}

function ConnectLeetcodeModal({
    open,
    onClose
}: Props) {

    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    if (!open) return null;

    async function connect() {

        if (!username.trim()) {

            setError("Please enter your LeetCode username.");
            return;

        }

        try {

            setLoading(true);
            setError("");

            const userId = Number(localStorage.getItem("userId"));

            console.log(userId, username);
            

            const response = await updateLeetcodeUsername(userId, username);

            console.log(response.data);
            

            onClose();

            window.location.reload();

        }

        catch (err: any) {

            if (err.response?.data?.code === "LEETCODE_USER_NOT_FOUND") {

                setError("LeetCode username not found.");

            } else {

                setError("Unable to connect your account.");

            }

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">

                    <div className="leetcode-logo">

                        🟡

                    </div>

                    <div>

                        <h2>Connect LeetCode</h2>

                        <p>

                            Enter your LeetCode username

                        </p>

                    </div>

                </div>

                <div className="input-group">

                    <label>

                        LeetCode Username

                    </label>

                    <input

                        type="text"

                        value={username}

                        onChange={(e) => {

                            setUsername(e.target.value);
                            setError("");

                        }}

                        placeholder="e.g. LJeriFUfr4"

                        onKeyDown={(e) => {

                            if (e.key === "Enter") {

                                connect();

                            }

                        }}

                    />

                </div>

                <div className="helper-text">

                    Your profile URL should look like

                    <br />

                    <span>

                        https://leetcode.com/u/your_username/

                    </span>

                </div>

                {

                    error && (

                        <div className="error">

                            {error}

                        </div>

                    )

                }

                <div className="modal-actions">

                    <button

                        className="cancel-btn"

                        onClick={onClose}

                        disabled={loading}

                    >

                        Cancel

                    </button>

                    <button

                        className={`connect-btn ${loading ? "loading" : ""}`}

                        onClick={connect}

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Connecting..."

                                : "Connect Account"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ConnectLeetcodeModal;