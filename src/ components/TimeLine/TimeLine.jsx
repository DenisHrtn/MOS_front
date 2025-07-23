import React, { useState } from "react";
import "./timeLine.css";

const TimeLine = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleClick = (periodName) => {
        setModalContent(periodName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='time-line'>
            <div className='main-line'>
                <div className='first-period' onClick={() => handleClick("First period information")}></div>
                <div className='second-period' onClick={() => handleClick("second period information")}></div>
                <div className='third-period' onClick={() => handleClick("third period information")}></div>
                <div className='fourth-period' onClick={() => handleClick("fourth period information")}></div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                        <h2>{modalContent}</h2>
                        <button className="close-button" onClick={closeModal}>close window</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimeLine;