import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import "./Css/MainLayout.css";

function MainLayout() {

    return (

        <div className="app-layout">

            <Sidebar />

            <main className="main-content">

                <Outlet />

            </main>

        </div>

    );

}

export default MainLayout;