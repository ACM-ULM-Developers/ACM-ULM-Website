import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar(){

    return(
        <div className = "navbar">
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul className="navbar--items">
                <li><NavLink to ="/"> HOME </NavLink></li>
                <li><NavLink to="/stuff"> ACADEMICS </NavLink></li>
                <li><NavLink to="/contact"> CURRENT EVENTS </NavLink></li>
                <li><NavLink to="/contact"> EXECUTIVE MEMBERS </NavLink></li>
                <li><NavLink to="/discordComm"> ULM DISCORD COMMUNITY </NavLink></li>
                <li><NavLink to="/alumni"> CS ALUMNI </NavLink></li>
            </ul>
        </div>
    )

}