import React, { useState } from 'react'
import Logo from '../images/logo.png'
import './Sidebar.css'
// import { SidebarData } from '../Data/Data'
import {Link, Routes, Route, useNavigate} from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"

const Sidebar = () => {

    const[selected, setSelected] = useState(0)
    const navigate = useNavigate();
    
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Signed out successfully");
            navigate('/');

        }).catch((error) => {
            console.log(error)
        })
    }

    const navigateToDashboard = () => {
        navigate('/Dashboard');
    };

    const navigateToBooking = () => {
        navigate('/Book');
    };

    const navigateToSignOut = () => {
        navigate('/');
    };

    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    T-Haul
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                <div className="Dashboard">
                    <Link to="/Dashboard">
                        <button className="B1">Dashboard</button>
                    </Link>

                </div>
                <div className="Booking">
                    <Link to="/Book">
                        <button className="B2">Booking</button>
                    </Link>
                    {/* Booking */}
                </div>
                {/* {SidebarData.map((item, index) => { */}
                    {/* return (
                        // <div className={selected ===index?'menuitem active': 'menuitem'}
                        // key = {index}
                        // onClick = {()=>setSelected(index)}
                        // >
                        //     {/* <span>{item.heading}</span> */}
                        {/* //     {item.heading} */}
                        {/* // </div> */}
                    {/* ) */} 
                {/* // })} */}
                <div className="SignOut">
                    {/* <Link to="/"> */}
                        <button className="B3" onClick={userSignOut}>Sign Out</button>
                    {/* </Link> */}
                </div>
            </div>
  
        </div>
    )
}

export default Sidebar
