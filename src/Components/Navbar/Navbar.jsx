import './Navbar.css';
import React, {useState} from 'react'

// Other Imports
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

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
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experties">Experties</Link></li>
                <li><Link to="/constact">Contact</Link></li>
            </ul>
            <MenuIcon className="navbarIcon" onClick={() => setOpen(!open)} />
        </div>
    )
}
