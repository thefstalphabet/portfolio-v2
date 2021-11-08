import React from 'react';
import Skill from '../../Components/Skill/Skill';
import './Experties.css';
import SkillData from '../../Components/Skill/SkillData';

function Experties() {
    return (
        <div id="experties">
            <div className="expertiesHeader">
                <h1>My Experties</h1>
            </div>
            <div className="expertiesBody">
                {SkillData.map((e)=>(
                    <Skill
                    logo={e.logo}
                    title={e.title}
                    description={e.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experties
