import React, { useState } from "react";
import { Link as ALink, animateScroll as scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Primary";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const location = useNavigate();
  function handleChange(value) {
    location(`${value}`);
  }
  return (
    <>
      <nav className="fixed  bg-white z-50 shadow  w-full  py-3">
        <div className="">
          <div className="justify-between px-4 mx-auto max-w-[1500px] w-full md:items-center md:flex  gap-5 ">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 ">
                <a href="/">
                  <img src={process.env.PUBLIC_URL + "/assets/logo.png"} />
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
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
                        className="w-6 h-6 text-black"
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
                <div className="flex items-center justify-center gap-[30px]">
                  <ul className="flex flex-col md:flex-row items-center justify-center gap-[30px]">
                    <ALink
                      activeclassName="active"
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      onClick={scrollToTop}
                      duration={500}
                    >
                      <li className="text-black md:hidden lg:block  ">
                        <a
                          href="/"
                          className="text-black  py-2 font-bold hover:border-b-2  hover:border-[#2585C3] focus:border-b-2  focus:border-[#2585C3]"
                          style={{ fontFamily: "Mulish" }}
                        >
                          Home
                        </a>
                      </li>
                    </ALink>
                    <ALink
                      activeclassName="active"
                      to="why-choose"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <li className="text-black ">
                        <a
                          href="/"
                          className="text-black py-2  font-bold hover:border-b-2  hover:border-[#2585C3] focus:border-b-2  focus:border-[#2585C3] "
                          style={{ fontFamily: "Mulish" }}
                        >
                          Why Tanaka
                        </a>
                      </li>
                    </ALink>
                    <ALink
                      activeclassName="active"
                      to="features"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <li className="text-black">
                        <a
                          href="/"
                          className="text-black py-2  font-bold hover:border-b-2  hover:border-[#2585C3] focus:border-b-2  focus:border-[#2585C3]"
                          style={{ fontFamily: "Mulish" }}
                        >
                          Features
                        </a>
                      </li>
                    </ALink>

                    <ALink
                      to="pricing"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <li className="text-black ">
                        <a
                          href="/"
                          className="text-black py-2  font-bold hover:border-b-2  hover:border-[#2585C3] focus:border-b-2  focus:border-[#2585C3]"
                          style={{ fontFamily: "Mulish" }}
                        >
                          Pricing{" "}
                        </a>
                      </li>
                    </ALink>
                    <ALink
                      to="reviews"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <li className="text-black ">
                        <a
                          href="/"
                          className="text-black py-2  font-bold hover:border-b-2  hover:border-[#2585C3] focus:border-b-2  md:hidden lg:block sm:block  focus:border-[#2585C3]"
                          style={{ fontFamily: "Mulish" }}
                        >
                          Reviews{" "}
                        </a>
                      </li>
                    </ALink>
                    <div>
                      <div className="flex flex-col md:flex-row  sm:flex-col  gap-5 justify-center items-center ">
                        <select
                          className="px-[3rem] py-2 bg-[#F0F7FB] font-bold rounded-full text-[#0674BB]  border-0  md:hidden lg:block sm:block "
                          style={{ fontFamily: "Mulish" }}
                        >
                          <option selected> English(UK) </option>
                          <option>Chinese</option>
                          <option>Japanese</option>
                        </select>

                        <select
                          className="px-[1rem] py-2 bg-[#F0F7FB] font-bold rounded-full text-[#0674BB]  border-0  w-[150px] "
                          style={{ fontFamily: "Mulish" }}
                          onChange={(event) => handleChange(event.target.value)}
                        >
                          <option
                            value="none"
                            className="text-center"
                            selected
                            disabled
                            hidden
                          >
                            Login
                          </option>

                          <option value="/login" className="text-center">
                            Login as User
                          </option>

                          <option value="/login-team" className="text-center">
                            Login as Team
                          </option>
                          
                        </select>

                        <Link to="/signup ">
                          <Button title={"Signup"}></Button>
                        </Link>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
