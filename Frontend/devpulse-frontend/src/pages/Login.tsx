import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { savedUserSession } from "../utils/storage";
import { LoginRequest } from "../interfaces/Login";

import "../styles/Auth.css";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState<LoginRequest>({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setError("");
    };

    const handleSubmit = async () => {

        if (!form.email || !form.password) {
            setError("Please enter email and password.");
            return;
        }

        setLoading(true);

        try {

            const response = await login(form);

            savedUserSession(response.id, response.token);

            navigate("/dashboard");

        } catch (error: any) {

            const code = error.response?.data?.errorCode?.trim();
            

            switch (code) {

                case "USER_NOT_FOUND":
                    setError("No account found with this email.");
                    break;

                case "INVALID_PASSWORD":
                    setError("Incorrect password.");
                    break;

                case "EMAIL_ALREADY_EXISTS":
                    setError("Email is already registered.");
                    break;

                default:
                    setError("Something went wrong.");
            }
        }   

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-page">

            {/* Left Side */}

            <div className="login-left">

                <div className="overlay">

                    <h1>DevPulse</h1>

                    <p>
                        Your Developer Portfolio Dashboard
                    </p>

                    <ul>
                        <li>🚀 GitHub Analytics</li>
                        <li>📈 LeetCode Dashboard</li>
                        <li>💻 Projects & Skills</li>
                        <li>🏆 Developer Portfolio</li>
                    </ul>

                </div>

            </div>

            {/* Right Side */}

            <div className="login-right">

                <div className="login-card">

                    <h2>Welcome Back 👋</h2>

                    <p>
                        Login to continue
                    </p>

                    {error && (
                        <div className="error-box">
                            {error}
                        </div>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>

                    <div className="divider">
                        OR
                    </div>

                    <p className="signup-text">

                        Don't have an account?

                        <span onClick={() => navigate("/signup")}>
                            Create Account
                        </span>

                    </p>

                </div>

            </div>

        </div>

    );
}

export default Login;