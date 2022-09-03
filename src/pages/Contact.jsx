import React from "react";
import { Wrapper, Container } from "../components/Container";
import MotionComp from "../animation/Motion";
function Contact({ visible }) {

  if (!visible) return null


  return (
    <>
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
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <textarea
                  placeholder="Your message"
                  name="message"
                  className="px-3 py-3 h-40 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Send a message
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
    </>
  );
}

export default Contact;
