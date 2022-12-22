import React from "react";

import { Checkbox } from "antd";
const Sidebar = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="bg-white shadow rounded-xl px-5 py-4">
      <div className="flex justify-between gap-5 items-center  ">
        <h4 className="uppercase text-lg text-Grayscale">Filters</h4>
        <img src={process.env.PUBLIC_URL + "./assets/toggler.png"} alt="" />
      </div>
      <div className="">
        <div className="flex flex-col my-3">
          <h4 className="text-sm  py-2 text-grey">Subcategories</h4>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className=" pt-4 
            pb-4"
          >
            Crops
          </Checkbox>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            Land
          </Checkbox>
          <Checkbox
            onChange={onChange}
            className="pb-4"
            style={{ marginInlineStart: 0 }}
          >
            Water
          </Checkbox>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            Sustainability
          </Checkbox>
        </div>

        <div className="">
          <h4 className="text-sm  text-grey capitalize">
            Expected annual returns
          </h4>

          <input
            id="customRange1"
            className="form-range range pr-6 accent-green-500 border-0 py-3"
            type="range"
          ></input>
        </div>

        <div className="">
          <h4 className="text-sm  text-grey capitalize">Risk </h4>

          <input
            id="customRange1"
            className="form-range range pr-6  accent-red  border-0 py-3"
            style={{background: 'linear-gradient(90deg, #004987 1.29%, #63B8C2 97.79%)'}}
            type="range"
          ></input>
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm text-grey capitalize ">token price </h4>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4 pt-4 "
          >
            $1 a $50
          </Checkbox>
          <Checkbox
            onChange={onChange}
            className="pb-4"
            style={{ marginInlineStart: 0 }}
          >
            $50 a $100
          </Checkbox>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            $100 a $250
          </Checkbox>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            $250 a $500
          </Checkbox>{" "}
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            $500 a $1,000
          </Checkbox>{" "}
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            {">  $1,000"}
          </Checkbox>
        </div>

        <div className="flex flex-col">
          <h4 className="text-sm text-grey capitalize ">available tokens</h4>
          <Checkbox
            onChange={onChange}
            className=" pt-4 pb-4"
            style={{ marginInlineStart: 0 }}
          >
            100 to 1,000
          </Checkbox>
          <Checkbox
            onChange={onChange}
            className="pb-4"
            style={{ marginInlineStart: 0 }}
          >
            1,000 to 2,500
          </Checkbox>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            2,500 to 5,000
          </Checkbox>

          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            5,000 to 10,000
          </Checkbox>
          <Checkbox
            onChange={onChange}
            style={{ marginInlineStart: 0 }}
            className="pb-4"
          >
            {"> 10,000"}
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
