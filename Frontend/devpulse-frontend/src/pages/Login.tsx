import { useState } from "react";
import { login } from "../services/authService";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../interfaces/Login";
import { savedUserSession } from "../utils/storage";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState<LoginRequest>({

        email: "",
        password: ""

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async () => {

        try {

            const response = await login(form);

            savedUserSession(response.id, response.token);

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Welcome Back</h1>

                <p>Login to continue</p>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
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

                <button onClick={handleSubmit}>

                    Login

                </button>

                <div className="auth-link">

                    Don't have an account?

                    <span onClick={() => navigate("/signup")}>

                        Sign Up

                    </span>

                </div>

            </div>

        </div>

    );

}

export default Login;