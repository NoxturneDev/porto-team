import React from "react";
import Nav from "../components/Nav";
import { Container } from "../components/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Cards"
import Image from "../components/ui/Image";
import Caraousel from "../components/caraousel/Caraousel";
import Section from "../components/Section";
import MotionComp from "../animation/Motion";
import JumbotronAnim from "../animation/JumbotronAnim";
import Footer from "../components/Footer";
import ParticleAnimation from "../animation/ParticleAnimation";
import Contact from "./Contact";

function LandingPage() {
  return (
    <div style={{ overflowX: 'hidden' }} className="bg-astro-dark-100">
      <Nav />
      <JumbotronAnim />
      <Caraousel></Caraousel>
      <Footer />
      <Contact />
    </div>
  );
}

export default LandingPage;