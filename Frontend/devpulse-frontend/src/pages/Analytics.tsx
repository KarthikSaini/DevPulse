import "./CSS/Analytics.css";

function Analytics() {

    return (

        <div className="analytics-page">

            <div className="analytics-header">

                <div>

                    <h1>Developer Analytics</h1>

                    <p>
                        A unified overview of your coding journey.
                    </p>

                </div>

                <button className="refresh-btn">

                    Refresh Data

                </button>

            </div>

            <div className="overview-grid">

                <div className="overview-card">

                    <h2>⭐ GitHub Stars</h2>

                    <span className="big-number">124</span>

                    <small>Across all repositories</small>

                </div>

                <div className="overview-card">

                    <h2>💻 Repositories</h2>

                    <span className="big-number">18</span>

                    <small>Public Projects</small>

                </div>

                <div className="overview-card">

                    <h2>🧩 LeetCode Solved</h2>

                    <span className="big-number">532</span>

                    <small>Easy + Medium + Hard</small>

                </div>

                <div className="overview-card">

                    <h2>🔥 Streak</h2>

                    <span className="big-number">54 Days</span>

                    <small>Current Coding Streak</small>

                </div>

            </div>

            <div className="analytics-grid">

                <div className="analytics-card large">

                    <h2>Contribution Trend</h2>

                    <div className="placeholder">

                        Contribution Graph

                    </div>

                </div>

                <div className="analytics-card">

                    <h2>Language Usage</h2>

                    <div className="placeholder">

                        Pie Chart

                    </div>

                </div>

                <div className="analytics-card">

                    <h2>Difficulty Breakdown</h2>

                    <div className="placeholder">

                        Bar Chart

                    </div>

                </div>

            </div>

            <div className="analytics-card full">

                <h2>Developer Insights</h2>

                <ul>

                    <li>✅ Java is your strongest language.</li>

                    <li>🚀 Your GitHub activity increased by 27% this month.</li>

                    <li>💡 Most productive day: Tuesday.</li>

                    <li>🔥 Current coding streak: 54 days.</li>

                    <li>🏆 Top repository: DevPulse.</li>

                </ul>

            </div>

        </div>

    );

}

export default Analytics;