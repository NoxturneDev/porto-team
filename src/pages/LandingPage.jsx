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
      <MotionComp animation="fade-left" transition={{ type: 'tween', speed: 'fast' }}>
        <Container full custom="bg-red-500"></Container>
      </MotionComp>
      <Container full custom="bg-blue-500">
        <Button type="primary" animation="fade-left">TEST</Button>
        <Button type="primary" animation="fade-left">TEST</Button>
        <Button type="primary" animation="fade-left">TEST</Button>
        <Button type="primary" animation="fade-left">TEST</Button>
      </Container>
      <Container full custom="bg-blue-400">
        <Card size="sm" animation="fade-left">TEST</Card>
        <Card size="md" animation="fade-up">TEST</Card>
        <Card size="md" animation="fade-bottom">TEST</Card>
        <Card size="lg" animation="fade-right">TEST</Card>
      </Container>
      <Container full custom="bg-blue-600" dir="column">
          <Image url="../assets/23.png" size="md" type="circle" />
          <Image url="../assets/23.png" size="sm" type="rounded" />
          <Image url="../assets/23.png" size="md" type="basic" />
      </Container>
      <Footer />
    </div>
  );
}

export default LandingPage;
