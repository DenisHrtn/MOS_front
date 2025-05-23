import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css"
import "./styles/about.css"
import "./styles/contacts.css"
import "./styles/projects.css"
import "./styles/projectDetails.css"
import { ThemeContext } from "./ThemeContext";

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


const Footer = () => (
    <footer className="footer">
      <p>2025 My Own Site. All Rights Reserved.</p>
    </footer>
);

const App = () => {
  return (
      <Router>
        <div className="app-container">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;