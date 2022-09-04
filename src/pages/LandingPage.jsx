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

function LandingPage() {
return (
<div style={{ overflowX: 'hidden' }}>
  <Nav />
  <JumbotronAnim />
  <Caraousel></Caraousel>
  <Footer />
</div>
);
}

export default LandingPage;