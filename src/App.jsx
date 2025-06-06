import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home_page";
import Services from "./pages/Service_page";
import About_us from "./pages/About_us";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import ContactPage from "./pages/Contact_us"
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About_us" element={<About_us/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        
      </Routes>
      <Footer/>
      <TopButton/>
    </Router>
    
  );
};

export default App;
