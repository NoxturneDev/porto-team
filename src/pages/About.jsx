import React from "react";
import { Container } from "../components/Container";
import Nav from "../components/Nav";

import Paragraph from "../components/Paragraph";
import Carousel from "../components/caraousel/Caraousel";
import Footer from "../components/Footer";

function About() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Nav />
      {/* <div className='flex bg-gray-900 items-center w-screen h-screen'>
          <h3 className='' >About Page</h3>
          <Container custom='bg-gray-900' >
          </Container>
        </div> */}
      <Container   custom="bg-astro-purple-300 w-full h-[200vh]" dir="column" full>
        <h1 className="text-zinc-200 mb-5 font-semibold header-md header-size tracking-widest font-cabinet ">
          About Us
        </h1>

        <div className="bg-astro-dark-100 mt-7 mb-28   w-4/6 h-2/5"></div>
        <Paragraph
          custom="text-zinc-200 mt-28 pt-36 font-satoshi  text-size"
          align="center"
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
