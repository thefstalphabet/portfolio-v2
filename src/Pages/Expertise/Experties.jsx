import React from 'react';
import Skill from '../../Components/Skill/Skill';
import './Expertise.css';
import { FaPencilRuler } from "react-icons/fa";
import { GiThornyTentacle } from "react-icons/gi";
import { MdPieChart } from "react-icons/md";
import { 
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiExpress,
    SiGithub,
    SiMongodb,
    SiMysql,
    SiBootstrap,
    SiCplusplus 
} from "react-icons/si";
import { 
    FaNodeJs,
    FaGitAlt 
} from "react-icons/fa";

const SkillData = [
    {   
        logo: <FaPencilRuler/>,
        title: "Front-End Development",
        description: "I've over 2.5 years of experience in front-end development with ReactJS.",
    },
    {   
        logo: <GiThornyTentacle/>,
        title: "Competitive Coding",
        description: "I'm a competitive programmer since 2020, I have great knowledge in Data Structure and Algorithms & Problem solving.",
    },
    {   
        logo: <MdPieChart/>,
        title: "Graphic Design",
        description: "Since my childhood, I love to create designs and patterns so I learn some software like Adobe Photoshop, Illustrator, InDesign, canva.",
    },
]

const TechSkill = [
    <SiJavascript/>, <SiPython />, <SiHtml5 />, <SiCss3 />, <SiReact />,
    <FaNodeJs />, <SiExpress />, <FaGitAlt />, <SiGithub />, <SiMongodb />,
    <SiMysql />, <SiBootstrap />, <SiCplusplus />,
]

function Expertise() {
    return (
        <div id="expertise">
            <div className="expertiseHeader">
                <h1>My Experties</h1>
            </div>
            <div className="expertiseBody">
                {SkillData.map((e)=>(
                    <Skill
                    logo={e.logo}
                    title={e.title}
                    description={e.description}
                    />
                ))}
            </div>
            <div className="technicalSkill">
                <h2>Technical Skills</h2>
                <div className="technicalSkill_icons">
                    {TechSkill.map((e, i)=>(
                        <div key={i} className="icon">{e}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expertise
