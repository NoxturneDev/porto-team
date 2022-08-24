import { Container } from "../components/Container";
import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <Nav />
      <Container custom="" full={true} type="col-top">
        <div className="" full={true}>
          <div className="font-bold text-4xl tracking-wider text-center">
            <h1>PROJECTKU</h1>
          </div>
          <Container custom="bg-red-400" type="left" full={true}>
            <Container
              custom="bg-yellow-200 shadow-2xl h-3/4"
              type="center"
            ></Container>
            <Container custom="" type=" col-top">
              <Container className="font-bold">
                <h2>LOREM ANJAY SLEBEW</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, magni.
                </p>
                <Container>
                  <Link to="/">View Project</Link>
                </Container>
                <p>
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
