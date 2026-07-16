import "./CSS/Dashboard.css";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import IntegrationPanel from "../components/dashboard/IntegrationPanel";
import StatsCard from "../components/dashboard/StatsCard";

function Dashboard() {

    return (

        <div className="dashboard-layout">

            <Sidebar/>

            <div className="dashboard-content">

                <Navbar/>

                <WelcomeCard />

                <StatsCard/>

                <IntegrationPanel/>

            </div>

        </div>

    );

}

export default Dashboard;