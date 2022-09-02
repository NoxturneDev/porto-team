import React from "react";
import { Wrapper } from "./Container";
import Paragraph from "./Paragraph";

const Footer = () => {
    return (
        <>
            <Wrapper custom='border-zinc-200 h-36 bg-gray-900' align='center' >
                <Paragraph align='center' custom='text-zinc-200 font-bold' >
                    Lorem Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit,
                </Paragraph>
            </Wrapper>
        </>
    )
}

export default Footer;