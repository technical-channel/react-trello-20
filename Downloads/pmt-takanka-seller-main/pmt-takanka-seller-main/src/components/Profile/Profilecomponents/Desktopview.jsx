import React, { useState } from "react";
import { Link } from "react-router-dom";
import Editprofile from "./Editprofile";
// import ChangePassword from "./Profilecomponents/ChangePassword";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import ChangePayment from "./ChangePayment";
import Profilehome from "./Profilehome";

const Desktopview = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      {/* Desktop view tab */}
      <div class="hidden lg:block xl:w-[25%]  lg:w-[35%] pr-6 w-full  bg-white relative z-50  px-6 py-6 profole_shadow profile-rounded">
        <div class="h-screen">
          <ul class="px-2 mb-8">
            <li class="border-b pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer">
              <a
                onClick={() => setOpenTab(1)}
                class={` ${
                  openTab === 1 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                Profile
              </a>
            </li>
            <li class="border-b pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer">
              <a
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                Change Password
              </a>
            </li>
            <li class="border-b pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer">
              <a
                onClick={() => setOpenTab(3)}
                className={` ${
                  openTab === 3 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                Change Payment
              </a>
            </li>
            <li class="border-b pb-5 pt-5 pl-8 border-[#CDD5DE] cursor-pointer">
              <a
                onClick={() => setOpenTab(4)}
                className={` ${
                  openTab === 4 ? "text-[#147CBF]" : ""
                } lg:text-[18px] text-[16px]`}
              >
                Delete Account
              </a>
            </li>
          </ul>
          <div class="absolute xl:bottom-[30%]  lg:bottom-[5%] bottom-[5%] left-[5%]">
            <img src="assets/bg_sit_profile.svg" class="mx-auto w-full" />
          </div>
        </div>
      </div>
      {/* close Desktop view */}

      {/* Desktop view body section */}
      <div class="hidden lg:block xl:w-[75%] mx-auto lg:w-[65%] w-full lg: flex flex-col  xl:mt-[10px] mt-[30px]">
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
      </div>
      {/* Close Desktop view */}
    </>
  );
};

export default Desktopview;
