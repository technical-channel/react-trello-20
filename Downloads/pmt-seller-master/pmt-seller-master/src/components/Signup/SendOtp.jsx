import React from "react";
import LoginHeader from "../Login/LoginHeader";
import ReCaptach from "../Login/ReCaptach";
import { Link } from "react-router-dom";
const SendOtp = () => {
  return (
    <div>
      <div className="bg-login-img h-[100%] image-bg  bg-cover bg-center  bg-no-repeat">
        <LoginHeader />
        <div className="py-[7.5rem] px-5 ">
          <div className="main-sec lg:pb-[25px] pb-[40px] xl:max-w-[1500px] xl_width-another lg:max-w-[1400px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
            <div className="bg-white  rounded-md lg:px-[40px] px-[20px] box-custom  pt-[50px] pb-[50px]">
              <div className="flex items-center lg:flex-row  gap-6 flex-col">
                <div className="flex-1  flex items-center justify-center">
                  <img
                    src="assets/hero-dash.png"
                    className="xl:h-auto hero-img lg:h-[400px] md:h-[300px] h-[200px]"
                  />
                </div>
                <div className="flex-1 lg:mt-0 mt-0">
                  <form>
                    <div className="lg:mb-[60PX] mb-[20PX]">
                      <h1 className="text-center text-[#0674BB] lg:text-[25px] text-[18px] font-bold">
                        Enter OTP
                      </h1>
                    </div>
                    <div className="flex justify-center items-center lg:gap-3 gap-2">
                      <input
                        type="text"
                        className="lg:w-[60px] lg:h-[60px] otp_input text-[#0674BB] p-0 lg:text-[22px] text-[16px] shadow-lg w-[40px] h-[40px] border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                        id
                        placeholder
                      />
                      <input
                        type="text"
                        className="lg:w-[60px] lg:h-[60px] otp_input text-[#0674BB] p-0 lg:text-[22px] text-[16px] shadow-lg w-[40px] h-[40px] border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                        id
                        placeholder
                      />
                      <input
                        type="text"
                        className="lg:w-[60px] lg:h-[60px] otp_input text-[#0674BB] p-0 lg:text-[22px] text-[16px] shadow-lg w-[40px] h-[40px]  border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                        id
                        placeholder
                      />
                      <input
                        type="text"
                        className="lg:w-[60px] lg:h-[60px] otp_input text-[#0674BB] p-0 lg:text-[22px] text-[16px] shadow-lg w-[40px] h-[40px] border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                        id
                        placeholder
                      />
                      <input
                        type="text"
                        className="lg:w-[60px] lg:h-[60px] otp_input text-[#0674BB] p-0 lg:text-[22px] text-[16px] shadow-lg w-[40px] h-[40px] border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                        id
                        placeholder
                      />
                      <input
                        type="text"
                        className="lg:w-[60px] lg:h-[60px] otp_input text-[#0674BB] p-0 lg:text-[22px] text-[16px] shadow-lg w-[40px] h-[40px] border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                        id
                        placeholder
                      />
                    </div>

                    <div className="mt-6">
                      <a>
                        <label className="lg:text-[14px] text-[12px]">
                          <input
                            type="checkbox"
                            className="lg:text-[14px] text-[12px]"
                          />{" "}
                          &nbsp; Yes, I understand and agree to the{" "}
                        </label>
                      </a>
                      <a
                        href="/"
                        className="text-[#0674BB] font-bold lg:text-[14px] text-[12px]"
                      >
                        Tanaka Terms of Service
                      </a>{" "}
                      ,{" "}
                      <span className="lg:text-[14px] text-[12px]">
                        including the
                      </span>{" "}
                      <a
                        href="/"
                        className="text-[#0674BB] lg:text-[14px] text-[12px] font-bold"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div className="my-5">
                      <ReCaptach />
                    </div>
                    <Link
                      to="/subscriptionplan"
                      className=" lg:max-w-[250px] max-w-[200px] mx-auto flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium"
                    >
                      <div className="flex items-center justify-center">
                        Create Account{" "}
                      </div>
                    </Link>

                    <a></a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOtp;
