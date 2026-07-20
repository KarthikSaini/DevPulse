import { useNavigate } from "react-router-dom";
import "./CSS/Profile.css";

function Profile() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate("/");

    };

    return (

        <div className="profile-page">

            <div className="profile-card">

                <img
                    src="https://ui-avatars.com/api/?name=User"
                    alt="profile"
                    className="profile-avatar"
                />

                <h2>Karthik Saini</h2>

                <p>karthik@gmail.com</p>

                <div className="profile-section">

                    <h3>Developer Accounts</h3>

                    <div className="profile-item">
                        <span>GitHub</span>
                        <span>KarthikSaini</span>
                    </div>

                    <div className="profile-item">
                        <span>LeetCode</span>
                        <span>LJeriFUfr4</span>
                    </div>

                    <div className="profile-item">
                        <span>LinkedIn</span>
                        <span>linkedin.com/in/karthik</span>
                    </div>

                </div>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Sign Out
                </button>

            </div>

        </div>

    );

}

export default Profile;