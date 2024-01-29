import React, { useState } from "react";
import './Login.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const loginSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/Dashboard');
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/Dashboard');
    };

    const navigateToRegister = () => {
        navigate('/Register');
    };


    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={loginSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
                <button className="link-btn" onClick={navigateToRegister}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}