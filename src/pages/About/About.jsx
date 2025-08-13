import React, { useEffect, useState } from "react";
import { getAboutMe } from "../../api/about_me";

const About = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAboutMe()
            .then(data => setUserInfo(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div className={"about-container"}>
            <div className="profile-cart">
                <img src="/images/img.png" alt="Profile" className="profile-pic"/>
                <h1>{`${userInfo?.first_name} ${userInfo?.last_name}`.trim() || "Test Some"}</h1>
                <p className="tagline">{userInfo.developer_title || "Alien"}</p>

                <div className="info-grid">
                    <div className="info-item"><span>Birthday: </span><p>{userInfo?.date_of_birth}</p></div>
                    <div className="info-item"><span>Gender: </span><p>{userInfo?.gender}</p></div>
                    <div className="info-item"><span>Country: </span><p>{userInfo?.country}</p></div>
                    <div className="info-item"><span>Native language: </span><p>{userInfo?.native_language}</p></div>
                    <div className="info-item"><span>Second language: </span><p>{userInfo?.secondary_language}</p></div>
                </div>

                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        {userInfo?.skills?.length
                            ? userInfo.skills.map((skill, idx) => <li key={idx}>{skill}</li>)
                            : <li>No skills listed</li>
                        }
                    </ul>
                </div>

                <div className="experience">
                    <h3>Experience</h3>
                    {userInfo.experience?.length
                        ? userInfo.experience.map((exp, idx) => <p key={idx}>{exp}</p>)
                        : <p>No experience listed</p>
                    }
                </div>
            </div>
        </div>
    )
};

export default About;