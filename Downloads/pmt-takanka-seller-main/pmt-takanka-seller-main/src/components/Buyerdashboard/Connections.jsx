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
      gmail: "Tanakamarketplacegmail.com",
      projects: 100,
      date: "12-Nov-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/connectionimg.svg",
      name: "Donald Risher",
      gmail: "Tanakamarketplacegmail.com",
      projects: 100,
      date: "12-Nov-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/connectionimg.svg",
      name: "Donald Risher",
      gmail: "Tanakamarketplacegmail.com",
      projects: 100,
      date: "12-Nov-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/connectionimg.svg",
      name: "Donald Risher",
      gmail: "Tanakamarketplacegmail.com",
      projects: 100,
      date: "12-Nov-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/connectionimg.svg",
      name: "Donald Risher",
      gmail: "Tanakamarketplacegmail.com",
      projects: 100,
      date: "12-Nov-2022",
    },
    {
      id: 1,
      imgUrl: "/assets/connectionimg.svg",
      name: "Donald Risher",
      gmail: "Tanakamarketplacegmail.com",
      projects: 100,
      date: "12-Nov-2022",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] lg:p-7 p-4 min-h-screen">
      <div className="flex md:flex-row flex-col  mx-auto items-center justify-between">
        <p className="text-[#0674BB] lg:text-[22px] text-[15px] lg:text-left text-center md:mb-0 mb-[20px] font-bold">
          Tanaka Project Management Tool
        </p>
        <a
          href="Buyer_dashboard.htmll"
          className="common-btn  md:text-[16px] lg:min-w-[220px] text-center text-[14px] text-white px-[40px] transition-all duration-300 hover:bg-[#115887] py-[10px]"
        >
          Back
        </a>
      </div>
      <div className="bg-white xl:px-[60px] px-[40px] px-[20px] shd-box lg:mt-[40px] mt-[30px] multistep_form rounded-lg  pt-[30px]  pb-[80px]  rounded-md">
        <h3 className="lg:text-[25px] text-[20px]  text-[#0674BB] mb-10 font-bold">
          Buyer List
        </h3>
        {data.map((data, index) => {
          return (
            <>
              <div className="border-b-2 pb-[30px] pt-[0px] border-[#0674BB] border-dashed border-0">
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
