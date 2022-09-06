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
      <Container custom="bg-gray-900 w-full h-[200vh]" dir="column" full>
        <h2 className="text-zinc-200 mb-5 font-semibold header-size tracking-widest font-cabinet">
          About Us
        </h2>

        <div className="bg-slate-700 mt-7 mb-28   w-4/6 h-2/5"></div>
        <Paragraph
          custom="text-zinc-200 mt-28 pt-9 font-satoshi text-size"
          align="center"
        >
          Lorem Lorem ipsum dolor sit amet <br /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores a porro eius ducimus deleniti
          officia corporis cumque possimus id consequatur similique nesciunt
          nulla labore beatae, qui iure asperiores totam minima excepturi autem
          atque delectus nihil ratione? Fugit, possimus. Dolor fugiat quaerat
          reprehenderit dolore laborum ipsam labore temporibus, rerum animi
          aliquam!
        </Paragraph>
      </Container>

      <Carousel />
      <Footer />
    </div>
  );
}

export default About;
