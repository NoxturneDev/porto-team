import React from "react";
import { Container } from "../components/Container";
import Nav from "../components/Nav";
// import ParticleAnimation from "../animation/ParticleAnimation";
import Paragraph from "../components/Paragraph";
import Carousel from "../components/caraousel/Caraousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div style={{ overflowX: "hidden" }} className="relative">
      <Nav />
      {/* <div className='flex bg-gray-900 items-center w-screen h-screen'>
          <h3 className='' >About Page</h3>
          <Container custom='bg-gray-900' >
          </Container>
        </div> */}
      <Container custom="bg-astro-purple-300 w-full h-[200vh]" dir="column" full particle>
        {/* <ParticleAnimation /> */}
        <Header headerSize="lg" customClass="mb-5">
          ABOUT US
        </Header>

        <div className="bg-astro-dark-100 mt-7 mb-28   w-4/6 h-2/5"></div>
        <Paragraph
          custom="text-zinc-200 mt-28 pt-36 text-size"
          align="center"
          animation="fade-up"
        >
          Hi! HalloWeb is Digital Service Agency<br /> We can Handle all of your Problem and request for building
          an Web Design, Web Aplication, and UI UX Design, in HalloWeb we offer the best experience and service<br>
          </br>
          With fastest work and Responsibilites About the Project, So Let's Order to HALLOWEB!
        </Paragraph>
      </Container>

      <Carousel />
      <Footer />
    </div>
  );
}

export default About;
