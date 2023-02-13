import React, { useState } from "react";
import { Link } from "react-router-dom";
import Editprofile from "./Editprofile";

const Profilehome = () => {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return <Editprofile />;
  } else {
    return (
      <>
        <div className="flex justify-center mb-6">
          <h3 className="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center">
            Profile
          </h3>
        </div>
        <div className="shadow-boxxx  relative z-50 mx-auto xl:max-w-[60%] lg:min-w-[60%]  bg-white   min-w-[100%]  lg:min-h-[450px] max-h-[580px] py-6 rounded-[15px]">
          <div className>
            <div className="bg-[#147CBF] relative h-[100px] rounded-t-[15px]">
              <div className="flex">
                <label className="relative top-[30px] left-[50%] translate-x-[-50%] cursor-pointer">
                  <img
                    src="assets/doll.svg"
                    className="lg:w-[100px] w-[80px] lg:h-[100px] w-[80px]"
                  />
                  <span className="mt-2 absolute lg:bottom-[-5px] lg:right-[-5px] bottom-0 right-0 lg:w-[40px] lg:h-[40px] w-[35px]  h-[35px] shadow-xl bg-[#fff] flex justify-center items-center rounded-full text-base leading-normal">
                    <img src="assets/camra.svg" className="h-[20px]" />
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <img
                onClick={() => setEdit(true)}
                src="assets/pencil.svg"
                className="absolute top-[20px] right-[20px] cursor-pointer"
              />
            </div>
            <h3 className="text-center mt-[50px] font-bold lg:text-[20px] text-[16px]">
              Daniel Radcliffe
            </h3>
            <form className="px-5 mt-[50px] bg-[#fff]">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="mb-6">
                  <input
                    className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                    type="text"
                    id="country"
                    value="Daniel"
                    readonly
                  ></input>
                </div>
                <div className="mb-6">
                  <input
                    className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                    type="text"
                    id="country"
                    value="Radcliffe"
                    readonly
                  ></input>
                </div>
              </div>
              <div className="grid lg:grid-cols-1 grid-cols-1 ">
                <div className="mb-6">
                  <input
                    className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                    type="text"
                    id="country"
                    value="daniel.radcliffe@gmail.com "
                    readonly
                  ></input>
                </div>
                <div className="mb-6">
                  <input
                    className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                    type="text"
                    id="country"
                    value="bans@321888"
                    readonly
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-[4rem]">
          {/* <img src="/public/assets/BG2.svg" /> */}
          <img src="assets/BG2.svg" />
        </div>
      </>
    );
  }
};

export default Profilehome;
