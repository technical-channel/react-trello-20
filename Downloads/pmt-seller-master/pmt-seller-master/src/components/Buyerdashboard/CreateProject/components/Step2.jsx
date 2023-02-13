import React, { useEffect, useState } from "react";
import { message, Steps } from "antd";
const Step2 = ({ prev, next, current, stepsLength, setValues, values }) => {
  const [categoryName, SetcategoryName] = useState("");
  const [technologyName, SetTechnologyName] = useState("");
  const [locationName, SetLocationName] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      categoryName.length == 0 ||
      technologyName.length == 0 ||
      locationName.length == 0
    ) {
      setError(true);
    } else {
      next();
    }
    console.log(categoryName, technologyName, locationName);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mb-[30px] lg:gap-[30px]">
          <div className="relative mb-6">
            <select
              required
              onChange={(e) => {
                setValues({ ...values, categories: e.target.value });
                SetcategoryName(e.target.value);
              }}
              //   onChange={(e) => SetcategoryName(e.target.value)}
              id="countries"
              className="bg-[#fff] border  border-[#C2D1D4] text-[#ABABAB] lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option selected>Categories</option>
              <option value="UI">UI Developement</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div className="relative mb-6">
            <select
              required
              onChange={(e) => {
                setValues({ ...values, technology: e.target.value });
                SetTechnologyName(e.target.value);
              }}
              //   onChange={(e) => SetTechnologyName(e.target.value)}
              id="technology"
              className="bg-[#fff] border  border-[#C2D1D4] text-[#ABABAB] lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option selected>Technology</option>
              <option value="java">Java</option>
              <option value="react">Reactjs</option>
              <option value="python">Python</option>
              <option value="Android">Android</option>
            </select>
          </div>
          <div className="relative mb-6">
            <select
              required
              onChange={(e) => {
                setValues({ ...values, location: e.target.value });
                SetLocationName(e.target.value);
              }}
              //   onChange={(e) => SetLocationName(e.target.value)}
              id="location"
              className="bg-[#fff] border  border-[#C2D1D4] text-[#ABABAB] lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option selected>Location</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <img src="/assets/vector-form.svg" className="w-[500px] h-auto" />
        </div>
        <div className="steps-action relative mt-[2rem]">
          {current < stepsLength - 1 && (
            <button
              type="primary"
              className="  text-center text-lg absolute right-0 text-white rounded-full bg-[#0674BB] hover:bg-[#115887]  px-[5rem] py-[10px]  "
              //   onClick={() => next()}
            >
              Next
            </button>
          )}
          {current === stepsLength - 1 && (
            <button
              type="primary"
              className="  text-center  text-lg text-white  absolute right-0 rounded-full bg-[#0674BB] hover:bg-[#115887] px-[5rem] py-[10px] "
              onClick={() => message.success("Project created successfully!")}
            >
              Create
            </button>
          )}
          {current > 0 && (
            <button
              onClick={() => prev()}
              className="text-center  text-lg text-white rounded-full bg-[#0674BB] hover:bg-[#115887] px-[5rem] py-[10px] "
            >
              Previous
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Step2;
