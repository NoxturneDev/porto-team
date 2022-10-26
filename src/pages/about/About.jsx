import React from "react";
import { Wrapper } from '../../components/layout/Container'
import AboutDetail from "./AboutDetail";
import Line from "../../components/Line"
import Nav from "../../components/Nav"

function About() {
  return (
    <div style={{ overflowX: "hidden" }} className="relative bg-radial-dark">
      <Nav />
      <Line>ABOUT</Line>
      <Wrapper customClass="w-full min-h-screen max-h-max bg-radial-dark pt-10" direction="column" align="left">
        <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
        <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
        <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
      </Wrapper>
    </div>
  );
}

export default About;
