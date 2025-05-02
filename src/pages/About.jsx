import React from "react";

const About = () => {

    return (
        <div className={about-container}>
            <div className="profile-cart">
                <img src="/images/img.png" alt="Profile" className="profile-pic" />
                <h1>David Antropov</h1>
                <p className="tagline">Back-end developer | Kickboxer</p>

                <div className="info-grid">
                    <div className="info-item"><span>Age: </span><p>16</p></div>
                    <div className="info-item"><span>Birthday: </span><p>24/01/2009</p></div>
                    <div className="info-item"><span>Gender: </span><p>Male</p></div>
                    <div className="info-item"><span>Address: </span><p>Agtrupvej 40</p></div>
                    <div className="info-item"><span>Hobby: </span><p>Kickboxing</p></div>
                    <div className="info-item"><span>Native language: </span><p>Russian</p></div>
                    <div className="info-item"><span>Second language: </span><p>Ukrainian</p></div>
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