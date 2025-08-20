import React, { useEffect, useState } from "react";
import {FaEnvelope, FaGithub, FaLinkedin, FaDiscord} from "react-icons/fa"
import { getContacts } from "../../api/contacts";

const Contacts = () => {
    const [contacts, setContacts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getContacts()
            .then(data => setContacts(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    console.log(getContacts)

    return (
        <div className="contacts">
            <h1 className="title">Let's Connect! 🚀</h1>
            <div className="contact-list">
                <div className="contact-item">
                    <FaEnvelope className="icon" style={{ color: "red" }}/>
                    <p><a href={contacts?.gmail}>{contacts?.gmail}</a></p>
                </div>
                <div className="contact-item">
                    <FaDiscord className="icon" style={{ color: "blue" }}/>
                    <p>{contacts?.discord}</p>
                </div>  
                <div className="contact-item">
                    <FaGithub className="icon" style={{ color: "black" }}/>
                    <p><a href={contacts?.git} target="_blank" rel="noopener noreferrer">{contacts?.git}</a></p>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="icon" style={{ color: "blue" }}/>
                    <p><a href={contacts?.linkedin} target="_blank" rel="noopener noreferrer">{contacts?.git}</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;