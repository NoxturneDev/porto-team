import React, { useEffect } from "react";
import luxy from 'luxy.js';
import Nav from '../../components/Nav'
import AboutSection from "./AboutSection";
import Introduction from './Introduction'
import Jumbotron from "./Jumbotron";
import ProjectShowcase from "./ProjectShowcase";
import Services from "./Services";
// import useSmoothScroll from "../../hooks/useSmoothScroll";

function LandingPage() {
  const init = () => {
    luxy.init()

    luxy.settings.wrapperSpeed = 0.02
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div id="luxy" style={{ overflowX: 'hidden' }} className="bg-dark-300">
      <Nav />
      <Jumbotron />
      <Introduction />
      <ProjectShowcase />
      <AboutSection />
      <Services />
    </div>
  );
}

export default LandingPage;