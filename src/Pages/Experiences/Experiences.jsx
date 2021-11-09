import React from 'react';
import Experience from '../../Components/Experience/Experience';
import './Experiences.css';

const ExperienceData = [
    {   
        role: "Full Stack Developer",
        company_name: "aNumak and Company",
        employment_type: "Internship",
        start_date: "Jul 2021",
        end_date: "Oct 2021",
        location: "Bangalore Urban, Karnataka, India",
    },
    {   
        role: "Full Stack Developer",
        company_name: "Offeteria",
        employment_type: "Internship",
        start_date: "Jul 2021",
        end_date: "Oct 2021",
        location: "Bangalore Urban, Karnataka, India",
    },
    {   
        role: "Brand Ambassador",
        company_name: "Tutedude",
        employment_type: "Internship",
        start_date: "Jul 2021",
        end_date: "Aug 2021",
        location: "New Delhi, Delhi India",
    },
]

function Experiences() {
    return (
        <div id="experiences">
            <div className="experiencesHeader">
                <h1>My Experiences</h1>
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
