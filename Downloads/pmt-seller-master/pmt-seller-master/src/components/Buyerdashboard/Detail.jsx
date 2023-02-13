import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

const Detail = () => {
  const [isInqueryDone, setIsInqueryDone] = useState(false);
  const [sucessPopup, setSuccessPopup] = useState(false);
  const [failurePopup, setFailurePopup] = useState(false);
  const [invitationSent, setInvitationSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSuccessPopup(false);
    setIsInqueryDone(false);
  };

  return (
    <div>
      <div className=" px-5 py-5 ">
        {/* <p className="text-[#0674BB] lg:text-[22px] text-[15px] lg:text-left text-center md:mb-0 mb-[20px] font-bold">
            Tanaka Project Management Tool
          </p> */}

        <Modal
          open={sucessPopup}
          onOk={handleOk}
          onCancel={handleCancel}
          className=""
        >
          {isInqueryDone ? <SuccessModal /> : <FailureModal />}
        </Modal>
        <div className="">
          <div className="bg-white h-full shd-box lg:mt-[40px] mt-[30px] multistep_form rounded-lg   lg:px-[50px] py-[50px] px-4  pb-[30PX]">
            <div className="grid mb-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between">
              <div className="mb-8">
                <h3 className="text-[#0674BB] lg:text-[18px] sm:text-[16px] text-[15px] mb-2 font-bold uppercase">
                  Seller Name
                </h3>
                <p className="font-bold lg:text-[18px] sm:text-[16px] text-[15px]">
                  Subhi Goyal
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-[#0674BB] lg:text-[18px] sm:text-[16px] text-[15px] mb-2 font-bold uppercase">
                  Duration
                </h3>
                <p className="font-bold lg:text-[18px] sm:text-[16px] text-[15px]">
                  3 Month
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-[#0674BB] lg:text-[18px] sm:text-[16px] text-[15px] mb-2 font-bold uppercase">
                  Budget
                </h3>
                <p className="font-bold lg:text-[18px] sm:text-[16px] text-[15px]">
                  $5000
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-[#0674BB] lg:text-[18px] sm:text-[16px] text-[15px] mb-2 font-bold uppercase">
                  Category
                </h3>
                <p className="font-bold lg:text-[18px] sm:text-[16px] text-[15px]">
                  Category
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-[#0674BB] lg:text-[18px] sm:text-[16px] text-[15px] mb-2 font-bold uppercase">
                  Location
                </h3>
                <p className="font-bold lg:text-[18px] sm:text-[16px] text-[15px]">
                  India
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-[#0674BB] lg:text-[18px] sm:text-[16px] text-[15px] mb-2 font-bold uppercase">
                  Status
                </h3>
                <p className="font-bold bg-[#FFBE44] inline rounded-full px-7 py-1 text-white lg:text-[18px] sm:text-[14px] text-[10px]">
                  Yet To Start
                </p>
              </div>
            </div>
            <p className="text-[#878A99] leading-7">
              It will be as simple as occidental in fact, it will be Occidental.
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is. The
              European languages are members of the same family. Their separate
              existence is a myth. For science, music, sport, etc, Europe uses
              the same vocabulary. The languages only differ in their grammar,
              their pronunciation and their most common words It will be as
              simple as occidental in fact, it will be Occidental. To an English
              person, it will seem like simplified English, as a skeptical
              Cambridge friend of mine told me what Occidental is. The European
              languages are members of the same family. Their separate existence
              is a myth. For science, music, sport, etc, Europe uses the same
              vocabulary. The languages only differ in their grammar, their
              pronunciation and their most common words
            </p>
            <ul className="list-disc pl-5 mt-[30px] text-[#878A99]">
              <li className="mb-1">
                Product Design, Figma (Software), Prototype
              </li>
              <li className="mb-1">
                Four Dashboards : Ecommerce, Analytics, Project,etc.
              </li>
              <li className="mb-1">
                Create calendar, chat and email app pages.
              </li>
              <li className="mb-1">Add authentication pages.</li>
              <li className="mb-1">Content listing.</li>
            </ul>
            <a
              href="/"
              className="text-[#0674BB] text-[18px] font-bold mt-[20px] underline inline-block"
            >
              Read More
            </a>
            <h5 className="text-[20px] font-bold mt-[30px]">RESOURCES</h5>
            <div className="flex lg:flex-row flex-col gap-4 mt-[20px]">
              <a href="/images/myw3schoolsimage.jpg" download>
                <div className="border-2 border-dashed rounded-[8px]">
                  <div className="flex justify-between  items-center xl:min-w-[330px] lg:min-w-[300px]  px-4 py-4">
                    <div className="flex items-center">
                      <div className="bg-[#f3f6f9] px-4 py-4 mr-3 rounded-md shadow-md">
                        <img src="/assets/Frame.svg" />
                      </div>
                      <div>
                        <p>App Pages.zip</p>
                        <p className="text-[#8f939f]">2.2MB</p>
                      </div>
                    </div>
                    <div>
                      <span>
                        <img src="/assets/download.svg" className="h-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/images/myw3schoolsimage.jpg" download>
                <div className="border-2 border-dashed rounded-[8px]">
                  <div className="flex justify-between  items-center xl:min-w-[330px] lg:min-w-[300px]  px-4 py-4">
                    <div className="flex items-center">
                      <div className="bg-[#f3f6f9] px-4 py-4 mr-3 rounded-md shadow-md">
                        <img src="/assets/pdf.svg" />
                      </div>
                      <div>
                        <p>Velin Admin.ppt</p>
                        <p className="text-[#8f939f]">2.4MB</p>
                      </div>
                    </div>
                    <div>
                      <span>
                        <img src="/assets/download.svg" className="h-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex lg:flex-row flex-col items-start mt-[50px]">
              <h5 className="text-[20px] font-bold mb-4 mr-5">
                Technologies :
              </h5>
              <div className="text-[#878A99]">
                <div className="flex  flex-col">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                      {" "}
                      React
                    </span>
                    <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                      {" "}
                      Python
                    </span>
                    <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                      {" "}
                      Solidity
                    </span>
                    <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                      {" "}
                      HTML
                    </span>
                    <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                      {" "}
                      CSS
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                    {" "}
                    React
                  </span>
                  <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                    {" "}
                    Python
                  </span>
                  <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                    {" "}
                    Solidity
                  </span>
                  <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                    {" "}
                    HTML
                  </span>
                  <span className="bg-[#f3f3f3] text-[#878A99] text-[16px] px-2 py-1 rounded-md">
                    {" "}
                    CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

export const SuccessModal = () => {
  return (
    <>
      <Link to="/waitingpage">
        <div className="bg-white rounded-[20px] border-t-[20px] border-[#0674BB] lg:px-8 px-4 lg:py-[20px] py-[20px] shadow-custom sm:p-6 sm:pb-4">
          <div className=" flex items-center lg:mt-[10px] mt-[10px] mb-[20px] lg:mb-[20px] mb-[20px] justify-center text-center text-white text-3xl px-5">
            <a href className="text-[#0674BB] text-[25px] font-bold">
              <img
                src="assets/tanaka-footer.png"
                className="md:h-[60px] h-[40px]"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center mb-[50px] items-center">
            <img src="/assets/sucess.svg" className="h-[50px]" />
            <p className="uppercase text-[#2fb366] text-[25px] font-bold mt-6">
              SUCCESS
            </p>
            <p className="text-[#4A4A4A] text-center mt-8 text-[18px]">
              Thank you for your request. We are working hard to find the best
              service and deals for you.
            </p>
            <p className="text-[#6f6f6f] mt-6 text-center font-light mt-8 text-[18px]">
              Shortly you will find a confirmation in your email.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export const FailureModal = () => {
  return (
    <>
      <div className=" rounded-[20px] border-t-[20px] border-[#0674BB] lg:px-8 px-4 lg:py-[20px] py-[20px] shadow-custom sm:p-6 sm:pb-4">
        <div className=" flex items-center lg:mt-[20px] mt-[10px] mb-[20px] lg:mb-[20px]  justify-center text-center text-white text-3xl px-5">
          <a href className="text-[#0674BB] text-[25px] font-bold">
            <img
              src="assets/tanaka-footer.png"
              className="md:h-[60px] h-[40px]"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center mt-[30px] mb-[50px] items-center">
          <img src="assets/error.svg" className="h-[50px]" />
          <p className="uppercase text-[#F21E1EED] text-[25px] font-bold mt-6">
            Error
          </p>
          <p className="text-[#4A4A4A] text-center mt-8 text-[16px]">
            Thank you for your request. We are unable to continue the process.
            Please try again to complete the request.
          </p>
          <div className="flex justify-center mt-[50px] ">
            <button className="py-2 px-4 shadow-custom  text-white rounded-full bg-[#F32E2E]  md:text-[18px] lg:min-w-[220px] text-center text-[14px] text-white px-[40px] transition-all duration-300">
              Try Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
