import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Dashboard from "../pages/Dashboard";
import Github from "../pages/Github";
import Leetcode from "../pages/Leetcode";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Login />} />

                <Route path="/signup" element={<Signup />} />



                {/* Protected Routes */}

                <Route
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/github" element={<Github />} />

                    <Route path="/leetcode" element={<Leetcode />} />

                    <Route path="/skills" element={<Skills />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/profile" element={<Profile />} />

                    <Route path="/analytics" element={<Analytics />} />

                    <Route path="/settings" element={<Settings />} />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;