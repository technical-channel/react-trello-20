import React from "react";
import { Link } from "react-router-dom";
// import LoginHeader from "./LoginHeader";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    // navigate("/dashboard");
    // console.log(navigate);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div>
        <div className="bg-login-img h-[100%] bg-cover bg-center  bg-no-repeat">
          <LoginHeader />
          <div className="py-[5rem] px-5 ">
            <div className="main-sec pb-[40px] xl:max-w-[1000px] xl_width-another lg:max-w-[1300px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
              <div className="bg-white box-custom rounded-md  lg:px-[40px] px-[20px] lg:pt-[50px]  lg:pb-[80px] pb-[40px]">
                <div className="flex lg:flex-row lg-pt-0 pt-[60px]  items-center gap-6 flex-col">
                  <div className="flex-1 flex menus-start lg:items-center justify-center">
                    <img
                      src="assets/hero-dash.png"
                      className="xl:h-full lg:h-[400px] md:block hidden lg:h-full md:h-[300px] h-[150px]"
                    />
                    <img
                      src="assets/Feb-Business_9.jpg"
                      className="xl:h-auto lg:h-[400px] md:hidden block md:h-[300px] h-[200px]"
                    />
                  </div>
                  <div className="flex-1 lg:mt-[0px] xl:pr-[80px] xl:pl-[40px]  mt-[50px]">
                    <Form onFinish={onFinish}>
                      <h3 className="text-[#0674BB] text-center text-[25px] font-bold mb-8">
                        Forgot Password
                      </h3>
                      <div className="grid grid-cols-1 gap-[30px]">
                        <div className="grid grid-cols-1 gap-[30px]">
                          <div className="relative ">
                            {/* <input
                          type="email"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Email address*"
                        /> */}
                            <Form.Item
                              label=""
                              name="email"
                              rules={[
                                {
                                  pattern: new RegExp(
                                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                  ),
                                  message: "Wrong Email Format",
                                },
                                {
                                  required: true,
                                  message: "Please Enter your email!",
                                },
                              ]}
                              hashFeedback
                              //   <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                              //   <i className="fa-solid fa-circle-user" />
                              // </span>
                            >
                              <Input autoComplete="off" placeholder="Email *" />
                            </Form.Item>
                            {/* <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                          <i className="fa-solid fa-at" />
                        </span> */}
                          </div>
                          <div className="relative">
                            {/* <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Password*"
                        /> */}
                            <Form.Item
                              label=""
                              name="password"
                              rules={[
                                {
                                  pattern: new RegExp(
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*.?&]{8,30}$/
                                  ),
                                  message: "Wrong Password Format",
                                },
                                {
                                  required: true,
                                  message: "Please Enter new Password",
                                },
                              ]}
                              hashFeedback
                              //   <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                              //   <i className="fa-solid fa-circle-user" />
                              // </span>
                            >
                              <Input.Password
                                autoComplete="off"
                                placeholder="New Password *"
                              />
                            </Form.Item>

                            {/* <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className />
                        </span>
                        <span className="absolute top-[15px] right-[10px]">
                          <i className="fa-solid fa-eye text-[16px] text-[#0674BB]" />
                        </span> */}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-[30px]">
                          <div className="relative ">
                            {/* <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          placeholder="Re-Enter-Password*"
                        /> */}
                            <Form.Item
                              label=""
                              name="Re-password"
                              dependencies={["password"]}
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input your Confirm Password!",
                                },
                                ({ getFieldValue }) => ({
                                  validator(_, value) {
                                    // if(!value || getFieldValue('password'){
                                    //   return Promise.resolve()
                                    // }
                                    // return Promise.reject('your password dose not match')
                                    // })
                                    if (
                                      !value ||
                                      getFieldValue("password") === value
                                    ) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject(
                                      "your password dose not match"
                                    );
                                  },
                                }),
                              ]}
                            >
                              <Input.Password placeholder="Confirm Password *" />
                            </Form.Item>
                            {/* <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className />
                        </span>
                        <span className="absolute top-[15px] right-[10px]">
                          <i className="fa-sharp fa-solid fa-eye-slash text-[16px] text-[#84a2a9]" />
                        </span> */}
                          </div>
                        </div>
                      </div>

                      <a
                        className="lg:mt-[25px] lg:max-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium"
                        // href="/forgototp"
                      >
                        <button
                          type="submit"
                          className="flex items-center justify-center text-base"
                        >
                          Forget Password
                        </button>
                      </a>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
