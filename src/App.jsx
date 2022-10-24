import React from "react";
import "./css/index.css";
import About from "./pages/about/About";
import LandingPage from "./pages/landing-page/LandingPage";
import Project from "./pages/project/Project";
import Projectdetail from './pages/project/ProjectDetail';
// import Contact from "./pages/contact/Contact";
import ContactForm from "./pages/contact/ContactForm";
import Demo from "./pages/Demo";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/detail" element={<Projectdetail/>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
