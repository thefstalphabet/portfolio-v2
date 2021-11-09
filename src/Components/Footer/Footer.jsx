import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';
import { 
    SiInstagram,
    SiFacebook,
    SiLinkedin,
    SiTwitter 
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

const SocialData = [
    {
        weblink: "https://instagram.com/man.engineerr",
        icon: <SiInstagram/>
    },
    {
        weblink: "https://www.facebook.com/people/Akash-Patel/100015248345332",
        icon: <SiFacebook/>
    },
    {
        weblink: "https://www.linkedin.com/in/thefstalphabet",
        icon: <SiLinkedin/>
    },
    {
        weblink: "https://www.twitter.com/thefstalphabet",
        icon: <SiTwitter/>
    },
    {
        weblink: "mailto: akashpatel10000@gmail.com",
        icon: <MdEmail/>
    },
]

function Footer() {
    return (
        <div className="footer">
            <p>Made with ❤️ with ReactJS</p>
            <div className="footerIcons">
                {SocialData.map((e)=>(
                    <Link 
                    className="icon" 
                    to={{ pathname: e.weblink}} 
                    target="_blank">
                        {e.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer
