import React from "react";
import { Container } from "./Container";
import Paragraph from "./Paragraph";

const Footer = () => {


    return(
        <>
           <Container custom='border-t-2 border-zinc-200   w-full h-40
            bg-gray-900' align='center' >
              <Paragraph align='center' custom='text-zinc-200 font-bold' >
              Lorem Lorem ipsum dolor sit amet,
              <br/>
       consectetur adipiscing elit,
              </Paragraph>
           </Container>
        </>
    )
}

export default Footer;