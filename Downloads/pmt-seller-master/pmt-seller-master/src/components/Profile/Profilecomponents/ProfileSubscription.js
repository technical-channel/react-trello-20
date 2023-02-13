import React, { useState } from "react";

const ProfileSubscription = () => {
  const [openTab, setOpenTab] = useState(1);
  const handleClick = (number) => {
    setOpenTab(number);
  };
  return (
    <div className="xl:w-[90%] mx-auto lg:w-[90%] w-full lg:px-6 px-4 flex flex-col xl:mt-[30px] mt-[30px]">
      <div className="flex justify-center mb-6">
        <h3 className="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center">
          Subscription Plan
        </h3>
      </div>
      <div className="shadow-boxxx relative z-40 mx-auto xl:min-w-[100%] lg:min-w-[90%] bg-white min-w-[100%] lg:min-h-[700px] min-h-[700px] rounded-[15px]">
        <div className>
          <div className="bg-[#147CBF] relative h-[30px] rounded-t-[15px]" />
          <div className="flex xl:flex-row pb-9 flex-col mx-auto xl:gap-6 gap-3 mt-9 lg:px-6 px-3">
            <div className="xl:w-[25%] w-full">
              <div className="shadow-cardsss mt-[60px] rounded-[15px] xl:px-[30px] px-[20px]  py-[34px] min-h-[410px] lg:text-[18px] text-[16px] ">
                <ul>
                  <li className="mb-8">Invite Buyer/Seller</li>
                  <li className="mb-8">Buyer/Seller Dashboard</li>
                  <li className="mb-8">Text Chat</li>
                  <li className="mb-8">Number of team member</li>
                  <li className="mb-8">Number of team member</li>
                  <li className="mb-8">Zoom Video Call</li>
                </ul>
              </div>
            </div>
            <div className="xl:w-[75%] mx-auto w-full">
              <div className="flex xl:flex-row flex-col xl:gap-6 gap-3">
                <div className="w-full xl:mt-0 mt-8">
                  <h3 className="uppercase mb-6 text-center lg:text-[20px] text-[#0674BB] text-[20px]">
                    Free
                  </h3>
                  <div
                    onClick={() => handleClick(1)}
                    className={`${
                      openTab == 1 ? "bg-[#F2FAFF]" : "bg-white"
                    } shadow-cardsss hover:bg-[#F2FAFF] rounded-[15px]  py-[40px]`}
                  >
                    <ul className="text-center">
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6 text-[#0674BB] font-bold">5</li>
                      <li className="mb-6 text-[#0674BB] font-bold">4</li>
                      <li className="mb-6 text-[#0674BB] font-bold">250 MB</li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-xmark text-[#0674BB]" />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`${
                      openTab == 1 ? "bg-[#F2FAFF]" : "bg-white"
                    } border mt-8 border-[#BBBBBB] hover:bg-[#F2FAFF] px-4 py-2 rounded  `}
                  >
                    <span className="uppercase lg:text-[20px] text-[20px] font-bold">
                      free
                    </span>
                    <p>
                      <span className="text-[#0674BB] lg:text-[20px] text-[20px] font-bold">
                        $ 0
                      </span>
                      &nbsp;
                      <sub className="lg:text-[16px] text-[16px]">
                        Per Month
                      </sub>
                    </p>
                  </div>
                </div>
                <div className="w-full xl:mt-0 mt-8">
                  <h3 className="uppercase mb-6 text-center lg:text-[20px] text-[#0674BB] text-[20px]">
                    PREMIUM
                  </h3>
                  <div
                    onClick={() => handleClick(2)}
                    className={`${
                      openTab == 2 ? "bg-[#F2FAFF]" : "bg-white"
                    } shadow-cardsss hover:bg-[#F2FAFF] rounded-[15px]  py-[40px]`}
                  >
                    <ul className="text-center">
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6 text-[#0674BB] font-bold">10</li>
                      <li className="mb-6 text-[#0674BB] font-bold">8</li>
                      <li className="mb-6 text-[#0674BB] font-bold">500 MB</li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`${
                      openTab == 2 ? "bg-[#F2FAFF]" : "bg-white"
                    } border mt-8 border-[#BBBBBB] hover:bg-[#F2FAFF] px-4 py-2 rounded  `}
                  >
                    <span className="uppercase lg:text-[20px] text-[20px] font-bold">
                      PREMIUM
                    </span>
                    <p>
                      <span className="text-[#0674BB] lg:text-[20px] text-[20px] font-bold">
                        $ 175
                      </span>
                      &nbsp;
                      <sub className="lg:text-[16px] text-[16px]">
                        Per Month
                      </sub>
                    </p>
                  </div>
                </div>
                <div className="w-full xl:mt-0 mt-8">
                  <h3 className="uppercase mb-6 text-center text-[#0674BB] lg:text-[20px] text-[20px]">
                    PLATINUM
                  </h3>
                  <div 
                  onClick={() => handleClick(3)}
                  className={`${
                    openTab == 3 ? "bg-[#F2FAFF]" : "bg-white"
                  } shadow-cardsss hover:bg-[#F2FAFF] rounded-[15px]  py-[40px]`}>
                    <ul className="text-center">
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                      <li className="mb-6 text-[#0674BB] font-bold">
                        Multiple
                      </li>
                      <li className="mb-6 text-[#0674BB] font-bold">
                        Multiple
                      </li>
                      <li className="mb-6 text-[#0674BB] font-bold">1 GB</li>
                      <li className="mb-6">
                        <span>
                          <i className="fa-solid fa-check text-[#0674BB]" />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div   className={`${
                      openTab == 3 ? "bg-[#F2FAFF]" : "bg-white"
                    } border mt-8 border-[#BBBBBB] hover:bg-[#F2FAFF] px-4 py-2 rounded  `}
                  >
                    <span className="uppercase lg:text-[20px] text-[20px] font-bold">
                      PLATINUM
                    </span>
                    <p>
                      <span className="text-[#0674BB] lg:text-[20px] text-[20px] font-bold">
                        $ 500
                      </span>
                      &nbsp;
                      <sub className="lg:text-[16px] text-[16px]">
                        Per Month
                      </sub>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-8 mt-8">
                <a
                  href="/"
                  className="lg:mt-[25px] w-full mx-auto mt-[30px] flex justify-center  lg:text-[20px] text-[16px] transition-all duration-300 rounded-[5px] hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium"
                >
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSubscription;
