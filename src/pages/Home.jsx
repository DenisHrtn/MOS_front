import React, { useState, useEffect } from "react";

const Home = () => {
    const text = 'Welcome to my portfolio';
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
            <p className="fade-in">This site was created as a portfolio for David Antropov.
                The site allows you to choose a service and order it.
            </p>
            <p className="fade-in delay-1">
                This site was written using the following programming languages: JavaScript, Python.
                and contains information about David Antropov.
            </p>
        </div>
    );
};

export default Home;