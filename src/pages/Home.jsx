import React, { useState, useEffect } from 'react';

const Home = () => {
    const text = 'Welcome to my portfolio';
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [doneTyping, setDoneTyping] = useState(false);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, 200);
        } else {
            setDoneTyping(true);
        }
    }, [index, text]);

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div className="home-container">
            <h1 className={`typing-text ${doneTyping ? 'blink-border' : ''}`}>{displayedText}</h1>
            <p className="fade-in">
                This site was created as a portfolio for David Antropov. The site allows you to choose a service and order it.
            </p>
            <p className="fade-in delay-1">
                This site was written using the following programming languages: JavaScript, Python. and contains information about David Antropov.
            </p>

            <div className="all-facts">
                <button onClick={() => toggleQuestion(1)}>время потраченное на создание сайта</button>
                {activeQuestion === 1 && <div className="faq-answer">на данный момент потраченно около полугода</div>}

                <button onClick={() => toggleQuestion(2)}>история создания сайта</button>
                {activeQuestion === 2 && <div className="faq-answer">изначально сайт создавался для школьного проекта однако со временем переписался под портфолио</div>}

                <button onClick={() => toggleQuestion(3)}>Создатели сайта</button>
                {activeQuestion === 3 && <div className="faq-answer">Денис Харитончик, Давид Антропов</div>}
            </div>
        </div>
    );
};

export default Home;
