import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin, FaDiscord} from "react-icons/fa"

const Contacts = () => {
    return (
        <div className="contacts">
            <h1 className="title">Let's Connect! 🚀</h1>
            <div className="contact-list">
                <div className="contact-item">
                    <FaEnvelope className="icon" style={{ color: "red" }}/>
                    <p><a href="test@gmail.com">test@gmail.com</a></p>
                </div>
                <div className="contact-item">
                    <FaDiscord className="icon" style={{ color: "blue" }}/>
                    <p>Username: TEST</p>
                </div>
                <div className="contact-item">
                    <FaGithub className="icon" style={{ color: "black" }}/>
                    <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a></p>
                </div>

                <div className="contact-item">
                    <FaLinkedin className="icon" style={{ color: "blue" }}/>
                    <p><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;