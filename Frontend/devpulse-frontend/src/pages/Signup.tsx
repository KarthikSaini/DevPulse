import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signup } from "../services/authService";
import { SignupRequest } from "../interfaces/Signup";

import "../styles/Auth.css";

function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState<SignupRequest>({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setError("");

    };

    const validate = () => {

        if (!form.name.trim()) {
            return "Please enter your full name.";
        }

        if (form.name.trim().length < 3) {
            return "Name should contain at least 3 characters.";
        }

        if (!form.email.trim()) {
            return "Please enter your email.";
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            return "Please enter a valid email address.";
        }

        if (!form.password) {
            return "Please enter your password.";
        }

        if (form.password.length < 8) {
            return "Password must be at least 8 characters.";
        }

        return "";

    };

    const handleSubmit = async () => {

        const validationError = validate();

        if (validationError) {

            setError(validationError);

            return;

        }

        setLoading(true);

        try {

            await signup(form);

            alert("🎉 Account Created Successfully");

            navigate("/");

        }

        catch (err: any) {

            if (err.response?.status === 409) {

                setError("Email already exists.");

            }

            else {

                setError("Unable to create account. Please try again.");

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

                    <h1>Join DevPulse</h1>

                    <p>
                        Build your developer portfolio with
                        GitHub analytics, LeetCode insights,
                        project showcase and skill tracking.
                    </p>

                    <ul>

                        <li>🚀 GitHub Dashboard</li>

                        <li>💻 LeetCode Progress</li>

                        <li>📊 Skills Analytics</li>

                        <li>🌟 Build Your Portfolio</li>

                    </ul>

                </div>

            </div>

            {/* Right Side */}

            <div className="login-right">

                <div className="login-card">

                    <h2>Create Account ✨</h2>

                    <p>
                        Start your DevPulse journey
                    </p>

                    {error && (

                        <div className="error-box">

                            {error}

                        </div>

                    )}

                    <input
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                    />

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

                        {loading
                            ? "Creating Account..."
                            : "Sign Up"}

                    </button>

                    <div className="divider">

                        OR

                    </div>

                    <p className="signup-text">

                        Already have an account?

                        <span
                            onClick={() => navigate("/")}
                        >

                            Login

                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Signup;