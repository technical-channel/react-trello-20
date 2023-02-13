import React from "react";
import LoginHeader from "./LoginHeader";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div>
      <div className="bg-login-img h-[100%] image-bg  bg-cover bg-center  bg-no-repeat">
        <LoginHeader />
        <div className="md:py-[7rem] py-[5rem] px-5 ">
          <div className="main-sec lg:pb-[25px] pb-[40px] xl:max-w-[1500px] xl_width-another lg:max-w-[1400px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
            <div className="bg-white  rounded-md lg:px-[40px] px-[20px] box-custom  pt-[50px] pb-[50px]">
              <div className="flex lg:flex-row items-center  gap-6 flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="assets/hero-dash.png"
                    className="xl:h-auto hero-img lg:h-[400px] md:h-[300px] h-[200px]"
                  />
                </div>
                <div className="flex-1 lg:mt-0 mt-0">
                  <form className="xl:pr-[60px] xl:pl-[40px]">
                    <h3 className="text-[#0674BB] text-center text-[25px] font-bold mb-[50px]">
                      Forgot Password
                    </h3>
                    <div className="grid grid-cols-1 gap-[30px]">
                      <div className="relative mb-6">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Enter Your Email address"
                        />
                        <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                          <i className="fa-solid fa-at" />
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="relative mb-6">
                        <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] pr-[35px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Enter New Password"
                        />
                        <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className="w-[20px]" />
                        </span>
                        <a
                          href="/;"
                          className="absolute top-[15px] right-[10px]"
                        >
                          <i className="fa-solid fa-eye text-[16px] text-[#0674BB]" />
                          <i className="fa-solid hidden  fa-eye-slash text-[16px] text-gray-400" />
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="relative ">
                        <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] pr-[35px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Re-Enter New Password"
                        />
                        <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className="w-[20px]" />
                        </span>
                        <a
                          href="/;"
                          className="absolute top-[15px] right-[10px]"
                        >
                          <i className="fa-solid fa-eye text-[16px] text-[#0674BB]" />
                          <i className="fa-solid hidden  fa-eye-slash text-[16px] text-gray-400" />
                        </a>
                      </div>
                    </div>
                    <Link
                      to="/login"
                      className="lg:mt-[50px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] py-[12px] shadow-custom font-medium"
                    >
                      <div className="flex items-center justify-center">
                        Reset Password
                      </div>
                    </Link>
                    <a></a>
                  </form>
                </div>
                <a></a>
              </div>
              <a></a>
            </div>
            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
