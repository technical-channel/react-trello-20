import React from "react";

const ChangePayment = () => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <h3 className="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center">
          Change Payment
        </h3>
      </div>
      <div className="shadow-boxxx relative z-50 mx-auto xl:max-w-[60%] lg:min-w-[60%] bg-white lg:min-h-[540px] max-h-[800px]  rounded-[15px]">
        <div className="">
          <div className="bg-[#147CBF] relative h-[30px] rounded-t-[15px]"></div>
          <form className="px-[50px] mt-[50px] bg-[#fff]">
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
              <div className="mb-1 relative">
                <input
                  type="text"
                  id="email"
                  className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Credit/Debit Card"
                  required=""
                />
                <div className="flex absolute right-2 top-[25%] gap-2">
                  <div className="hidden lg:block">
                    <img src="/assets/visa.svg" />
                  </div>
                  <div className="hidden lg:block">
                    <img src="/assets/discover.svg" />
                  </div>
                  <div className="hidden lg:block">
                    <img src="/assets/mastercard.svg" />
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="mb-1">
                  <label className="mb-3 inline-block">First Name</label>
                  <input
                    type="text"
                    id="email"
                    className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-1">
                  <label className="mb-3 inline-block">Last Name</label>
                  <input
                    type="text"
                    id="password"
                    className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder=""
                    required=""
                  />
                </div>
              </div>
              <div className="mb-1 relative">
                <input
                  type="text"
                  id="password"
                  className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Card Name"
                  required=""
                />
                <div className="hidden md:block absolute right-2 top-[25%] ">
                  <div>
                    <img src="../assets/mastercard.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="mb-1">
                <label className="mb-3 inline-block">Expiration date</label>
                <input
                  type="text"
                  id="email"
                  className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="mb-1">
                <label className="mb-3 inline-block">Security code</label>
                <input
                  type="text"
                  id="password"
                  className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <p className="mb-[30px]">Secure payment with SSL Encryption</p>
            <a
              href="otp.html"
              className="lg:mt-[10px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[10px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
            >
              Save Changes
            </a>
          </form>
        </div>
      </div>
      <div className="">
        {/* <img src="/public/assets/BG2.svg" /> */}
        <img src="assets/BG2.svg" />
      </div>
    </>
  );
};

export default ChangePayment;
