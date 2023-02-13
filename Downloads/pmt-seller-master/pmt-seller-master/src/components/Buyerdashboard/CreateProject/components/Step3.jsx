import React, { useEffect, useState } from "react";
import { message, Steps } from "antd";
const Step3 = ({ prev, next, current, stepsLength, setValues, values }) => {
  const [fileName, SetFileName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileName, "this is the image");
    next();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-w-xl mx-auto">
          <h3 className="text-[#ABABAB] text-[15px] text-right">Optional</h3>
          <div className="bg-[#fff] shadow-xl sm:px-6 px-4 py-8  rounded-lg">
            <label className="flex flex-col justify-center items-center w-full h-40 lg:px-4 px-2 transition bg-white border-2 border-[#DFDFDF] border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <div className="mb-[30px] ">
                <img src={fileName} className="h-8 w-8" />
              </div>
              <span className="flex items-center space-x-2">
                <span className="font-medium sm:text-[16px] text-[10px] text-[#ADADAD]">
                  Drag &amp; Drop your images here, or
                  <span className="text-[#0674BB] font-bold">browse</span>
                </span>
              </span>
              <input
                onChange={(e) => {
                  setValues({
                    ...values,
                    file: URL.createObjectURL(e.target.files[0]),
                  });
                  // console.log(
                  //   URL.createObjectURL(e.target.files[0]),
                  //   "data...."
                  // );
                  SetFileName(URL.createObjectURL(e.target.files[0]));
                }}
                type="file"
                name="file_upload"
                className="hidden"
              />
            </label>
          </div>
        </div>
        <div className="steps-action relative mt-[2rem]">
          {current < stepsLength - 1 && (
            <button
              type="submit"
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

export default Step3;
