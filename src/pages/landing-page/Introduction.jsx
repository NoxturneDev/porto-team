import React from "react";
import Line from "../../components/Line";
import { Section, Wrapper, Container } from "../../components/layout/Container";
import Header from '../../components/Header'

function Introduction() {
  return (
    <Section customClass="bg-radial-dark w-full h-screen">
      <Container direction="column" full >
        <Wrapper customClass="w-screen px-8 h-2/4" align="left">
          <Wrapper direction="column" customClass="w-max h-full" align="left">
            <h1 className="text-font-200 header text-6xl my-2"> WE ARE <span className="text-pink-600"> HELLOWEB </span> </h1>
            <h1 className="text-font-200 header text-6xl my-2"> COMPONENTS </h1>
            <h1 className="text-font-200 header text-6xl my-2"> PERSISTENT </h1>
          </Wrapper>
        </Wrapper>
      </Container>
    </Section>
  );
}

export default Introduction;
