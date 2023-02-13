import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="flex justify-center mb-6">
        <h3 className="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center flex flex-row">
          <span>Change </span>
          <span>Password</span>
        </h3>
      </div>
      <div className="shadow-boxxx  relative z-40 mx-auto xl:max-w-[60%] lg:min-w-[60%]  bg-white   min-w-[100%]  lg:min-h-[350px] min-h-[350px] rounded-[15px]">
        <div className="">
          <div className="bg-[#147CBF] relative h-[30px] rounded-t-[15px]"></div>

          {/* <form className="px-[100px] mt-[80px] bg-[#fff]">
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
              <div className="mb-3">
                <input
                  type="text"
                  id="email"
                  className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Old Password"
                  required=""
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="password"
                  className="bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter New Password"
                  required=""
                />
              </div>
            </div>
            <a
              href="otp.html"
              className="lg:mt-[20px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[10px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
            >
              Set Password
            </a>
          </form> */}
          <Form className="px-5 mt-[50px] bg-[#fff]" onFinish={onFinish}>
            <div className="grid lg:grid-cols-1 grid-cols-1 ">
              <div className="mb-6">
                {/* For password : regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*.?&]{8,30}$/ */}
                {/* <input
                  className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                  type="text"
                  id="country"
                  value="Old Password"
                  readonly
                ></input> */}
                <Form.Item
                  label=""
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter old password!",
                    },
                  ]}
                >
                  <Input.Password
                    autoComplete="off"
                    placeholder="Enter old Password"
                  />
                </Form.Item>
              </div>
              <div className="mb-6">
                {/* <input
                  className=" font-bold bg-white border border-[#C2D1D4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray opacity-50"
                  type="text"
                  id="country"
                  value="Enter new Password"
                  readonly
                ></input> */}
                <Form.Item
                  label=""
                  name="newpassword"
                  rules={[
                    {
                      pattern: new RegExp(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*.?&]{8,30}$/
                      ),
                      message: "Wrong Password Format",
                    },
                    { required: true, message: "Please Enter new Password" },
                  ]}
                >
                  {/* hashFeedback
                  //   <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                  //   <i className="fa-solid fa-circle-user" />
                  // </span> */}

                  <Input.Password
                    autoComplete="off"
                    placeholder="Enter new Password"
                  />
                </Form.Item>
              </div>
            </div>
            <button
              type="submit"
              className="lg:mt-[5px] lg:max-w-[300px] max-w-[200px] mx-auto mt-[10px] flex justify-center inline-block lg:text-[18px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom"
            >
              Set Password
            </button>
          </Form>
        </div>
      </div>
      <div className="pt-[11.9rem]">
        {/* <img src="/public/assets/BG2.svg" /> */}
        <img src="assets/BG2.svg" />
      </div>
    </>
  );
};

export default ChangePassword;
