import { useState } from 'react';
import './CSS/Github.css';
import { getGithubProfile } from '../services/githubService'; 
import { GithubProfile } from '../interfaces/Github';

function Github(){
    
    const [userId, setUserId] = useState("");

    const [profile, setProfile] = useState<GithubProfile | null>(null);

    const searchProfile = async () => {
        try {
            const response = await getGithubProfile(Number(userId))
            setProfile(response);
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
         <div className="container">

            <h1>DevPulse</h1>

            <div className="search-box">

                <input
                    type="number"
                    placeholder="Enter User Id"
                    value={userId}
                    onChange={(e)=>setUserId(e.target.value)}
                />

                <button onClick={searchProfile}>
                    Search
                </button>

            </div>

            {profile && (

                <div className="profile-card">

                    {/* <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                    /> */}

                    <img
                        src={profile?.avatar_url}
                        alt="Avatar"
                        width={150}
                    />

                    <h2>{profile.name}</h2>

                    <h4>@{profile.login}</h4>

                    <p>{profile.bio}</p>

                    <div className="stats">

                        <div>

                            <h3>{profile.followers}</h3>

                            <span>Followers</span>

                        </div>

                        <div>

                            <h3>{profile.following}</h3>

                            <span>Following</span>

                        </div>

                        <div>

                            <h3>{profile.publicRepos}</h3>

                            <span>Repositories</span>

                        </div>

                    </div>

                    <p>

                        <strong>Company : </strong>

                        {profile.company || "N/A"}

                    </p>

                    <p>

                        <strong>Location : </strong>

                        {profile.location || "N/A"}

                    </p>

                    <a
                        href={profile.profileUrl}
                        target="_blank"
                    >
                        View Github Profile
                    </a>

                </div>

            )}

        </div>
    );
}

export default Github;