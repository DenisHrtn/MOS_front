import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-4 bg-blue-500 text-white">
            <h1 className="text-2x1">My portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link tp="/contacts">Contacts</Link></li>
                    <li><Link tp="/projects">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
