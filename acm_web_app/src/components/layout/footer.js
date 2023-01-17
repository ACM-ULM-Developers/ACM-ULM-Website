import React from "react"
import {NavLink} from 'react-router-dom'
import TopButton from './TopButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faDiscord, faLinkedinIn, phone } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){   // exporting as 'Footer' with capital 'F'

    return(
            <div className="mainFooter">
				<footer className="footer-distributed">
				{/*<link rel = "stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css">*/}
				<div className="footer-left">

					<h3>ACM<span>logo</span></h3>

					<p className="footer-links">
						
						<NavLink to ="/" className="link-1">Home</NavLink> <br />
					
						<NavLink to ="/stuff" className="link-1">Academics</NavLink> <br /> 
					
						<NavLink to ="/contact" className="link-1">Current Events</NavLink> <br />

						<NavLink to ="/executiveMem" className="link-1">Executive Mmembers</NavLink> <br />
						
						<NavLink to ="/discordComm" className="link-1">Discord Channel</NavLink> <br />
						
						<NavLink to ="/alumni" className="link-1">Alumni</NavLink>
					</p>

					<p className="footer-company-name"> ULM ACM Chapters © date</p>
				</div>

				<div className="footer-center">

					<div>
						<i class="fa fa-map-marker"></i>
						<p><span>700 University Ave</span> Monroe, LA</p>
					</div>

					<div>
						<i class="fa fa-phone"></i>
						<p>+111 111 1111</p>
					</div>

					<div className="ulm-logo-footer">
						</div>

				</div>

				<div className="footer-right">

					<p class="footer-company-about">
						<span>Follow us on</span>
						There are many ways to connect with us. To get more information, follow us on our social media pages.
					</p>

					<div className="footer-icons">

					< a href ="https://facebook.com">
					<FontAwesomeIcon icon={faFacebookF} />
					</a>

					< a href ="https://www.instagram.com/">
					<FontAwesomeIcon icon={faInstagram} />
					</a>

					< a href ="https://www.linkedin.com">
					<FontAwesomeIcon icon={faLinkedinIn} />
					</a>

					< a href ="https://discord.com/">
					<FontAwesomeIcon icon={faDiscord} />
					</a>

					</div>

				</div>
				
					<TopButton />
					
			</footer>     
        </div>     

    )


}