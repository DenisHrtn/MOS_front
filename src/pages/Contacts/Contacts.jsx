import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin, FaDiscord} from "react-icons/fa"

const Contacts = () => {
    return (
        <div className="contacts">
            <h1 className="title">Let's Connect! 🚀</h1>
            <div className="contact-list">
                <div className="contact-item">
                    <FaEnvelope className="icon" style={{ color: "red" }}/>
                    <p><a href="mailto:antropovdavid85@gmail.com">antropovdavid85@gmail.com</a></p>
                </div>
                <div className="contact-item">
                    <FaDiscord className="icon" style={{ color: "blue" }}/>
                    <p>Username: P.E.R.O.G</p>
                </div>
                <div className="contact-item">
                    <FaGithub className="icon" style={{ color: "black" }}/>
                    <p><a href="https://github.com/perogis" target="_blank" rel="noopener noreferrer">Github</a></p>
                </div>

                <div className="contact-item">
                    <FaLinkedin className="icon" style={{ color: "blue" }}/>
                    <p><a href="https://www.linkedin.com/in/david-antropov-54b2262a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;