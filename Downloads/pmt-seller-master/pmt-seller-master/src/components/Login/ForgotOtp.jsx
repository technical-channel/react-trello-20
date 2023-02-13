import React from "react";
import LoginHeader from "./LoginHeader";
import { Link } from "react-router-dom";
const ForgotOtp = () => {
  return (
    <div>
      <div>
        <div className="bg-login-img h-[100%]  bg-cover bg-center  bg-no-repeat">
          <LoginHeader />
          <div className="md:py-[7rem] py-[6rem] px-5 ">
            <div className="main-sec pb-[40px] xl:max-w-[1500px] xl_width-another lg:max-w-[1400px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
              <div className="bg-white box-custom rounded-md lg:px-[40px] px-[20px] pt-[40px] pb-[60px]">
                <div className="flex items-center lg:flex-row gap-6 flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src="assets/hero-dash.png"
                      className="xl:h-auto hero-img lg:h-[400px] md:h-[300px] h-[200px]"
                    />
                  </div>
                  <div className="flex-1 mt-[50px] xl:pr-[80px] xl:pl-[40px] ">
                    <form>
                      <div className="lg:mb-[60PX] mb-[20PX]">
                        <h3 className="text-[#0674BB] text-center lg:text-[25px] text-[20px] font-bold mb-[30px]">
                          Forgot Password
                        </h3>
                        <h1 className="text-center text-[#0674BB] lg:text-[22px] text-[18px] font-bold">
                          Enter OTP
                        </h1>
                      </div>
                      <div className="flex justify-center items-center lg:gap-3 gap-2">
                        <input
                          type="text"
                          className="lg:w-[60px]  lg:h-[60px] p-0  text-[#0674BB] lg:text-[22px] text-[16px] shadow-md w-[40px] h-[40px] otp_input border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                          id
                          placeholder
                        />
                        <input
                          type="text"
                          className="lg:w-[60px] lg:h-[60px]  p-0 text-[#0674BB] lg:text-[22px] text-[16px] shadow-md w-[40px] h-[40px] otp_input border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                          id
                          placeholder
                        />
                        <input
                          type="text"
                          className="lg:w-[60px] lg:h-[60px]  p-0 text-[#0674BB] lg:text-[22px] text-[16px] shadow-md w-[40px] h-[40px] otp_input  border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                          id
                          placeholder
                        />
                        <input
                          type="text"
                          className="lg:w-[60px] lg:h-[60px] p-0  text-[#0674BB] lg:text-[22px] text-[16px] shadow-md w-[40px] h-[40px] otp_input border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                          id
                          placeholder
                        />
                        <input
                          type="text"
                          className="lg:w-[60px] lg:h-[60px]  p-0 text-[#0674BB] lg:text-[22px] text-[16px] shadow-md w-[40px] h-[40px] otp_input border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                          id
                          placeholder
                        />
                        <input
                          type="text"
                          className="lg:w-[60px] lg:h-[60px]  p-0 text-[#0674BB] lg:text-[22px] text-[16px] shadow-md w-[40px] h-[40px] otp_input border-[#e0e0e0] border-2 focus:border-[#0674bb] text-center"
                          id
                          placeholder
                        />
                      </div>

                      <Link
                        to="/reset"
                        className="lg:mt-[50px] mt-[30px]  lg:max-w-[250px] max-w-[200px] mx-auto flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium"
                      >
                        <div className="flex items-center justify-center">
                          Verify OTP
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
    </div>
  );
};

export default ForgotOtp;
