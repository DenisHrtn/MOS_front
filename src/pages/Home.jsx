import React, { useState, useEffect } from 'react';

const Home = () => {
    const text = 'Welcome to my portfolio';
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [showBorder, setShowBorder] = useState(true);
    const [activeQuestion, setActiveQuestion] = useState(null);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));

                setIndex((prevIndex) => {
                    const newIndex = prevIndex + 1;

                    if (newIndex === 11) {
                        setShowBorder(false);
                        setTimeout(() => {
                            setShowBorder(true);
                        }, 300);
                    }

                    return newIndex;
                });
            }, 150);

            return () => clearTimeout(timeout);
        }
    }, [index, text]);
    
    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

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

            <div className="all-facts">
                <div className='faq-answer_one'>
                    <button onClick={() => toggleQuestion(1)}>время потраченное на создание сайта</button>
                    {activeQuestion === 1 && <div className="faq-answer">на данный момент потраченно около полугода</div>}
                </div>
                <div className='faq-answer_two'>
                    <button onClick={() => toggleQuestion(2)}>история создания сайта</button>
                    {activeQuestion === 2 && <div className="faq-answer">изначально сайт создавался для школьного проекта однако со временем переписался под портфолио</div>}
                </div>
                <div className='faq-answer_three'>
                    <button onClick={() => toggleQuestion(3)}>cколько яблок я сел за жизнь</button>
                    {activeQuestion === 3 && <div className="faq-answer">я не знаю</div>}
                </div>
            </div>
        </div>
    );
};

export default Home;
