import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.css";
import Avatar from '../../Assets/avatar.png';
import { Button } from '@material-ui/core';
import Experiences from '../Experiences/Experiences';
import About from '../About/About';
// import Expertise from '../Expertise/Expertise';
import GithubGraph from '../../Components/GithubGraph/GithubGraph';
import Expertise from '../Expertise/Experties';
import Footer from '../../Components/Footer/Footer';

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
                <p>I ❤️ to Code</p>
                <div className="homeBody_btns">
                    <Button variant="outlined">Contact Me</Button>
                    <Button variant="outlined">Know About</Button>
                </div>
            </div>

            {/* Experiences Section */}
            <Experiences/>

            {/* About Section */}
            <About/>
            

            {/* Experties Section */}
            <Expertise/>

            {/* Project Section */}
            

            {/* Github Graph */}
            <GithubGraph/>

            {/* Footer Section */}
            <Footer/>

        </div>
    )
}

export default Home
