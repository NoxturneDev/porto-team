import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Text from "./Text";
import { Wrapper } from "./Container";

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const nav = useRef(null)


  const scrollDetect = () => {
    if (window.scrollY > nav.current.offsetHeight + 100) {
      setScrolled(true)
      return
    } else {
      setScrolled(false)
      return
    }
  }


  const animateOnScroll = (condition) => {
    gsap.set(nav.current, {
      position: 'static',
      y: 0
    })

    if (condition) {
      gsap.fromTo(nav.current, {
        opacity: 0,
        y: -50,
      }, {
        opacity: 1,
        y: 0,
        position: 'fixed',
        x:0
      })
    }
  }

  useEffect(() => {
    animateOnScroll(scrolled)
    window.addEventListener('scroll', scrollDetect)

    return () => {
      window.removeEventListener('scroll', scrollDetect)
    }
  })



  return (
    <div ref={nav} className="bg-astro-dark-100 z-20 mb-10">
      <Wrapper custom={`${scrolled ? 'right-0 top-0 left-0 shadow-md' : ''} flex w-max-screen h-16 px-6 py-5 text-size`}>
        <div className="flex w-screen  justify-center items-center px-14 ">
          <div className=" grow p-4 text-white">
            <Text textSize="md" customClass="header">HELLOWEB</Text>
          </div>
          <ul className="container-flex h-14 text-slate-300 ">
            <li className="m-8">
              <Text textSize="sm" customClass="tracking-widest ">
                <Link to="/">Home</Link>
              </Text>
            </li>
            <li className="m-8">
              <Text textSize="sm" customClass="tracking-widest ">
                <Link to="/project">Project</Link>
              </Text>
            </li>
            <li className="m-8">
              <Text textSize="sm" customClass="tracking-widest ">
                <Link to="/about">About</Link>
              </Text>
            </li>
            <li className="m-8  font-satoshi tracking-widest hover:text-white duration-200 transition">
              <Text textSize="sm" customClass="tracking-widest ">
                Contact us
              </Text>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}

export default Nav;
