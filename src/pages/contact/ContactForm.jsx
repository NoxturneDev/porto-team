// CONTACT FORMS HERE
import React from "react";
import { Wrapper } from "../../components/layout/Container";
import Line from "../../components/Line";
import Nav from "../../components/Nav";

const ContactForm = () => {
return(
    <div className="bg-radial-dark">
    <Nav/>
    <Wrapper direction="column" customClass="bg-radial-dark w-screen  min-h-max  ">
      <Line>Contact</Line>
      <h1 style={{ letterSpacing:'0.57em' }} className="text-font-200 header text-6xl mt-28 mb-24 ">Contact Us</h1>
      <h1 style={{ letterSpacing:'1.67em' }} className="text-gray-500 header text-6xl mb-24 ">HELLOWEB.COM</h1>
   
   {/* Form */}
   <Wrapper direction="column" customClass="bg-radial-dark w-5/6  min-h-max  ">
   <div className="mb-3 pt-0 w-3/5 mt-16">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="px-5 py-7 border-pink-600  placeholder-gray-400 text-gray-600 relative bg-radial-dark rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>

                <div className="mb-3 pt-0 w-3/5 mt-7">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    className="px-5 py-7 border-pink-600  placeholder-gray-400 text-gray-600 relative bg-radial-dark rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>

                <div className="mb-3 pt-0 w-3/5 mt-7">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="px-5 py-7 border-pink-600  placeholder-gray-400 text-gray-600 relative bg-radial-dark rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>

                <div className="mb-3 pt-0 w-3/5 mt-7">
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="px-5 py-5 h-44 border-pink-600 placeholder-gray-400 text-gray-600 relative  bg-radial-dark rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>

  <div className="text-left justify-items-start flex">
                <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Send a message
                  </button>
                  </div>
                  </Wrapper>
    </Wrapper>
    </div>
)
}

export default ContactForm;


