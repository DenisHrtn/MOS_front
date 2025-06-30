import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ThemeContext} from "../ThemeContext";

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
    <header className="header">
      <div className="ADlink">
        <Link to="/">A.D.</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/projects">Projects</Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
