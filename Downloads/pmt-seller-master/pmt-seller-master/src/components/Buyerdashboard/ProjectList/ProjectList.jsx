import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { Table, Divider, Tag, Progress } from "antd";
import { Pagination } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProjectList = () => {
  const [percent, setPercent] = useState(30);
  const [width, setWidth] = useState(window.screen.width);
  const [Date, setDate] = useState(null);
  const [sellerName, setSellerName] = useState("");
  const [Price, SetPrice] = useState(null);
  const [checked, setChecked] = useState(false);
  const [checkedsecond, setCheckedsecond] = useState(false);
  const [checkedThird, setCheckedThird] = useState(false);

  const handleDate = () => {
    setDate(!Date);
  };
  const handleSellerName = () => {
    setSellerName(!sellerName);
  };
  const handlePrice = () => {
    SetPrice(!Price);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });
  }, []);

  const chartWidth = () => {
    if (width <= 428) {
      return 100;
    } else {
      return 150;
    }
  };

  const columns = [
    {
      title: (
        <>
          <span className="font-bold">Progress</span>
        </>
      ),

      dataIndex: "progress",
      key: "progress",
    },
    {
      title: (
        <>
          <span className="font-bold">Project Name</span>
        </>
      ),
      dataIndex: "pname",
      key: "pname",
    },
    {
      title: (
        <>
          <span className="font-bold">Buyer Name</span>
        </>
      ),
      dataIndex: "sname",
      key: "sname",
    },
    {
      title: (
        <>
          <span className="font-bold">Due Date</span>
        </>
      ),
      key: "duedate",
      dataIndex: "duedate",
    },
    {
      title: (
        <>
          <span className="font-bold">Price</span>
        </>
      ),
      key: "price",
      dataIndex: "price",
      render: (text, record) => <a>{record.price}</a>,
    },
  ];

  const data = [
    {
      key: "1",
      progress: (
        <>
          <Progress
            percent={percent}
            strokeWidth={15}
            strokeColor={
              percent < 50 ? "#F24F4F" : percent < 90 ? "#FFBE44" : "#00CD7D"
            }
          />
        </>
      ),
      link: "/",
      pname: (
        <>
          <Link className="" to="/tanaka">
            NFT Project
          </Link>
        </>
      ),
      sname: (
        <>
          <div className="flex items-center">
            <img src="/assets/F6.png" className="mr-3" />
            <p>Daniel Radcliffe</p>
          </div>
        </>
      ),
      duedate: "feb 1, 2022",
      price: "$1000",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      progress: (
        <>
          <Progress
            percent={percent}
            strokeWidth={15}
            strokeColor={
              percent < 50 ? "#F24F4F" : percent < 90 ? "#FFBE44" : "#00CD7D"
            }
          />
        </>
      ),
      pname: (
        <>
          <Link className="" to="/tanaka">
            ICO Project
          </Link>
        </>
      ),
      sname: (
        <>
          <div className="flex items-center">
            <img src="/assets/F8.png" className="mr-3" />
            <p>Dani Radcli</p>
          </div>
        </>
      ),
      duedate: "March 6, 2022",
      price: "$3000",
      tags: ["loser"],
    },
    {
      key: "3",
      progress: (
        <>
          <Progress
            percent={percent}
            strokeWidth={15}
            strokeColor={
              percent < 50 ? "#F24F4F" : percent < 90 ? "#FFBE44" : "#00CD7D"
            }
          />
        </>
      ),
      pname: (
        <>
          <Link to="/tanaka">App Developement</Link>
        </>
      ),
      sname: (
        <>
          <div className="flex items-center">
            <img src="/assets/F1.png" className="mr-3" />
            <p>Mehul</p>
          </div>
        </>
      ),
      duedate: "Jan 1, 2023",
      price: "$5000",
      tags: ["cool", "teacher"],
    },
  ];

  const chartData = [
    {
      type: "In-Progress",
      percent: "50",
      strokeColor: "#FFBE44",
      width: 170,
    },
    {
      type: "completed",
      percent: "20",
      strokeColor: "#00CD7D",
      width: 170,
    },
    {
      type: "yet to start",
      percent: "15",
      strokeColor: "#BB74E9",
      width: 170,
    },
    {
      type: "In-conflict",
      percent: "15",
      strokeColor: "#F24F4F",
      width: 170,
    },
    // {
    //   type: "invitation declined",
    //   percent: "15",
    //   strokeColor: "#FF6584",
    //   width: 170,
    // },
  ];

  return (
    <div>
      <div className="bg-cyan  min-h-screen px-5 py-5">
        <div className="flex md:flex-row flex-col  mx-auto items-center justify-between">
          <p className="text-[#0674BB] lg:text-[22px] sm:text-[20px] lg:text-left text-center md:mb-0 mb-[20px] font-bold">
            Project List
          </p>
          {/*<Link
            to="/"
            className="common-btn  md:text-[16px] lg:min-w-[220px] text-center text-[14px] text-white px-[40px] transition-all duration-300 hover:bg-[#115887] py-[10px]"
          >
            Back
          </Link>*/}
        </div>

        <div className="bg-white mx-auto sm:mx-5 mx-0 mt-5 py-2 sm:px-10 px-2 rounded-[30px] h-[43rem]">
          <div className=" flex justify-end my-5">
            {/* Date toggle data */}
            {Date ? (
              <div className="flex flex-wrap mt-5 gap-3">
                <div>
                  <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="Start Date"
                    showTime={{
                      defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                    }}
                  />
                </div>
                <div>
                  <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="End Date"
                    showTime={{
                      defaultValue: dayjs("00:00:00", "HH:mm:ss"),
                    }}
                  />
                </div>
                {/* <DatePicker /> */}
              </div>
            ) : (
              <></>
            )}
            {/* Close Date togggle Data */}
            {/* Seller Name */}
            {sellerName ? (
              <form className="flex mt-[20px] mb-[20px] items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full ml-2 mr-2">
                  {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <img src="/assets/srvh.png" />
                            </div> */}
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Seller Name"
                    required
                  />
                </div>
              </form>
            ) : (
              <></>
            )}

            {/* Close Seller Name */}

            {/* Price Set */}
            {Price ? (
              <form className="flex mt-[20px] mb-[20px] items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Price
                </label>
                <div className="flex gap-3 relative w-full">
                  {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <img src="/assets/srvh.png" />
                            </div> */}
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Min Price"
                    required
                  />

                  <input
                    type="text"
                    id="simple-search"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Max Price"
                    required
                  />
                </div>
              </form>
            ) : (
              <></>
            )}
            {/* Close Price Set */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center  px-4 py-2 text-sm font-medium ">
                  <img src="/assets/filtersss.svg" className="w-[60%] " />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1  px-5">
                    <Menu.Item>
                      {({ active }) => (
                        <form className="flex mt-[20px] mb-[20px] items-center">
                          <label htmlFor="simple-search" className="sr-only">
                            Search
                          </label>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <img src="/assets/srvh.png" />
                            </div>
                            <input
                              type="text"
                              id="simple-search"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                              placeholder="Search"
                              required
                            />
                          </div>
                        </form>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex items-center mb-5">
                          <input
                            id="checkbox-item-1"
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              setChecked(e.target.checked);
                              handleDate();
                            }}
                            className="w-4 h-4 text-blue-600 bg-[#fff] border-2  border-[#ABABAB] focus:ring-blue-500  focus:ring-2"
                          />
                          <label
                            htmlFor="checkbox-item-1"
                            className="ml-2 text-[16px] font-medium text-gray-900"
                          >
                            Due Date
                          </label>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex items-center mb-5">
                          <input
                            id="checkbox-item-2"
                            type="checkbox"
                            checked={checkedThird}
                            onChange={(e) => {
                              setCheckedThird(e.target.checked);
                              handleSellerName();
                            }}
                            className="w-4 h-4 text-blue-600 bg-[#fff] border-2  border-[#ABABAB] focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor="checkbox-item-2"
                            className="ml-2 text-[16px] font-medium text-gray-900"
                          >
                            Buyer Name
                          </label>
                        </div>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex items-center mb-5">
                            <input
                              id="checkbox-item-3"
                              type="checkbox"
                              checked={checkedsecond}
                              onChange={(e) => {
                                setCheckedsecond(e.target.checked);
                                handlePrice();
                              }}
                              defaultValue
                              className="w-4 h-4 text-blue-600 bg-[#fff] border-2 border-[#ABABAB] focus:ring-blue-500 focus:ring-2"
                            />
                            <label
                              htmlFor="checkbox-item-3"
                              className="ml-2 text-[16px] font-medium text-gray-900"
                            >
                              Price (Min-Max)
                            </label>
                          </div>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="mt-5 flex justify-between gap-4 w-max-full overflow-auto">
            {chartData.map((d, i) => (
              <div className="">
                <Progress
                  type="circle"
                  percent={d.percent}
                  strokeColor={d.strokeColor}
                  strokeLinecap="butt"
                  strokeWidth={8}
                  width={chartWidth()}
                  format={(percent) => (
                    <p className="phone:text-lg text-sm flex flex-col items-center">
                      <span
                        className="capitalize font-semibold"
                        style={{
                          color: d.strokeColor,
                        }}
                      >
                        {d.type}
                      </span>

                      <span>{d.percent} %</span>
                    </p>
                  )}
                />
              </div>
            ))}
          </div>

          <div className="my-10 bg-white border rounded-lg w-max-full font-bold">
            <Table
              columns={columns}
              dataSource={data}
              footer={false}
              pagination={false}
              scroll={{
                x: 900,
              }}
            />
          </div>
          <div className="flex justify-center">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
