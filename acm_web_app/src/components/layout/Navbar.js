import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar(){

    return(
        <div>
            <ul className="header">
                <li><NavLink to ="/"> Home </NavLink></li>
                <li><NavLink to="/stuff"> Academics </NavLink></li>
                <li><NavLink to="/contact"> Current Events </NavLink></li>
                <li><NavLink to="/contact"> Executive Members </NavLink></li>
                <li><NavLink to="/discordComm"> ULM Discord Community </NavLink></li>
                <li><NavLink to="/alumni"> Alumni </NavLink></li>
            </ul>
        </div>
    )

}