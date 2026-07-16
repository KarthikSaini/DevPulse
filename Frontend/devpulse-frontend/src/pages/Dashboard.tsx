import "./CSS/Dashboard.css";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import IntegrationPanel from "../components/dashboard/IntegrationPanel";
import StatsCard from "../components/dashboard/StatsCard";

import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import { Dashboard as DashboardModel } from "../interfaces/Dashboard";

function Dashboard() {

    const [dashboard, setDashboard] = useState<DashboardModel>();

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        const userId = localStorage.getItem("userId");

        if (!userId) return;

        const response = await getDashboard(Number(userId));

        setDashboard(response);

    };

    return (

        <div className="dashboard-layout">

            <Sidebar/>

            <div className="dashboard-content">

                <Navbar dashboard={dashboard}/>

                <WelcomeCard dashboard={dashboard}/>

                <StatsCard dashboard={dashboard}/>

                <IntegrationPanel dashboard={dashboard}/>

            </div>

        </div>

    );

}

export default Dashboard;