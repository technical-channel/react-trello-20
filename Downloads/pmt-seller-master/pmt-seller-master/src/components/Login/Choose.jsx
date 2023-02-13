import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
const Choose = () => {
  const [typeOfSeller, setType] = useState("buyer");

  return (
    <>
      <div className="bg-login-img h-[100%] bg-cover bg-center  bg-no-repeat">
        <LoginHeader />
        <div className="xl:h-[100vh] main-height-h h-[100%]">
          <div className="xl:pt-[60px] sec-mainnn pb-[40px]  lg:pt-[0px] pt-[20px]">
            <div className="max-w-[800px] p-5 mx-auto">
              <div className="mb-[80px] margin-lapi">
                <h1 className="xl:text-[40px] choose-head lg:text-[40px] md:text-[30px] text-[16px] text-center font-bold capitalize text-[#0674BB] mb-4">
                  Join as a Seller Or Buyer
                </h1>
              </div>
              <form className="w-full max-w-screen-lg mx-auto">
                <div className="grid sm:grid-cols-2 gap-[30px]">
                  <label
                    htmlFor="buyer"
                    className="relative flex flex-col bg-white px-5  rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setType("buyer")}
                  >
                    <div className="flex flex-col justify-center px-5 pt-8 pb-2">
                      <div className="flex justify-center items-center">
                        <img
                          src="assets/buyer (1).svg"
                          className="lg:h-[150px] relative  md:h-[150px] h-[100px]"
                        />
                      </div>
                      <span className="font-bold text-right md:text-[30px] text-[20px] mt-4  mb-3">
                        Buyer
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="plan"
                      id="buyer"
                      defaultValue="hobby"
                      className="absolute hidden h-0 w-0 appearance-none"
                    />
                    <span
                      aria-hidden="true"
                      className="hidden absolute inset-0 border-2 border-[#0674BB] z-3 bg-[#0674BB] bg-opacity-10 rounded-lg"
                    >
                      <span className="absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#0674BB]">
                        <span>
                          <i className="fa-regular fa-circle text-white text-[18px]" />
                        </span>
                      </span>
                    </span>
                  </label>
                  <label
                    htmlFor="seller"
                    className="relative flex flex-col bg-white px-5 rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setType("seller")}
                  >
                    <div className="flex flex-col justify-center px-5 pt-8 pb-2">
                      <div className="flex justify-center">
                        <img
                          src="assets/seller (1).svg"
                          className="lg:h-[150px] relative  md:h-[150px] h-[100px]"
                        />
                      </div>
                      <span className="font-bold text-right md:text-[30px] text-[20px] mt-4  mb-3">
                        Seller
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="plan"
                      id="seller"
                      defaultValue="growth"
                      className="absolute hidden h-0 w-0 appearance-none"
                    />
                    <span className="hidden absolute inset-0 border-2 border-[#0674BB] bg-[#0674BB] z-3 bg-opacity-10 rounded-lg">
                      <span className="absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#0674BB]">
                        <span>
                          <i className="fa-regular fa-circle text-white text-[18px]" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <Link
                  to="/dashboard"
                  className="lg:mt-[60px] btn-mg lg:max-w-[300px] max-w-[200px] mx-auto mt-[40px] flex justify-center  lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
                >
                  Join as a {typeOfSeller == "buyer" ? "buyer" : "seller"}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
