import React from "react";

const ChangePassword = () => {
  return (
    <>
      <div class="flex justify-center mb-6">
        <h3 class="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center flex flex-row">
          <span>Change </span>
          <span>Password</span>
        </h3>
      </div>
      <div class="shadow-boxxx  relative z-40 mx-auto xl:max-w-[60%] lg:min-w-[60%]  bg-white   min-w-[100%]  lg:min-h-[350px] min-h-[350px] rounded-[15px]">
        <div class="">
          <div class="bg-[#147CBF] relative h-[30px] rounded-t-[15px]"></div>

          {/* <form class="px-[100px] mt-[80px] bg-[#fff]">
            <div class="grid lg:grid-cols-1 grid-cols-1 gap-4">
              <div class="mb-3">
                <input
                  type="text"
                  id="email"
                  class="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Old Password"
                  required=""
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  id="password"
                  class="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter New Password"
                  required=""
                />
              </div>
            </div>
            <a
              href="otp.html"
              class="lg:mt-[20px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[10px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
            >
              Set Password
            </a>
          </form> */}
          <form className="px-5 mt-[50px] bg-[#fff]">
            <div className="grid lg:grid-cols-1 grid-cols-1 ">
              <div className="mb-6">
                <input
                  className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                  type="text"
                  id="country"
                  value="Old Password"
                  readonly
                ></input>
              </div>
              <div className="mb-6">
                <input
                  className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                  type="text"
                  id="country"
                  value="Enter new Password"
                  readonly
                ></input>
              </div>
            </div>
            <a
              href="otp.html"
              class="lg:mt-[20px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[10px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
            >
              Set Password
            </a>
          </form>
        </div>
      </div>
      <div className="pt-[21rem]">
        {/* <img src="/public/assets/BG2.svg" /> */}
        <img src="assets/BG2.svg" />
      </div>
    </>
  );
};

export default ChangePassword;
