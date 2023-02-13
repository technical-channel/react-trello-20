import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../Login/LoginHeader";
const Signup = () => {
  return (
    <>
      <div className="bg-login-img h-[100%]  bg-cover bg-center  bg-no-repeat">
        <LoginHeader />
        <div className="lg:py-[6.5rem]  py-[2rem] px-5 ">
          <div className="main-sec lg:pb-[25px]  xl:max-w-[1500px] xl_width-another  lg:max-w-[1400px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
            <div className="bg-white  rounded-md lg:px-[40px] px-[20px] box-custom lapi-p lapi-pb  pt-[50px] pb-[80px]">
              <div className="flex lg:flex-row  gap-6 flex-col">
                <div className="flex-1  flex items-center justify-center">
                  <img
                    src="assets/hero-dash.png"
                    className="xl:h-auto hero-img lg:h-[400px] md:h-[300px] h-[200px]"
                  />
                </div>
                <div className="flex-1 lg:mt-0 mt-0">
                  <form>
                    <h3 className="text-[#0674BB]  text-center text-[30px] font-bold mb-[40px]">
                      Sign Up{" "}
                    </h3>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px]">
                      <div className="relative mb-6">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="pl-[40px] shadow-lg w-full bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[gray-700] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="First Name*"
                        />
                        <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                          <i className="fa-solid fa-circle-user" />
                        </span>
                      </div>
                      <div className="relative mb-6">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="w-full h-[45
                                          px] pl-[40px] shadow-lg bg-[#fff]  rounded-[10px] border border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Last Name*"
                        />
                        <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                          <i className="fa-solid fa-circle-user" />
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px]">
                      <div className="relative mb-6">
                        <input
                          type="email"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Email address*"
                        />
                        <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                          <i className="fa-solid fa-at" />
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px]">
                      <div className="relative mb-6">
                        <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Password*"
                        />
                        <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className />
                        </span>
                        <span className="absolute top-[15px] right-[10px]">
                          <i className="fa-solid fa-eye text-[16px] text-[#0674BB]" />
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px]">
                      <div className="relative mb-6">
                        <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Re-Enter-Password*"
                        />
                        <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className />
                        </span>
                        <span className="absolute top-[15px] right-[10px]">
                          <i className="fa-sharp fa-solid fa-eye-slash text-[16px] text-[#84a2a9]" />
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/sendotp"
                      className="lg:mt-[20px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[10px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
                    >
                      Send OTP
                    </Link>
                    <a>
                      {/* <div className="mt-5 text-center font-medium">OR</div> */}
                    </a>
                    <div className="mt-6">
                      <a>
                        <hr className="w-[60%] mx-auto" />
                      </a>
                      <p className="mt-6 lg:text-[16px] text-[14px] text-center text-[#ababab]">
                        <a>Already have an account?</a>
                        <Link
                          to="/login"
                          className="lg:text-[16px]     text-[14px] text-[#0674BB] font-bold"
                        >
                          &nbsp;Log In
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
