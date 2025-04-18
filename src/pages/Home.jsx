import React, { useState, useEffect } from "react";

const Home = () => {
    const text = 'Welcome to My Own Project';
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <div className="home-container">
            <h1 className="typing-text">{displayedText}</h1>
            <p className="fade-in">This is a demo project to showcase my skills and project</p>
            <p className="fade-in delay-1">This site was created for the school presentation of David Antropov
                and cannot be used for any other purposes.
            </p>
            <p className="fade-in delay-2">
                This site was written using the following programming languages: JavaScript, Python.
                and contains information about David Antropov.
            </p>
        </div>
    );
};

export default Home;