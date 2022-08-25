import React from "react";
import Nav from "../components/Nav";
import { Container } from "../components/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Cards"
import Image from "../components/ui/Image";
import Classes from "../components/classes";

function LandingPage() {
  return (
    <>
      <Nav />
      <Container custom="bg-slate-500 h-screen" align="left" full={true} dir='column'>
        <Image url="../assets/23.png" type="circle" custom="bg-slate-800" size="sm" animate="true"></Image>
        <Image url="../assets/23.png" type="basic" custom="bg-slate-800" size="sm"></Image>
        <Image url="../assets/23.png" type="basic" custom="bg-slate-800" size="sm"></Image>
        <Image url="../assets/23.png" type="circle" custom="bg-slate-800" size="sm"></Image>
      </Container>
      <Container dir="column" align="left">
        <Card></Card>
        <Card></Card>
      </Container>
    </>
  );
}

export default LandingPage;
