import React from "react";
import { Section, Wrapper, Container } from "../../components/layout/Container";
import Line from "../../components/Line";
import Nav from "../../components/Nav";
import Sphere from "../../components/Sphere";
import thumbnailImg from '../../assets/img/thumbnail_project.png';
import Text from "../../components/Text";

const ProjectDetail = () => {
  return (
    <div className="bg-radial-dark overflow-x-hidden">
      <Nav />
      <Wrapper direction="column" customClass="bg-radial-dark w-screen py-10 min-h-max  ">
        <Line>DETAIL</Line>
        <h1 style={{ letterSpacing: '0.57em' }} className="text-font-200 header text-6xl mb-18 ">MENFESS KUY</h1>
        <Container customClass="bg-radial-dark mt-12" direction="column">
          <Wrapper customClass="w-screen mt-20  h-3/4" align="center">
            <Wrapper direction="row" customClass="w-max h-full " align="center">
              <Wrapper direction="column" customClass='w-1/3 mx-20' align="left">
                <h3 className="text-gray-600 my-5">Menfesskuy.com</h3>
                <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Molestias quibusdam quisquam nihil consectetur, reprehenderit facere laborum, ad itaque
                  dolores nemo molestiae. Ratione veritatis unde odit ipsum aspernatur minima eum est.</p>
                <h3 className="text-gray-500 my-16">Developer - Galih Adhi Kusuma</h3>
              </Wrapper>
              <Wrapper customClass="ml-16 " direction="column" align="right">
                <Sphere pink />
              </Wrapper>0
            </Wrapper>
          </Wrapper>
          {/* Thumbnail img */}
          <Wrapper customClass="mt-20 h-[125vh]" align="center">
            <div className="w-full h-full overflow-hidden">
              <img src={thumbnailImg} width='900' alt='thumbnaiil_project' />
            </div>
          </Wrapper>
          {/* Desc */}
          <Wrapper customClass="h-3/4 mt-20 px-8 w-screen " direction="column" align="center">
            <Wrapper align='left' customClass=" border-b-4 border-pink-600 w-full">
              {/* <div className="w-screen  border-b-8 border-indigo-500 "> */}
              <Text textSize='md'>
                <p className="ml-6 mb-3  text-pink-600 ">Detailed Information</p>
              </Text>
              {/* </div> */}
            </Wrapper>
            <Wrapper align="top" customClass="w-full mt-10" direction="row" >
              <Wrapper align='left' customClass=" w-full">
                <Text textSize='md' customClass="font-medium text-font-200">
                  <a href="/"> Menfesskuy.vercel.com</a>
                </Text>
              </Wrapper>
              <Wrapper align='left' direction="column" customClass=" w-full">
                <p className="text-pink-800 mb-8 font-satoshi  ">Description</p>
                <p className="text-gray-400 font-satoshi" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit corporis deserunt nam accusamus quo itaque voluptas ipsa placeat rem vitae!</p>
                <p className="text-gray-400 mt-8 font-satoshi" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit corporis deserunt nam accusamus quo itaque voluptas ipsa placeat rem vitae!</p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </div>
  )
}

export default ProjectDetail;

// import React from "react";
// import Line from "../../components/Line";
// import { Section, Wrapper, Container } from "../../components/layout/Container";
// import Header from '../../components/Header'

// function Introduction() {
// return (
// <Section direction="column" customClass="bg-radial-dark w-full h-screen pl-20">
  // <Line>INTRODUCTION</Line>
  // <Container direction="column" full>
    // <Wrapper customClass="w-screen px-8 h-2/4" align="left">
      // <Wrapper direction="column" customClass="w-max h-full" align="left">
        // <h1 className="text-font-200 header text-6xl my-2 tracking-widest"> WE ARE <span className="text-pink-600">
            // HELLOWEB </span> </h1>
        // <h1 className="text-font-200 header text-6xl my-2 tracking-widest"> COMPONENTS </h1>
        // <h1 className="text-font-200 header text-6xl my-2 tracking-widest"> PERSISTENT </h1>
        // </Wrapper>
      // </Wrapper>
    // </Container>
  // </Section>
// );
// }

// export default Introduction;