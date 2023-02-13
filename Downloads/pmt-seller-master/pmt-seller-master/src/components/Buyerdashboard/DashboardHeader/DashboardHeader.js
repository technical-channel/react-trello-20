import React, { Fragment, useContext } from "react";
import { Input } from "antd";
import { FaBars } from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContext } from "../../../Provider/SidebarProvider";
import SearchBar from "./SearchBar";
import { Menu, Transition } from "@headlessui/react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserSwitch } from "react-icons/ai";

const DashboardHeader = () => {
  const { Search } = Input;
  const { showSidebar } = useContext(SidebarContext);
  const onSearch = (value) => console.log(value);
  const navigate = useNavigate();

  const redirectToBuyer = () => {
    window.open("https://pmt-buyer-panel-85si.vercel.app", "_blank");
  };

  return (
    <div className="bg-[#fff] flex items-center justify-between w-full border-b-2 border-[#0674BB]  py-4 z-10">
      <div className="block lg:hidden px-5 ">
        <FaBars onClick={showSidebar} size={25} />
      </div>

      <div className="flex  flex-row w-full justify-between  items-start gap-5  sm:px-5 px-0">
        <div className="flex gap-[2rem]">
          <div className="">
            <h5 className="text-[#0674BB] font-bold xl:text-[18px] text-left lg:text-[16px] sm:text-[16px] text-[12.8px]">
              Hi! Daniel Radcliffe
            </h5>
            <p className="text-[#ABABAB] lg:text-[0.8rem] text-[0.8rem] sm:max-w-[100%] max-w-[80%]">
              Here's what's happening with your Project today.
            </p>
          </div>
        </div>

        {/* <Menu>
          <Menu.Button>
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (

                <div className="flex sm:gap-2 items-center">
                  <span className="font-bold text-black text-[1rem] capitalize sm:block hidden">
                    Logout
                  </span>
                  <BsBoxArrowRight size={30} className="text-[#0674BB] font-bold" />
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu> */}
        <div className="flex items-center gap-5  ">
          <div className="hidden sm:block bg-[#0674BB]  text-white rounded">
            {" "}
            <p className=" flex justify-center items-center px-2 py-0 text-[14px] font-bold ">
              <span className="   font-medium text-lg   text-white  mr-4">
                Premium
              </span>
              Expiry Date :
              <span className=" py-0  text-white font-bold">23-03-24</span>
            </p>
          </div>
          <button
            className="bg-gray-100 py-2 px-4 rounded font-bold cursor-pointer md:block hidden"
            onClick={() => redirectToBuyer()}
          >
            Switch To Buyer
          </button>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center  px-4 py-2 text-sm font-medium ">
                <img src="/assets/doll.svg" className="" />
                {/* <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              /> */}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0  mt-2 w-[12rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 px-5">
                  <div className="md:hidden block">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className="flex items-center gap-2 w-full cursor-pointer pt-4"
                          onClick={() => redirectToBuyer()}
                        >
                          <AiOutlineUserSwitch
                            size={20}
                            className="text-[#0674BB] font-bold"
                          />
                          <span className="font-semibold text-black text-[14px] capitalize">
                            Switch To Buyer
                          </span>
                        </div>
                      )}
                    </Menu.Item>
                  </div>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex items-center justify-left w-full gap-2 cursor-pointer pt-4 z-0"
                        onClick={() => navigate("/profile")}
                      >
                        <CgProfile
                          size={20}
                          className="text-[#0674BB] font-bold"
                        />
                        <span className="font-semibold text-black text-[14px] capitalize">
                          Profile Settings
                        </span>
                        {/* <BsBoxArrowRight size={25} className="text-[#0674BB] font-bold" /> */}
                      </div>
                    )}
                  </Menu.Item>

                  <div className="">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex items-center gap-2 w-full cursor-pointer py-4">
                          <BsBoxArrowRight
                            size={20}
                            className="text-[#0674BB] font-bold"
                          />
                          <span className="font-semibold text-black text-[14px] capitalize">
                            <Link to="/">Logout</Link>
                          </span>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
