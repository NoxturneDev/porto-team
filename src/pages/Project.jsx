import { Container } from "../components/Container";
import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <Nav />
      <Container custom="" full={true} dir="column" align="top">
        <div className="" full={true}>
          <div className="font-bold text-4xl tracking-wider text-center ">
            <h1 className="tracking-[.25em]">PROJECTKU</h1>
          </div>
          <Container custom="pl-60" align="left" full={true}>
            <Container custom=" shadow-2xl h-3/4 mr-4"></Container>
            <Container
              custom="w-100 h-3/4 translate-x-[-17rem] bg-slate-500"
              dir="column"
            >
              <Container custom="h-4/4" dir="column" align="left">
                <h2 className="font-bold text-4xl text-yellow-50 ">
                  LOREM ANJAY SLEBEW
                </h2>
                <p className="font-medium text-2xl my-2 text-yellow-100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, magni.
                </p>
                <Container
                  align="left"
                  custom="font-bold text-3xl text-yellow-100"
                >
                  <Link to="/">View Project</Link>
                </Container>
                <p className="font-medium text-lg text-yellow-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Enim, suscipit.
                </p>
              </Container>
            </Container>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default Project;
