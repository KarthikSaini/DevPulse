import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Profile.css";
import { getProfile } from "../services/profileService";

interface UserProfile {

    name: string;
    email: string;

    githubUsername: string;

    leetcodeUsername: string;

    linkedinUrl: string;

    profileImage: string | null;
}

function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState<UserProfile>();

    useEffect(() => {

        loadProfile();

    }, []);

    async function loadProfile() {

        const userId = Number(localStorage.getItem("userId"));

        const response = await getProfile(userId);

        console.log(response);
        

        setUser(response);

    }

    function logout() {

        localStorage.clear();

        navigate("/");

    }

    if (!user) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="profile-page">

            <div className="profile-card">

                <img

                    src={
                        user.profileImage ??
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff&size=180`
                    }

                    alt={user.name}

                    className="profile-avatar"

                />

                <h1>{user.name}</h1>

                <p className="profile-email">

                    {user.email}

                </p>

                <div className="profile-divider" />

                <div className="profile-grid">

                    <div className="profile-item">

                        <span className="title">GitHub</span>

                        <span>{user.githubUsername || "-"}</span>

                    </div>

                    <div className="profile-item">

                        <span className="title">LeetCode</span>

                        <span>{user.leetcodeUsername || "-"}</span>

                    </div>

                    <div className="profile-item">

                        <span className="title">LinkedIn</span>

                        <a

                            href={user.linkedinUrl}

                            target="_blank"

                            rel="noreferrer"

                        >

                            {user.linkedinUrl || "-"}

                        </a>

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