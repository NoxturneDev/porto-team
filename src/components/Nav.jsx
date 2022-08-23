import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-center items-center w-screen bg-slate-700 h-16">
      <div className="grow p-4 text-gray-50 text-2xl font-bold">
        <h2>HALLOWEB</h2>
      </div>
      <ul className="flex justify-center items-center color-white h-14 mx-10">
        <li className="m-8 text-gray-50">
          <Link to="/">Home</Link>
        </li>
        <li className="m-8  text-gray-50">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-8  text-gray-50 ">
          <Link to="/project">Projects</Link>
        </li>
        <li className="m-8  text-gray-50">
          <Link to="/project">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
