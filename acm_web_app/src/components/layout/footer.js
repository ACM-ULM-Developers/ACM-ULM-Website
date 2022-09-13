import React from "react";
import {NavLink} from 'react-router-dom'
import TopButton from './TopButton';

export default function Footer(){

    return(
        <div className = "footer">
                      
            <div className="footerDiv1">
            <ul className="footer--items">
                <li><NavLink to ="/"> HOME </NavLink></li>
                <li><NavLink to="/stuff"> ACADEMICS </NavLink> </li>
                <li><NavLink to="/contact"> CURRENT EVENTS </NavLink></li>
            </ul>
            </div>

            <div className="footerDiv2">
            <ul className="footer--items">
                <li><NavLink to="/contact"> EXECUTIVE MEMBERS </NavLink> </li>
                <li><NavLink to="/discordComm"> ULM DISCORD COMMUNITY </NavLink> </li>
                <li><NavLink to="/alumni"> CS ALUMNI </NavLink></li>
                
            </ul>
            </div>


            <a href="www.google.com" className="footerImage">
            <div className="imageDiv">
            </div>
            </a>

            <TopButton />
    </div>            

    )


}