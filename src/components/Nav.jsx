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
      <Wrapper custom="flex w-screen h-16 z-20 fixed px-6 py-5 mt-4">
        <div className="flex w-screen  justify-center items-center px-14 ">
          <div className="grow p-4 text-gray-50 text-3xl font-bold font-generalsans  tracking-widest">
            <h2>HELLOWEB</h2>
          </div>
          <ul className="flex justify-center items-center color-white h-14  text-[22px] font-semibold text-slate-300">
            <li className="m-8 font-satoshi tracking-widest">
              <Link to="/">Home</Link>
            </li>
            <li className="m-8  font-satoshi tracking-widest">
              <Link to="/about">About Us</Link>
            </li>
            <li className="m-8  font-satoshi tracking-widest">
              <Link to="/project">Projects</Link>
            </li>
            <li className="m-8  font-satoshi tracking-widest">
              <h2 onClick={showModal} className="cursor-pointer">
                Contact
              </h2>
            </li>
          </ul>
        </div>
      </Wrapper>
      <Contact visible={modal}></Contact>
    </>
  );
}

export default Nav;
