import { useEffect, useState } from "react";
import "./CSS/Leetcode.css";

import { LeetcodeResponse } from "../interfaces/Leetcode";
import { getLeetcodeDashboard } from "../services/leetcodeService";
import LeetcodeHeatmap from "../components/Leetcode/LeetcodeHeatmap";
import Sidebar from "../components/dashboard/Sidebar";

function Leetcode() {

    const [leetcode, setLeetcode] = useState<LeetcodeResponse>();

    useEffect(() => {

        loadLeetcode();

    }, []);

    async function loadLeetcode() {

        const userId = Number(
            localStorage.getItem("userId")
        );

        const response = await getLeetcodeDashboard(userId);

        setLeetcode(response);

    }

    if (!leetcode)
        return <div className="leetcode-loading">Loading...</div>;

    return (

        <div className="app-layout">

            {/* <Sidebar /> */}


        <div className="leetcode-page">

            <div className="leetcode-profile">

                <img
                    src={leetcode.avatar}
                    alt={leetcode.realName}
                />

                <div>

                    <h1>{leetcode.realName}</h1>

                    <p>@{leetcode.username}</p>

                    <div className="leetcode-badges">

                        <span>🏆 Rank #{leetcode.ranking.toLocaleString()}</span>

                        <span>⭐ Reputation {leetcode.reputation}</span>

                    </div>

                </div>

            </div>

            <div className="leetcode-stats">

                <div className="stat-card total">

                    <h2>{leetcode.totalSolved}</h2>

                    <p>Total Solved</p>

                </div>

                <div className="stat-card easy">

                    <h2>{leetcode.easySolved}</h2>

                    <p>Easy</p>

                </div>

                <div className="stat-card medium">

                    <h2>{leetcode.mediumSolved}</h2>

                    <p>Medium</p>

                </div>

                <div className="stat-card hard">

                    <h2>{leetcode.hardSolved}</h2>

                    <p>Hard</p>

                </div>

            </div>

            <LeetcodeHeatmap
                submissionCalendar={leetcode.submissionCalendar}
            />

            <div className="contest-card">

                <h2>🏁 Contest Statistics</h2>

                <div className="contest-grid">

                    <div>

                        <h3>{leetcode.contestRating}</h3>

                        <p>Contest Rating</p>

                    </div>

                    <div>

                        <h3>#{leetcode.contestRanking.toLocaleString()}</h3>

                        <p>Global Ranking</p>

                    </div>

                    <div>

                        <h3>{leetcode.contestsAttended}</h3>

                        <p>Contests Attended</p>

                    </div>

                </div>

            </div>

            <div className="submissions-card">

                <div className="section-header">

                    <h2>📝 Recent Submissions</h2>

                    <span>{leetcode.recentSubmissions.length} submissions</span>

                </div>

                <div className="submission-list">

                    {leetcode.recentSubmissions.map((submission, index) => (

                        <div
                            key={`${submission.titleSlug}-${submission.timestamp}-${index}`}
                            className="submission-item"
                        >

                            <div className="submission-info">

                                <h4>{submission.title}</h4>

                                <div className="submission-meta">

                                    <span className="lang">
                                        {submission.lang.toUpperCase()}
                                    </span>

                                    <span className="time">
                                        {new Date(Number(submission.timestamp) * 1000)
                                            .toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric"
                                            })}
                                    </span>

                                </div>

                            </div>

                            <span className={`status ${submission.statusDisplay === "Accepted" ? "accepted" : "other"}`}>
                                {submission.statusDisplay}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>

        </div>

    );

}

export default Leetcode;