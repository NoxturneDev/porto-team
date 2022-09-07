import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import { Wrapper } from "./Container";
import gsap from "gsap";

function Nav() {
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const nav = useRef(null)

  const showModal = () => {
    if (modal == false) {
      setModal(true);
    }
  };

  const scrollDetect = () => {
    if (window.scrollY > nav.current.offsetHeight) {
      setScrolled(true)
      return
    } else {
      setScrolled(false)
      return
    }
  }


  const animateOnScroll = (condition) => {
    if (condition) {
      gsap.fromTo(nav.current, {
        opacity: 0,
        y: -50,
        position: 'static'
      }, {
        opacity: 1,
        y: 0,
        position: 'fixed'
      })
    } else {
      gsap.fromTo(nav.current, {
        y: 50
      }, {
        y: 0,
        position: 'static',
        duration: 0.2
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
    <div ref={nav} className="bg-astro-dark-100 z-20 ">
      <Wrapper custom={`${scrolled ? 'right-0 top-0' : 'left-0'} flex w-screen h-16 px-6 py-5 text-size`}>
        <div className="flex w-screen  justify-center items-center px-14 ">
          <div className="grow p-4 text-gray-50 text-3xl font-bold font-generalsans tracking-widest">
            <h2>HELLOWEB</h2>
          </div>
          <ul className="flex justify-center items-center color-white h-14 font-semibold text-slate-300 uppercase">
            <li className="m-8 font-satoshi tracking-widest hover:text-white duration-200 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="m-8  font-satoshi tracking-widest hover:text-white duration-200 transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="m-8  font-satoshi tracking-widest hover:text-white duration-200 transition">
              <Link to="/project">Projects</Link>
            </li>
            <li className="m-8  font-satoshi tracking-widest bg-blue-500 hover:bg-blue-400 hover:text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
              <h2 onClick={showModal} className="cursor-pointer">
                Contact
              </h2>
            </li>
          </ul>
        </div>
      </Wrapper>
      <Contact visible={modal}></Contact>
    </div>
  );
}

export default Nav;
