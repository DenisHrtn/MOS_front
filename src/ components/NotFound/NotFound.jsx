import React from "react";
import { useParams, Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="texts">
            <img src="/images/cross.png" alt="Profile" className="picture" />
            <h1>404</h1>
            <p>Такой страницы не существует.</p>
            <p>страница не найдена</p>
            <Link to="/" className="back-button">назад</Link>
        </div>
    );
}   

export default NotFound;
