import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import { Wrapper } from "./Container";

function Nav() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    if (modal == false) {
      setModal(true);
    }
  };

  return (
    <>
      <Wrapper custom="flex justify-center items-center w-screen h-16 z-20 fixed px-5  bg-astro-purple-300">
        <div className="grow p-4 text-gray-50 text-2xl font-bold">
          <h2>HALLOWEB</h2>
        </div>
        <ul className="flex justify-center items-center color-white h-14 mx-10">
          <li className="m-8 text-gray-50 font-satoshi font-medium tracking-widest">
            <Link to="/">Home</Link>
          </li>
          <li className="m-8  text-gray-50 font-satoshi font-medium tracking-widest">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-8  text-gray-50 font-satoshi font-medium tracking-widest">
            <Link to="/project">Projects</Link>
          </li>
          <li className="m-8  text-gray-50 font-satoshi font-medium tracking-widest">
            <h2 onClick={showModal} className="cursor-pointer">
              Contact
            </h2>
          </li>
        </ul>
      </Wrapper>
      <Contact visible={modal}></Contact>
    </>
  );
}

export default Nav;
