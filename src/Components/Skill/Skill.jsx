import React from 'react';
import "./Skill.css";

function Skill(props) {
    return (
        <div className="skill">
            <div>
                {props.logo}
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Skill
