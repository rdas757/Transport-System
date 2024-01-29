import React, { useState } from "react";
import './Login.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const registerSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/');
    };

    return (
        <div className="App">
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={registerSubmit}>
                {/* <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" /> */}
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={navigateToLogin}>Already have an account? Login here.</button>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </div>
        </div>
    )
}