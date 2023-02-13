import React, { useState } from "react";
import { Link } from "react-router-dom";
import Editprofile from "./Editprofile";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import ChangePayment from "./ChangePayment";
import Profilehome from "./Profilehome";

const Mobileview = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      {/* Mobile view */}
      <div className="block lg:hidden xl:w-[100%]  lg:w-[100%] pr-6 w-full h-[10px]   relative z-50  px-6 py-6  profile-rounded  ">
        <div className="h-screen">
          <ul className=" flex gap-4 font-bold px-2 mb-8 overflow-auto">
            <li className=" pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer font-bold text-[18px]">
              <a
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px] font-bold`}
              >
                Profile
              </a>
            </li>
            <li className=" pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer flex font-bold text-[18px] ">
              <a
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                <span>Change</span>
                <span className="ml-1">Password</span>
              </a>
            </li>
            <li className=" pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer flex font-bold text-[18px]">
              <a
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                <span>Change</span>
                <span className="ml-1">Payment</span>
              </a>
            </li>
            <li className=" pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer flex font-bold text-[18px]">
              <a
                onClick={() => setOpenTab(4)}
                className={` ${
                  openTab === 4 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                <span>Delete</span>
                <span className="ml-1">Account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="block lg:hidden xl:w-[100%] mx-auto lg:w-[100%] w-full lg:px-6 px-4 flex flex-col  xl:mt-[30px] mt-[70px]">
        {/* first Tab */}
        <div className={openTab === 1 ? "block" : "hidden"}>
          {/* <Editprofile /> */}
          <Profilehome />
        </div>
        {/* second Tab */}

        <div className={openTab === 2 ? "block" : "hidden"}>
          <ChangePassword />
        </div>
        {/* close second Tab */}

        {/* third Tab */}
        <div className={openTab === 3 ? "block" : "hidden"}>
          <ChangePayment />
        </div>
        {/* close sthird Tab */}

        {/* fourth Tab */}
        <div className={openTab === 4 ? "block" : "hidden"}>
          <DeleteAccount />
        </div>
        {/* close fourth Tab */}

        {/* <div className="absolute bottom-[5px] right-[20px] z-0">
          <img src="assets/profile_bg.svg" className="lg:block hidden" />
        </div> */}
      </div>
      {/* Close mobile view */}
    </>
  );
};

export default Mobileview;
