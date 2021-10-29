import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.css";
import Avatar from '../../Assets/avatar.png';
import { Button } from '@material-ui/core';
import Experiences from '../Experiences/Experiences';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Experties from '../Experties/Experties';

// Components Imports

function Home() {
    return (
        <div id="home">
            {/* Landing Page */}
            <Navbar/>
            <div className="homeBody">
                <img className="homeBody_avatar" src={Avatar} alt="Avatar" />
                <h1>Hola! 👋🏻</h1>
                <p>I'm Akash</p>
                <p>A Web-Developer and Compititve Programmer</p>
                <div className="homeBody_btns">
                    <Button className="btn1" variant="contained">Know About</Button>
                    <Button className="btn2" variant="outlined">Contact</Button>
                </div>
            </div>

            {/* Experiences Section */}
            <Experiences/>

            {/* About Section */}
            <About/>

            {/* Project Section */}
            

            {/* Experties Section */}
            <Experties/>

            {/* Contact Section */}
        </div>
    )
}

export default Home
