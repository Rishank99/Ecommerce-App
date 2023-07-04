import React, { useState } from 'react'
import toast from "react-hot-toast"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Nav from "./Nav"

export default function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    // login function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/categories");
            } else {
                toast.error(res.data.message);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }

    };

    return (
        <>
            <Nav />
            <div className="container">
                <div className="register">
                    <h1>Login Form</h1>

                    <form id="register" onSubmit={handleSubmit} >
                        <label htmlFor="password">Password : </label>
                        <br />
                        <input type="password" name="name" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                        <br />
                        <label htmlFor="email">Email :</label>
                        <br /><input type="email" name="myEmail" placeholder="Enter your valid Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                        <br />
                        <input id="submit" type="submit" value="LOGIN" />
                    </form>

                </div>
            </div>
        </>
    )
}
