import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./ components/Footer";
import Header from "./ components/Header";
import "./styles/faq.css";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css"
import "./styles/about.css"
import "./styles/contacts.css"
import "./styles/projects.css"
import "./styles/projectDetails.css"

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