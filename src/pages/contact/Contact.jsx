import React, { useRef, useState } from "react";
import { Wrapper, Container } from "../../components/layout/Container";
import MotionComp from "../../animation/Motion";
import { useEffect } from "react";
import gsap from "gsap";
import Button from "../../components/ui/Button";


function Contact() {

  const modal = useRef(null)
  const [view, setView] = useState(false)

  const closeModal = () => {
    gsap.fromTo(modal.current, {
      opacity: 1,
      yPercent: 0,
    }, {
      opacity: 1,
      yPercent: -100,
    })

    setView(false)
  }

  const openModal = () => {
    gsap.fromTo(modal.current, {
      opacity: 0,
      yPercent: -100,
    }, {
      opacity: 1,
      yPercent: 0
    })

    setView(true)
  }


  useEffect(() => {
    gsap.set(modal.current, {
      yPercent: -100
    })
  }, [])

  // !!FIX THIS : currently use unnecessary animation like framer and gsap into one, change to only use framer enter and exit animation

  return (
    <>
      <div ref={modal} className="fixed z-20 top-0 left-0 right-0 bottom-0">
        <MotionComp animation="fade-up" classes="fixed h-screen flex flex-col 
        items-center justify-center z-40 top-0">
          <Wrapper full custom="bg-overlay">
            <form
              className="shadow-md rounded px-8 pt pb-8 mb-4 w-3/5 bg-gray-200 flex border z-20 "
              method="POST"
              target="_blank"
            >
              <div className=" h-full w-2/4 align-items-center flex  flex-col">
                <div className="mb-3 pt-0 mt-12">
                  <h1 className="text-4xl w-3/4 font-bold">
                    Fill the form. <br /> It's easy.
                  </h1>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative mt-12 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 h-40 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Send a message
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    onClick={closeModal}
                  >
                    Cancel!
                  </button>
                </div>
              </div>
              <div className="inset-y-0 left-0 w-10 border flex items-center justify-center">
                <div className="inset-y-0 left-0 w-1 h-3/4 bg-slate-300 rounded-lg"></div>
              </div>
              <div className="justify-center  h-full w-2/4 p-2 mt-12">
                <h1 className="text-3xl font-bold mt-32 ">
                  Let's talk about <br /> everything.
                </h1>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                  laborum praesentium totam quibusdam beatae dignissimos fuga in cum
                  recusandae magnam?
                </p>
                <a href="#" className="">
                  <p className="text-red-500 py-5">Read More</p>
                </a>
              </div>
            </form>
          </Wrapper>

        </MotionComp>

      </div>
      <div hidden={view ? false : true} onClick={openModal} className="container-flex h-screen w-screen relative ">
        <Button  custom="fixed right-10 bottom-10 bg-blue-300 hover:bg-blue-400">
          <svg width="20" height="20" viewBox="0 0 501 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.7779 0.600098H445.328C482.078 0.600098 500.6 17.9461 500.6 53.2261V300.774C500.6 335.76 482.078 353.4 445.328 353.4H55.7779C19.0279 353.4 0.505859 335.76 0.505859 300.774V53.2261C0.505859 17.9461 19.0279 0.600098 55.7779 0.600098ZM250.406 253.44L448.562 90.8581C455.618 84.9781 461.204 71.4541 452.384 59.4001C443.858 47.3461 428.276 47.0521 417.986 54.4021L250.406 167.886L83.1199 54.4021C72.8299 47.0521 57.2479 47.3461 48.7219 59.4001C39.9019 71.4541 45.4879 84.9781 52.5439 90.8581L250.406 253.44Z" fill="white" />
          </svg>
        </Button>
      </div>
    </>
  );
}

export default Contact;
