import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Footer from "./ components/Footer/Footer";
import Header from "./ components/Header/Header";
import "./ components/FAQ/faq.css";
import "./global.css";
import "./ components/Header/header.css";
import "./ components/Footer/footer.css";
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Contacts/contacts.css";
import "./pages/Projects/projects.css";
import "./pages/ProjectDetails/projectDetails.css";

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
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;