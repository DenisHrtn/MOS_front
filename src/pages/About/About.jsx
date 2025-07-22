import React from "react";

const About = () => {
    return (
        <div className={"about-container"}>
            <div className="profile-cart">
                <img src="/images/img.png" alt="Profile" className="profile-pic" />
                <h1>Test Some</h1>
                <p className="tagline">Alien</p>

                <div className="info-grid">
                    <div className="info-item"><span>Birthday: </span><p>00 Jan</p></div>
                    <div className="info-item"><span>Gender: </span><p>Male</p></div>
                    <div className="info-item"><span>Country: </span><p>Moon</p></div>
                    <div className="info-item"><span>Native language: </span><p>Something</p></div>
                    <div className="info-item"><span>Second language: </span><p>Something</p></div>
                </div>

                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>React & JS</li>
                        <li>Python & Django</li>
                        <li>Docker & Containers</li>
                    </ul>
                </div>

                <div className="experience">
                    <h3>Experience</h3>
                    <p>Backed developer - 1 year</p>
                    <p>Freelance - 5+ products</p>
                </div>
            </div>
        </div>
    )
};

export default About;