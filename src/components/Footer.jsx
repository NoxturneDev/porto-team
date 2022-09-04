import React from "react";
import { Wrapper } from "./Container";
import Paragraph from "./Paragraph";

const Footer = () => {
    return (
        <>
            <Wrapper custom='h-28 bg-astro-dark-100' align='center' >
                <Paragraph align='center' custom='text-white tracking-wider' size="sm">
                    Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit,
                </Paragraph>
            </Wrapper>
        </>
    )
}

export default Footer;