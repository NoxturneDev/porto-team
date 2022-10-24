import React from "react";
import { Section } from '../../components/layout/Container'
import AboutDetail from "./AboutDetail";

function About() {
  return (
    <div style={{ overflowX: "hidden" }} className="relative">
      <Section customClass="bg-radial-dark" direction="column" align="left">
        <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
        <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
        <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
      </Section>
    </div>
  );
}

export default About;
