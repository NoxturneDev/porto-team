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
    <Container full custom="bg-hazel-brown-200"></Container>
  </MotionComp>
  <Container full custom="bg-hazel-brown-200">
    <Button type="primary" animation="fade-left">TEST</Button>
    <Button type="primary" animation="fade-left">TEST</Button>
    <Button type="primary" animation="fade-left">TEST</Button>
    <Button type="primary" animation="fade-left">TEST</Button>
  </Container>
  <Container full custom="bg-blue-400">
    <Card size="lg" custom='bg-nature-blue-100' animation="fade-left">
      <Button custom='bg-astro-dark-100'>Astro Dark</Button>
      <Button custom='bg-astro-dark-200'>Astro Dark</Button>
    </Card>
    <Card size="lg" custom='bg-astro-dark-200' animation="fade-up">
    <Button custom='bg-astro-purple-100'>Astro Purple</Button>
      <Button custom='bg-astro-purple-200'>Astro Purple</Button>
      <Button custom='bg-astro-purple-300'>Astro Purple</Button>
      
    </Card>
    <Card size="lg" custom='bg-astro-purple-300' animation="fade-bottom">
    <Button custom='bg-hazel-blue-100'>Hazel Blue</Button>
      <Button custom='bg-hazel-blue-200'>Hazel Blue</Button>
      <Button custom='bg-hazel-blue-300'>Hazel Blue</Button>
    </Card>
    <Card size="lg" custom='bg-nature-green-200' animation="fade-right">
    <Button custom='bg-nature-blue-200'>Natural Blue</Button>
      <Button custom='bg-nature-blue-100'>Natural Blue</Button>
    </Card>

    <Card size="lg" custom='bg-nature-yellow' animation="fade-right">
      <Button custom='bg-nature-green-100'>Nature Green</Button>
    <Button custom='bg-nature-green-200'>Nature Green</Button>
    </Card>
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