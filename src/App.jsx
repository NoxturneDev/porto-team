import React from "react";
import "./css/index.css";
import About from "./pages/about/About";
import LandingPage from "./pages/landing-page/LandingPage";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
