import React from 'react';
import './Experience.css';

function Experience(props) {
    return (
        <div className="experience">
            <h2>{props.role}</h2>
            <h3>{props.company_name}</h3>
            <p>{props.employment_type}</p>
            <p><span>{props.start_date}</span> – <span>{props.end_date}</span></p>
            <p>{props.location}</p>
        </div>
    )
}

export default Experience
