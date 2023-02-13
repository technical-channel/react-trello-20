import { Dialog, Transition } from "@headlessui/react";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState, Fragment } from "react";
import Detail from "./Detail";
import { Button, Modal } from "antd";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import RaiseConflictModal from "../Modal/RaiseConflictModal";
import InviteBuyerModal from "../Modal/InviteBuyerModal";

const Tanaka = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [conflictRaised, setConflictRaised] = useState(false);
  const [invitationSent, setInvitationSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInqueryDone, setIsInqueryDone] = useState(false);
  const [sucessPopup, setSuccessPopup] = useState(false);
  const [invitationAccepted, setInvitationAccepted] = useState(null)
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }
    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const tabsData = [
    {
      label: "Details",
      content: (
        <>
          <Detail />
        </>
      ),
    },
    {
      label: "Task",
      content: <Task />,
    },
    {
      label: "Team",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
  ];

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSuccessPopup(false);
    // setIsInqueryDone(false);
  };

  return (
    <div className=" bg-cyan  px-5 py-5 justify-start items-center ">
      <RaiseConflictModal isOpen={isOpen} closeModal={closeModal} setConflictRaised={setConflictRaised} />
      <InviteBuyerModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setSuccessPopup={setSuccessPopup}
        setInvitationSent={setInvitationSent}
      />
      <div className="pb-5">
        <div className="flex md:flex-row flex-col  mx-auto items-center justify-between">
          <p className="text-[#0674BB] lg:text-[22px] text-[15px] lg:text-left text-center md:mb-0 mb-[20px] font-bold">
            Tanaka Project Management Tool
          </p>

          <div className="flex items-center justify-center sm:gap-0 gap-2">
            {
              invitationSent && invitationAccepted === true ?
                !conflictRaised ?
                  <>
                    <button
                      className="underline md:text-[16px] border-[#0674bb] w-max text-center text-[14px] text-[#0674bb] phone:px-[40px] px-[1px] transition-all duration-300 py-[10px]"
                    >
                      Download Contract
                    </button>
                    <button
                      className="  md:text-[16px] bg-[#0674bb]  rounded-full lg:min-w-[220px] text-center text-[14px] text-white px-[10px] transition-all duration-300 py-[10px] "
                      onClick={openModal}
                    // onClick={() => setConflictRaised(true)}
                    >
                      Raise Conflict
                    </button>
                  </>
                  :
                  <button
                    className="md:text-[16px] bg-red-600 rounded-full lg:min-w-[220px] text-center text-[14px] text-white px-[10px] transition-all duration-300 py-[10px] "
                    onClick={openModal}
                  >
                    Conflict Raised
                  </button>
                :
                invitationSent && invitationAccepted === false ?
                  <h1>Invitation Declined</h1>
                  : null
            }

            {
              invitationSent && invitationAccepted === null ?
                <p className="text-green-400 float-right" onClick={() => setInvitationAccepted(true)}>Waiting For The Buyer To Accept The Invitation</p>
                :
                !invitationSent ?
                  <button
                    className="py-2 px-4 mb-5 shadow-custom float-right text-white rounded-full common-btn  md:text-[16px] lg:min-w-[220px] text-center text-[14px]"
                    onClick={showModal}
                  >
                    Invite Buyer
                  </button>
                  : null

            }
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-[40px] border-b">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3 text-secondary text-lg font-bold"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-blue-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4 ">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
};

export default Tanaka;

export const Task = () => {
  const faqs = [
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },
    {
      id: 1,
      question: (
        <>
          <div className="flex gap-2 items-center ">
            <div className="flex items-center gap-2">
              <img src="assets/check-mark.svg" className="max-w-[25px]" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[15px]">Website development</span>
              <div className="flex justify-center items-center px-2 py-3 text-[14px] h-5 text-[#858585]  text-center   bg-[#eeeeee] rounded">
                no-progress Oct 19
              </div>
              <span className=" font-medium leading-none h-5 rounded-sm bg-[#75BDDF]  text-white text-sm flex items-center justify-center px-2 py-1 cursor-pointer flex-shrink-0">
                low
              </span>
              <div className="flex items-center mr-2 ">
                <img src="assets/vk.svg" className="pr-2 w-8 h-8 rounded-full" />
                <p className="text-[14px]">Ruchika R.</p>
              </div>
              <p className="  text-[#858585] flex justify-center items-center px-2 py-1 h-5 text-[14px] bg-[#eeeeee] rounded">
                Due&nbsp;
                <span className=" py-0 text-[#FF4E4D] font-bold">Oct7</span>
              </p>
            </div>
          </div>
        </>
      ),
      answer: (
        <>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
          <p className="mb-2 text-[15px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis
          </p>
        </>
      ),
    },

  ];

  return (
    <>
      <div className="mx-auto  bg-white  text-lg my-5 rounded-lg shadow ">
        {faqs.map((faq) => (
          <Disclosure>
            {({ open }) => (
              <>
                <div
                  key={faq.id}
                  // style={{ borderBottom: "2px solid  #8080802e" }}
                  className="my-0"
                >
                  <hr />
                  <Disclosure.Button
                    className="flex w-full justify-between rounded-lg  items-center px-4 py-2 text-left font-medium text-black"
                    defaultOpen
                  >
                    <span className="text-black">{faq.question}</span>
                    {open ? (
                      <IoIosArrowUp size={25} style={{ color: "#0674BB" }} />
                    ) : (
                      <IoIosArrowDown size={25} style={{ color: "#0674BB" }} />
                    )}
                  </Disclosure.Button>
                  {open && (
                    <Disclosure.Panel
                      static
                      className=" w-full  rounded-lg px-4 mb-2 py-5 text-left text-md font-medium"
                    >
                      {faq.answer}
                    </Disclosure.Panel>
                  )}
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  );
};
