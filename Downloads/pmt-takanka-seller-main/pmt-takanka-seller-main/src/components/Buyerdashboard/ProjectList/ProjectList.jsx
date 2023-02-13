import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { Table, Divider, Tag, Progress } from "antd";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProjectList = () => {
  const [percent, setPercent] = useState(30)
  const [width, setWidth] = useState(window.screen.width)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width)
    })
  }, [])

  const chartWidth = () => {
    if (width <= 428) {
      return 100
    } else {
      return 150
    }
  }

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
      responsive: ["sm"],
    },
    {
      title: (
        <>
          <span className="font-bold">Buyer Name</span>
        </>
      ),
      dataIndex: "sname",
      key: "sname",
      responsive: ["sm"],
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
            strokeColor={percent < 50 ? "#F24F4F" : percent < 90 ? "#FFBE44" : "#00CD7D"}
          />
        </>
      ),
      link: "/",
      pname: (
        <>
          <Link className="" to="/tanaka">
            Redesign - Landing Page
          </Link>
        </>
      ),
      sname: (
        <>
          <div className="flex items-center">
            <img src="/assets/gggggg.png" className="mr-3" />
            <p>Daniel Radcliffe</p>
          </div>
        </>
      ),
      duedate: "Dec 1, 2022",
      price: "$5000",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      progress: (
        <>
          <Progress
            percent={percent}
            strokeWidth={15}
            strokeColor={percent < 50 ? "#F24F4F" : percent < 90 ? "#FFBE44" : "#00CD7D"}
          />
        </>
      ),
      pname: (
        <>
          <Link className="" to="/tanaka">
            Redesign - Landing Page
          </Link>
        </>
      ),
      sname: (
        <>
          <div className="flex items-center">
            <img src="/assets/gggggg.png" className="mr-3" />
            <p>Daniel Radcliffe</p>
          </div>
        </>
      ),
      duedate: "Dec 1, 2022",
      price: "$5000",
      tags: ["loser"],
    },
    {
      key: "3",
      progress: (
        <>
          <Progress
            percent={percent}
            strokeWidth={15}
            strokeColor={percent < 50 ? "#F24F4F" : percent < 90 ? "#FFBE44" : "#00CD7D"}
          />
        </>
      ),
      pname: (
        <>
          <Link to="/tanaka">
            Redesign - Landing Page
          </Link>
        </>
      ),
      sname: (
        <>
          <div className="flex items-center">
            <img src="/assets/gggggg.png" className="mr-3" />
            <p>Daniel Radcliffe</p>
          </div>
        </>
      ),
      duedate: "Dec 1, 2022",
      price: "$5000",
      tags: ["cool", "teacher"],
    },
  ];

  const chartData = [
    {
      type: "projects",
      percent: "60",
      strokeColor: "#FFBE44",
      width: 170
    },
    {
      type: "completed",
      percent: "70",
      strokeColor: "#00CD7D",
      width: 170
    },
    {
      type: "yet to start",
      percent: "50",
      strokeColor: "#BB74E9",
      width: 170
    },
    {
      type: "in conflict",
      percent: "40",
      strokeColor: "#F24F4F",
      width: 170
    },
    {
      type: "invitation declined",
      percent: "25",
      strokeColor: "#FF6584",
      width: 170
    }
  ]

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

        <div className="bg-white mx-auto sm:mx-5 mx-0 mt-5 py-2 sm:px-10 px-2 rounded-[30px]">
          <div className=" flex justify-end my-5">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center  px-4 py-2 text-sm font-medium ">
                  <img src="/assets/filtersss.svg" className="w-[60%] " />
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
                            defaultValue
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
                            defaultChecked
                            id="checkbox-item-2"
                            type="checkbox"
                            defaultValue
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
            {
              chartData.map((d, i) => (
                <div className="">
                  <Progress
                    type="circle"
                    percent={d.percent}
                    strokeColor={d.strokeColor}
                    strokeLinecap="butt"
                    strokeWidth={8}
                    width={chartWidth()}
                    format={percent => (
                      <p className="phone:text-lg text-sm flex flex-col items-center">
                        <span className="capitalize font-semibold" style={{
                          color: d.strokeColor
                        }}>
                          {d.type}
                        </span>

                        <span>
                          {d.percent} %
                        </span>
                      </p>
                    )}
                  />
                </div>

              ))
            }
          </div>

          <div className="my-10 bg-white border rounded-lg w-max-full">
            <Table columns={columns} dataSource={data} footer={false} pagination={false} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectList;
