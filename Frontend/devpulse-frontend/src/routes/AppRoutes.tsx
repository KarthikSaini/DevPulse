import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Github from "../pages/Github";
import Dashboard from "../pages/Dashboard";


function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login/> }/>
            <Route path="/signup" element={ <Signup/> }/>
            <Route path="/dashboard" element={ <Dashboard/> }/>
            <Route path="/github" element={ <Github/> }/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;