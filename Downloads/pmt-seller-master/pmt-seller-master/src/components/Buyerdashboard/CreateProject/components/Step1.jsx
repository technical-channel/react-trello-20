import React, { useEffect, useState } from "react";
import { InputNumber, message, Steps } from "antd";
import CreateProject from "../CreateProject";
import { DatePicker, Space } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

const Step1 = ({ prev, next, current, stepsLength, setValues, values }) => {
  const [projectName, SetProjectName] = useState("");
  const [date, SetDate] = useState("");
  const [budget, SetBudget] = useState("");
  const [description, SetDescription] = useState("");
  const [error, setError] = useState(false);
  const { TextArea } = Input;

  const handleSubmit = () => {
    next();
    console.log(projectName, budget, description, date);
  };
  return (
    <>
      <Form className="" onFinish={handleSubmit}>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mb-[30px] lg:gap-[30px]">
          <div className="relative mb-6">
            {/* <input
              onChange={(e) => {
                setValues({ ...values, fullName: e.target.value });
                SetProjectName(e.target.value);
              }}
              type="text"
              id="full-name"
              name="full-name"
              className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Project name"
              required
            /> */}
            {/* /^[A-Za-z0-9 .']{1,40}$/ */}
            <Form.Item
              label=""
              name="Project name"
              placeholder="Project Name"
              rules={[
                {
                  pattern: new RegExp(/^[A-Za-z0-9 .']{1,40}$/),
                  message: "Wrong Project name Format",
                },
                {
                  required: true,
                  message: "Please Enter Your Project name!",
                },
              ]}
            >
              <Input
                placeholder="Project Name"
                onChange={(e) => {
                  setValues({ ...values, fullName: e.target.value });
                  SetProjectName(e.target.value);
                }}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col relative mb-6">
            {/* <input
              onChange={(e) => {
                setValues({ ...values, Date: e.target.value });
                SetDate(e.target.value);
              }}
              // className="textbox-n"
              type="Date"
              onfocus="('this.type='date')"
              id="date"
              name="Date"
              className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Date"
              required
            /> */}
            <Form.Item
              label=""
              name="Duration"
              rules={[
                {
                  required: true,
                  message: "Please input your Duration",
                },
              ]}
            >
              <DatePicker
                onChange={(e) => {
                  console.log(e.$d);
                  setValues({ ...values, date: e.$d });
                  SetDate(e.$d);
                }}
                style={{ width: "100%" }}
                picker="date"
                placeholder="Duration"
              />
            </Form.Item>
          </div>

          <div className="relative mb-6">
            {/* <input
              onChange={(e) => {
                setValues({ ...values, budget: e.target.value });
                SetBudget(e.target.value);
              }}
              type="text"
              id="budget"
              name="budget"
              className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Budget"
              required
            /> */}
            <Form.Item
              label=""
              name="budget"
              rules={[
                {
                  required: true,
                  message: "Please input your Budget!",
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Budget"
                min={1}
                onChange={(e) => {
                  setValues({ ...values, budget: e.target.value });
                  SetBudget(e.target.value);
                }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="w-full mb-4 rounded-lg bg-white">
            {/* <textarea
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
                SetDescription(e.target.value);
              }}
              id="description"
              rows={8}
              className="w-full text-sm border border-[#C2D1D4] text-gray-900 bg-white rounded-[10px] py-2 px-3 focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB]"
              placeholder="Description"
              defaultValue={""}
              required
            /> */}
            <Form.Item
              label=""
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your Text!",
                },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Type Here..."
                maxLength={300}
                onChange={(e) => {
                  setValues({ ...values, description: e.target.value });
                  SetDescription(e.target.value);
                }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="steps-action relative mt-[2rem]">
          {current < stepsLength - 1 && (
            <button
              type="submit"
              className="  text-center text-lg absolute right-0 text-white rounded-full bg-[#0674BB] hover:bg-[#115887]  px-[5rem] py-[10px]  "
              // onClick={() => (!error ? next() : null)}
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
      </Form>
    </>
  );
};

export default Step1;
