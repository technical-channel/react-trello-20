import React from "react";
import { Link } from "react-router-dom";

import { Table, Divider, Tag } from "antd";
import { data } from "autoprefixer";
const Connections = () => {
  const data = [
    {
      id: 1,
      imgUrl: "/assets/connectionimg.svg",
      name: "Donald Risher",
      gmail: "Tanakamarketplacgmail.com",
      projects: 101,
      date: "12-July-2022",
    },
    {
      id: 1,
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "Ritik",
      gmail: "Ritikmarketplace@gmail.com",
      projects: 102,
      date: "12-Aug-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/F8.png",
      name: "Mehul",
      gmail: "Mehulmarketplacegmail.com",
      projects: 103,
      date: "12-Sep-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/F1.png",
      name: "Donald",
      gmail: "Donaldplacegmailgmail.com",
      projects: 104,
      date: "12-Oct-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/F6.png",
      name: "Risher",
      gmail: "Risher1234567$$&gmail.com",
      projects: 105,
      date: "12-Nov-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/F7.png",
      name: "Abhishek",
      gmail: "Abhishek1234567gmail.com",
      projects: 106,
      date: "12-Dec-2022",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] lg:p-7 p-4">
      <div className="flex md:flex-row flex-col  mx-auto items-center justify-between">
        {/* <p className="text-[#0674BB] lg:text-[22px] text-[15px] lg:text-left text-center md:mb-0 mb-[20px] font-bold">
          Tanaka Project Management Tool
        </p> */}
        {/* <a
          href="Buyer_dashboard.htmll"
          className="common-btn  md:text-[16px] lg:min-w-[220px] text-center text-[14px] text-white px-[40px] transition-all duration-300 hover:bg-[#115887] py-[10px]"
        >
          Back
        </a> */}
      </div>
      <div className="bg-white xl:px-[60px] px-[40px] px-[20px] shd-box lg: mt-[15px] multistep_form rounded-lg  pt-[30px]  pb-[80px]  rounded-md">
        <h3 className="lg:text-[25px] text-[20px]  text-[#0674BB] mb-10 font-bold">
          Buyer List
        </h3>
        {data.map((data, index) => {
          return (
            <>
              <div className="border-b-2 pb-[10px] pt-[0px] border-[#0674BB] border-dashed border-0">
                <div className="flex xl:flex-row flex-col justify-between mt-4">
                  <div className="flex md:flex-row flex-col xl:mb-0 mb-4">
                    <img
                      src={process.env.PUBLIC_URL + data.imgUrl}
                      className="mr-2 md:mb-0 mb-3 w-[60px] h-60px rounded-full"
                    />
                    <div>
                      <h3 className="font-bold sm:mb-2 text-[18px] md:text-black text-[#0674BB] sm:text-[18px] text-[16px]">
                        {data.name}
                      </h3>
                      <p className="font-medium word-break">{data.gmail}</p>
                    </div>
                  </div>
                  <div className="xl:mb-0 sm:mb-4">
                    <h3 className="font-bold mb-2 md:text-black text-[#0674BB] sm:text-[18px] text-[16px]">
                      Projects
                    </h3>
                    <p>{data.projects}</p>
                  </div>
                  <div className="xl:mb-0 mb-4">
                    <h3 className="font-bold mb-2 text-[18px] md:text-black text-[#0674BB]">
                      Joined On
                    </h3>
                    <p>{data.date}</p>
                  </div>
                  <div className="xl:mb-0 mb-4">
                    <h3 className="font-bold text-[18px] md:text-black text-[#0674BB] mb-2">
                      Rating
                    </h3>
                    <div>
                      <a href>
                        <i className="fa-solid fa-star text-[#FFA701]" />
                      </a>
                      <a href>
                        <i className="fa-solid fa-star text-[#FFA701]" />
                      </a>
                      <a href>
                        <i className="fa-solid fa-star text-[#FFA701]" />
                      </a>
                      <a href>
                        <i className="fa-solid fa-star text-[#FFA701]" />
                      </a>
                      <a href>
                        <i className="fa-solid fa-star text-[#FFA701]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
