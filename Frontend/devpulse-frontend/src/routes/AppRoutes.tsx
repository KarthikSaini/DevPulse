import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Github from "../pages/Github";
import Dashboard from "../pages/Dashboard";
import Leetcode from "../pages/Leetcode";
import MainLayout from "../layouts/MainLayout";
import Skills from "../pages/Skills";


function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />} >
            <Route path="/" element={ <Login/> }/>
            <Route path="/signup" element={ <Signup/> }/>
            <Route path="/dashboard" element={ <Dashboard/> }/>
            <Route path="/github" element={ <Github/> }/>
            <Route path="/leetcode" element={ <Leetcode/> } />
            <Route path="/Skills" element={ <Skills/> } />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;