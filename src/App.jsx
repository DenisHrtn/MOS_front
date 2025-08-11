import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import FAQPage from "./pages/FAQPage/FAQPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioProject from "./pages/PortfolioProject/PortfolioProject";
import Footer from "./ components/Footer/Footer";
import Header from "./ components/Header/Header";
import NotFound from "./ components/NotFound/NotFound";
import "./ components/FAQ/faq.css";
import "./global.css";
import "./ components/Header/header.css";
import "./ components/Footer/footer.css";
import "./ components/TimeLine/timeLine.css"
import "./pages/Home/home.css";
import "./pages/About/about.css";
import "./pages/Contacts/contacts.css";
import "./pages/Portfolio/portfolio.css";
import "./pages/PortfolioProject/portfolioProject.css";
import "./pages/FAQPage/FAQPage.css"
import "./ components/NotFound/notFound.css"

const App = () => {
  return (
      <Router>
        <div className="app-container">
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/portfolio/project/:id" element={<PortfolioProject />} />
              <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;