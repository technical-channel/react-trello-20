import React, { useState } from "react";
import { Button, message, Steps } from "antd";

import { Link } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const CreateProject = ({
  projectName,
  duration,
  budget,
  description,
  categoryName,
  technologyName,
  locationName,
  fileName,
}) => {
  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState({});
  const next = () => {
    setCurrent(current + 1);
    console.log(values, "this is the data....");
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      id: 1,
      title: "General Details ",
      content: (
        <Step1
          prev={prev}
          next={next}
          current={current}
          stepsLength={4}
          values={values}
          setValues={setValues}
        />
      ),
    },
    {
      id: 2,
      title: "Add- Ons",
      content: (
        <Step2
          prev={prev}
          next={next}
          current={current}
          stepsLength={4}
          values={values}
          setValues={setValues}
        />
      ),
    },
    {
      id: 3,
      title: "Documents",
      content: (
        <Step3
          prev={prev}
          next={next}
          current={current}
          stepsLength={4}
          values={values}
          setValues={setValues}
        />
      ),
    },
    {
      id: 4,
      title: "Preview",
      content: (
        <Step4
          prev={prev}
          next={next}
          current={current}
          stepsLength={4}
          values={values}
          setValues={setValues}
        />
      ),
    },
  ];

  const items = steps.map((menu) => ({
    key: menu.title,
    title: menu.title,
  }));

  return (
    <>
      <div className="">
        <div className="bg-[#F5F5F5] lg:p-7 p-4">
          <div className="flex max-w-[1300px] mx-auto justify-end">
            {/* <Link
              to="/"
              className="common-btn lg:min-w-[220px] text-center text-lg text-white px-[40px] transition-all duration-300 hover:bg-[#115887] py-[10px]"
            >
              Cancel
            </Link> */}
          </div>

          <div className="bg-white shd-box max-w-[1300px] mx-auto lg:mt-[30px] mt-[30px] pb-[2rem] multistep_form  relative mb-3 rounded-md lg:px-6 px-4">
            <div className="xl:p-[30px] p-[30px]">
              <div className=" mb-[20px]">
                <h3 className="text-[#0674BB] sm:text-[25px] text-[22px] font-bold">
                  Create Project
                </h3>
              </div>

              <Steps current={current} items={items} />
              <div className="my-[2rem]">
                <hr />
              </div>

              <div className="steps-content ">{steps[current].content}</div>
              {/* <div className="steps-action relative mt-[2rem]">
                {current < steps.length - 1 && (
                  <button
                    type="primary"
                    className="  text-center text-lg absolute right-0 text-white rounded-full bg-[#0674BB] hover:bg-[#115887]  px-[5rem] py-[10px]  "
                    onClick={() => next()}
                  >
                    Next
                  </button>
                )}
                {current === steps.length - 1 && (
                  <button
                    type="primary"
                    className="  text-center  text-lg text-white  absolute right-0 rounded-full bg-[#0674BB] hover:bg-[#115887] px-[5rem] py-[10px] "
                    onClick={() =>
                      message.success("Project created successfully!")
                    }
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
