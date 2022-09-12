import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Container, Wrapper } from "./Container";
import Text from "./Text";
import Header from "./Header";
import Sphere from "./Sphere";
import { Toggle } from "./ui/Icon";

function Nav() {
  const [title, setTitle] = useState('Home')

  const changeTitle = (e) => {
    console.log(e.target)
    setTitle(e.target.innerText)
  }
  return (
    <div style={{
      background: 'radial-gradient(circle, #DB0F97, #C20C86)'
    }}>
      <Wrapper custom="px-10">
        <Toggle w="22px" h="22px" />
        <ul className="flex justify-center items-center color-white h-14 font-semibold text-dark-300 uppercase grow">
          <li className="m-8 font-satoshi tracking-widest duration-200 transition"
          onMouseEnter={changeTitle}>
            <Text customClass="text-dark-300">
              <Link to="/">Home</Link>
            </Text>
          </li>
          <li className="m-8  font-satoshi tracking-widest  duration-200 transition" 
          onMouseEnter={changeTitle}>
            <Text customClass="text-dark-300">
              <Link to="/about">About</Link>
            </Text>
          </li>
          <li className="m-8  font-satoshi tracking-widest duration-200 transition"
          onMouseEnter={changeTitle}>
            <Text customClass="text-dark-300">
              <Link to="/project">Project</Link>
            </Text>
          </li>
          <li className="m-8  font-satoshi tracking-widest duration-200 transition"
          onMouseEnter={changeTitle}>
            <Text customClass="text-dark-300">
              <Link to="/contact">Contact us</Link>
            </Text>
          </li>
        </ul>
        <Header headerSize="sm" customClass="text-dark-300">
          ABOUT
        </Header>
      </Wrapper>
      <Container full align="top" custom="pt-20">
        <Sphere customClass="container-flex text-center">
          <Header headerSize="lg" customClass="tracking-[5rem]">
            {title}
          </Header>
        </Sphere>
      </Container>
    </div >
  );
}

export default Nav;
