import { data } from "autoprefixer";
import React from "react";

const Expense = () => {
  const data = [
    {
      id: 1,
      amount: "$ 10,000",
      project_name: "Tanaka Project Management",
      imgUrl: "/assets/expense1.png",
      status: "Most Priced",
    },
    {
      id: 1,
      amount: "$ 10,000",
      project_name: "Tanaka Project Management",
      imgUrl: "/assets/expense2.png",
      status: "Least Priced",
    },
    {
      id: 1,
      amount: "$ 10,000",
      project_name: "Tanaka Project Management",
      imgUrl: "/assets/expense3.png",

      status: "Average Price",
    },
  ];
  return (
    <div>
      <div className="">
        <div className="bg-white rounded-md  mb-5 shadow  lg:px-6 px-4 pt-4 pb-[30PX]">
          <h3 className="font-bold lg:text-[18px] text-[16px]">
            Expenses ($75,426)
          </h3>
          <div className="flex flex-col xl:flex-row  gap-6 mt-6">
            {data.map((data, index) => (
              <>
                <div className="box-dashboard shadow rounded-md  flex flex-col justify-center items-center py-4 px-4 flex-1">
                  <h5 className="text-[#0674BB] lg:text-[1.563rem] text-[20px] font-bold">
                    {data.amount}
                  </h5>
                  <p className="mt-3 text-[#9D9D9D]  lg:text-[14px] text-[12px] text-center">
                    {data.project_name}
                  </p>
                  <div className="flex mt-3 items-center justify-center px-2">
                    <img src={data.imgUrl} className="mr-3" />
                    <p className="font-semibold text-[1rem]"> {data.status}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
