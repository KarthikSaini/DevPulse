import { useEffect, useState } from "react";
import "./CSS/Settings.css";
import { getDashboard } from "../services/dashboardService";
import {  } from "../interfaces/User";

function Settings() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        bio: ""
    });

    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadProfile();
    }, []);

    async function loadProfile() {

        const userId = Number(localStorage.getItem("userId"));

        const response = await getDashboard(userId);

        setForm({
            name: response.name || "",
            email: response.email || "",
            bio: response.bio || ""
        });

    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    async function saveProfile() {

        try {

            setSaving(true);

            const userId = Number(localStorage.getItem("userId"));

            await updateUser(userId, form);

            alert("Profile Updated Successfully");

        }

        catch {

            alert("Unable to update profile");

        }

        finally {

            setSaving(false);

        }

    }

    return (

        <div className="settings-page">

            <div className="settings-card">

                <h1>Settings</h1>

                <p>
                    Manage your account preferences.
                </p>

                <div className="settings-section">

                    <h2>Profile</h2>

                    <label>Full Name</label>

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <label>Bio</label>

                    <textarea
                        rows={4}
                        name="bio"
                        value={form.bio}
                        onChange={handleChange}
                    />

                </div>

                <div className="settings-section">

                    <h2>Password</h2>

                    <button className="secondary-btn">

                        Change Password

                    </button>

                </div>

                <div className="settings-section danger">

                    <h2>Danger Zone</h2>

                    <button className="danger-btn">

                        Delete Account

                    </button>

                </div>

                <button
                    className="save-btn"
                    onClick={saveProfile}
                >

                    {saving ? "Saving..." : "Save Changes"}

                </button>

            </div>

        </div>

    );

}

export default Settings;