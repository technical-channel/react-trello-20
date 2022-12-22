import React, { useState } from "react";
import {Link } from 'react-router-dom'
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="max-w-[1300px] mx-auto  px-4">
      <nav className="w-full bg-white ">
        <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo.png"}
                  width="100"
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-navy uppercase text-sm font-normal">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-navy uppercase text-sm font-normal">
                  <Link to="/explore">Discover</Link>
                </li>
                <li className="text-navy uppercase text-sm font-normal">
                  <Link to ="/create">PUBLISH A PROJECT</Link>
                </li>
                <li className="text-navy uppercase text-sm font-normal">
                  <Link to="/login" >LOGIN</Link>
                </li>
                <li className="text-navy uppercase text-sm font-normal">
                  <Link to="/profile" >PROFILE</Link>
                </li>
                <li className="text-navy uppercase text-sm font-normal">
                  <Link to="/about" >About</Link>
                </li>
                <li className="bg-navy uppercase text-sm font-normal text-white px-4 py-2 rounded text-center ">
                  <Link to="/register" >REGISTER</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
