import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
const ForgotPassword = () => {
  return (
    <div>
      <div>
        <div className="bg-login-img h-[100%] bg-cover bg-center  bg-no-repeat">
          <LoginHeader />
          <div className="py-[5rem] px-5 ">
            <div className="main-sec pb-[40px] xl:max-w-[1000px] xl_width-another lg:max-w-[1300px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
              <div className="bg-white box-custom rounded-md  lg:px-[40px] px-[20px] lg:pt-[50px]  lg:pb-[80px] pb-[40px]">
                <div className="flex lg:flex-row lg-pt-0 pt-[60px]  items-center gap-6 flex-col">
                  <div className="flex-1 flex menus-start lg:items-center justify-center">
                    <img
                      src="assets/hero-dash.png"
                      className="xl:h-full lg:h-[400px] md:block hidden lg:h-full md:h-[300px] h-[150px]"
                    />
                    <img
                      src="assets/Feb-Business_9.jpg"
                      className="xl:h-auto lg:h-[400px] md:hidden block md:h-[300px] h-[200px]"
                    />
                  </div>
                  <div className="flex-1 lg:mt-[0px] xl:pr-[80px] xl:pl-[40px]  mt-[50px]">
                    <form>
                      <h3 className="text-[#0674BB] text-center text-[25px] font-bold mb-8">
                        Forgot Password
                      </h3>
                      <div className="grid grid-cols-1 gap-[30px]">
                        <div className="relative mb-6">
                          <input
                            type="email"
                            id="full-name"
                            name="full-name"
                            className="w-full shadow-md pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Email address*"
                          />
                          <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                            <i className="fa-solid fa-at" />
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/forgototp"
                        className="lg:mt-[25px] lg:max-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium"
                      >
                        <div className="flex items-center justify-center">
                          <i className="pr-3 fa-regular fa-envelope" />
                          Send OTP
                        </div>
                      </Link>
                      <div className="mt-5 text-center font-medium">OR</div>
                      <div className="mt-5">
                        <hr />
                      </div>
                      <Link
                        to="/signup"
                        className="lg:mt-[25px] lg:max-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px]  shadow-custom font-medium"
                      >
                        Create Account
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
