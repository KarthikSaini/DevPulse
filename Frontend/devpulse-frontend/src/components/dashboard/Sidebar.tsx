import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="sidebar">

            <h2>DevPulse</h2>

            <NavLink to="/dashboard">
                Dashboard
            </NavLink>

            <NavLink to="/github">
                GitHub
            </NavLink>

            <NavLink to="/leetcode">
                LeetCode
            </NavLink>

            <NavLink to="/skills">
                Skills
            </NavLink>

            <NavLink to="/projects">
                Projects
            </NavLink>

            <NavLink to="/analytics">
                Analytics
            </NavLink>

            <NavLink to="/settings">
                Settings
            </NavLink>

            <NavLink to="/profile">
                Profile
            </NavLink>

        </aside>

    );

}

export default Sidebar;