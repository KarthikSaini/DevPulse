import { useState } from "react";
import { signup } from "../services/authService";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";
import { SignupRequest } from "../interfaces/Signup";

function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState<SignupRequest>({

        name: "",
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

            await signup(form);

            alert("Account Created Successfully");

            navigate("/");

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Create Account</h1>

                <p>Welcome to DevPulse</p>

                <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                />

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

                    Sign Up

                </button>

                <div className="auth-link">

                    Already have an account?

                    <span onClick={() => navigate("/")}>

                        Login

                    </span>

                </div>

            </div>

        </div>

    );

}

export default Signup;