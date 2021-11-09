import './Navbar.css';
import React, {useState} from 'react';

// Other Imports
import {Link} from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
    // State To Manage Menu Toggle
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <h2 className="navbarLogo">Akash Patel</h2>
            <ul className="navbarLinks" style={{transform: open ? "translateX(0px)" : ""}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experties">Experties</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <CgMenuRight className="navbarIcon" onClick={() => setOpen(!open)} />
        </div>
    )
}
