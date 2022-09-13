import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Container, Wrapper } from "./Container";
import Text from "./Text";
import Header from "./Header";
import Sphere from "./Sphere";
import { Toggle } from "./ui/Icon";

function Nav() {
  const [title, setTitle] = useState('HOME')
  const [opened, setOpen] = useState(false)
  const header = useRef(null)
  const navFull = useRef(null)

  const changeTitle = (e) => {

    if (title !== e.target.innerText) {
      gsap.fromTo(header.current, {
        opacity: 0
      }, {
        opacity: 1
      })
    }

    setTitle(e.target.innerText)
  }

  const toggleNav = () => {

    if (!opened) {
      gsap.to(navFull.current, {
        xPercent: 0
      })
      setOpen(true)
    } else {
      gsap.to(navFull.current, {
        xPercent: -100
      })
      setOpen(false)
    }
  }

  useEffect(() => {

    gsap.set(navFull.current, {
      xPercent: -100
    })

  }, [])

  return (
    <>
      <div onClick={toggleNav} className="fixed z-20 left-5 top-5 mr-10">
        <Toggle w="22px" h="22px" color="#C20C86" />
      </div>

      <div ref={navFull} style={{
        background: 'radial-gradient(circle, #161616, #111111)'
      }}
      className="fixed"
      >
        <Wrapper custom="px-10">
          <ul className="container-flex color-white h-14 font-semibold text-font-200 uppercase grow">
            <li className="p-8 font-satoshi tracking-widest duration-200 transition hover:text-main-100 hover:bg-dark-300"
              onMouseEnter={changeTitle}>
              <Text >
                <Link to="/">Home</Link>
              </Text>
            </li>
            <li className="p-8  font-satoshi tracking-widest  duration-200 transition hover:text-main-100 hover:bg-dark-300"
              onMouseEnter={changeTitle}>
              <Text >
                <Link to="/about">About</Link>
              </Text>
            </li>
            <li className="p-8  font-satoshi tracking-widest duration-200 transition hover:text-main-100 hover:bg-dark-300"
              onMouseEnter={changeTitle}>
              <Text >
                <Link to="/project">Project</Link>
              </Text>
            </li>
            <li className="p-8  font-satoshi tracking-widest duration-200 transition hover:text-main-100 hover:bg-dark-300"
              onMouseEnter={changeTitle}>
              <Text >
                <Link to="/contact">Contact us</Link>
              </Text>
            </li>
          </ul>
          <Header headerSize="sm" customClass="text-font-200 tracking-widest">
            HELLOWEB
          </Header>
        </Wrapper>
        <Container full align="top" custom="pt-20">
          <Sphere customClass="container-flex text-center">
            <div ref={header}>
              <Header headerSize="lg" customClass="tracking-[5rem] text-font-200" >
                <Link to={`/${title.toLowerCase()}`}>{title}</Link>
              </Header>
            </div>
          </Sphere>
        </Container>
      </div >
    </>
  );
}

export default Nav;
