import React, { useEffect } from "react";
import Nav from '../../components/Nav'
import AboutSection from "./AboutSection";
import Introduction from './Introduction'
import Jumbotron from "./Jumbotron";
import ProjectShowcase from "./ProjectShowcase";
import Services from "./Services";

function LandingPage() {
  return (
    <div id="luxy" style={{ overflowX: 'hidden' }} >
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