import React from 'react';
import Experience from '../../../Components/Experience/Experience';
import './Experiences.css';
import ExperienceData from '../../../Components/Experience/ExperienceData';

function Experiences() {
    return (
        <div className="experiences">
            <div className="experiencesHeader">
                <h1>Experiences</h1>
            </div>
            <div className="experiencesBody">
                {ExperienceData.map((e)=>(
                    <Experience 
                    role={e.role}
                    company_name={e.company_name}
                    employment_type={e.employment_type}
                    start_date={e.start_date}
                    end_date={e.end_date}
                    location={e.location}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experiences
