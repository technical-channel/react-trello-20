import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import ReCaptach from "./ReCaptach";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/dashboard");
    console.log(navigate);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="bg-login-img bg-cover bg-center  bg-no-repeat ">
        <LoginHeader />
        <div className="py-[7.6rem] px-5 ">
          <div className="main-sec pb-[30px] lg:pb-[0px] xl:max-w-[1500px] xl_width-another lg:max-w-[1400px] md:max-w-[1000px] sm:max-w-[700px] px-5 mx-auto">
            <div className="bg-white box-custom rounded-md  lg:px-[40px] px-[20px] pt-[60px] pb-[60px]">
              <div className="flex lg:flex-row gap-6 flex-col">
                <div className="flex-1 flex menus-start lg:items-center justify-center">
                  <img
                    src="assets/hero-dash.png"
                    className="xl:h-auto hero-img lg:h-[400px] md:h-[300px] h-[200px]"
                  />
                </div>
                <div className="flex-1 lg:mt-[0px] xl:pr-[80px] xl:pl-[40px]  mt-[0px]">
                  <Form onFinish={onFinish}>
                    <h3 className="text-[#0674BB] text-center lg:text-[30px] text-[25px] font-bold mb-[40px]">
                      Login
                    </h3>
                    <div className="grid grid-cols-1 gap-[30px]">
                      <div className="relative mb-6">
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
                          <i className="fa-solid fa-at"></i>
                        </span> */}
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="relative ">
                        {/* <input
                          type="password"
                          id="full-name"
                          name="full-name"
                          className="w-full shadow-lg pl-[40px] pr-[35px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                              message: "Please Enter Your Password",
                            },
                          ]}
                          hashFeedback
                          //   <span className="absolute top-[10px] left-[10px] text-[20px] text-[#84a2a9]">
                          //   <i className="fa-solid fa-circle-user" />
                          // </span>
                        >
                          <Input.Password
                            autoComplete="off"
                            placeholder="Password *"
                          />
                        </Form.Item>
                        {/* <span className="absolute top-[15px] left-[10px]">
                          <img src="assets/lock.svg" className="w-[20px]" />
                        </span> */}
                        {/* <a
                          href="/;"
                          className="absolute top-[15px] right-[10px]"
                        >
                          <i className="fa-solid fa-eye text-[16px] text-[#0674BB]"></i>

                          <i className="fa-solid hidden  fa-eye-slash text-[16px] text-gray-400"></i>
                        </a> */}
                      </div>
                      <Link
                        to="/forget"
                        className="text-right text-[#0674BB] font-medium text-[14px] text-gray-500 py-3 "
                      >
                        Forgot Password
                      </Link>
                    </div>

                    <div className="w-full mx-auto ">
                      <ReCaptach />
                    </div>

                    <button
                      className="lg:mt-[25px] lg:max-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] 
                                      text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium"
                    >
                      Login
                    </button>

                    <div className="mt-5 text-center font-medium">OR</div>

                    <div className="mt-6">
                      <hr className="w-[60%] mx-auto" />
                      <p className="mt-6 lg:text-[16px] text-[14px] text-center text-[#ababab]">
                        Don't have an account?
                        <Link
                          to="/signup"
                          className="lg:text-[16px]  text-[14px] text-[#0674BB] font-bold"
                        >
                          &nbsp;Sign Up
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
