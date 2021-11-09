import React from 'react';
import Skill from '../../Components/Skill/Skill';
import './Expertise.css';
import {SkillData, TechSkill} from '../../Components/Skill/SkillData';

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
