import {Form, Input, Button, message, Alert} from "antd";
import React, {useContext, useState} from "react";
// import { SendOTP, verifyOTP } from "../Graphql/userM";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {SendOTP, verifyOTP} from "../../graphql/mutations/userMutations";
import {AuthContext} from "../../providers/AuthProvider";
import {useWeb3React} from "@web3-react/core";
import Metamask from "../../assets/metamask-icon.svg"
import useAuth from "../../hooks/useAuth";

function Authentication() {
  const [verify, setVerify] = useState(false);
  const [otpValue, setOtpValue] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {account, active} = useWeb3React()
  const {connectWallet} = useAuth()

  const {checkAuth} = useContext(AuthContext)
  const [loggedIn, setLoggedIn] = checkAuth

  const [SendOTPVerfication, {error: sendError}] = useMutation(SendOTP);
  const [VerifyOTP, {error: verifyError}] = useMutation(verifyOTP);

  const verifyOtp = () => {
    VerifyOTP({
      variables: {
        name: name,
        username: username,
        email: email,
        password: password,
        walletAddress: account,
        otp: otpValue,
      },
    }).then((res) => {
      console.log(res);
      setLoggedIn(true)
      // localStorage.setItem("loggedIn", true)
      // localStorage.setItem("userEmail", email)
      // localStorage.setItem("registerdWallet", res.data.createUser.data[0].walletAddress)
      navigate("/");
      // setLoggedIn(true)
      // setVerify(res?.data?.sendTop?.status);
    }).catch((err) => {
      console.log(err)
    })
  }

  const sendOtpVerification = async () => {
    await SendOTPVerfication({
      variables: {
        name: name,
        email: email,
        password: password,
        walletAddress: account
      },
    }).then((res) => {
      console.log(res.data.sendOTP.status);
      const status = res.data.sendOTP.status;
      setVerify(res?.data?.sendOTP?.status);
      if (name !== null && email !== null && password !== null) {
        if (status === 200) {
          setSent(true)
          message.success("Otp send..");
        } else if (status == 403) {
          message.error("user already..");
        }
      } else {
        message.error("Please fill input field");
      }
    }).catch((err) => {
      console.log(err.message)
    })
  };

  const handleRegister = () => {
    if (sent) {
      verifyOtp()
    } else {
      sendOtpVerification()
    }
  }

  return (
    <div className="bg-white ">
      <div className="max-w-[400px] mx-auto py-10  ">
        <h1 className="flex justify-center text-2xl text-[#4AB6C1]">Register</h1>
        {
          verifyError && (
            <Alert
              message={verifyError.message}
              type="error"
              closable
            />
          )
        }
        {
          sendError && (
            <Alert
              message={sendError.message}
              type="error"
              closable
            />
          )
        }
        <Form layout="vertical" onFinish={handleRegister}>
          {
            !sent && (
              <>
                <div className="my-3 ">
                  <Form.Item
                    label="Full Name"
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "Please input Full Name !",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className=""
                      style={{width: "100%"}}
                      placeholder="Jane Doe"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="my-3 ">
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input Username !",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className=""
                      style={{width: "100%"}}
                      placeholder="John Doe"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="my-3 ">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input Email !",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      className=""
                      style={{width: "100%"}}
                      placeholder="JaneDoe@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </>
            )
          }
          {!verify && !sent ? (
            <div className="my-3 ">
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password !",
                  },
                ]}
              >
                <Input.Password
                  type=""
                  className=""
                  style={{width: "100%"}}
                  placeholder="**********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </div>
          ) :
            sent && (
              <div className="my-3 ">
                <Form.Item
                  label="Please enter the OTP sent to your email."
                  name="otp"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter OTP!",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    className=""
                    style={{width: "100%"}}
                    placeholder="OTP"
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                </Form.Item>
              </div>
            )
          }

          <div className="my-3 ">
            <Form.Item className="flex justify-left w-full">
              <div className="flex gap-2">
                <img src={Metamask} alt="" className="w-[28px]" />
                <div onClick={() => connectWallet()} className="text-[#000000] font-bold border-b border-black pointer">{!active ? "Connect Wallet" : account}</div>
              </div>
            </Form.Item>
          </div>

          <div className="flex justify-between">
            <div className="flex justify-end text-[#009688]">
              {/* <a href="/forget">Forget Password</a> */}
              <a href="/login">
                <h2 className="text-[#009688]">Back To Login </h2>
              </a>
            </div>
            <div className="flex justify-start">
              <Form.Item>
                <Button
                  htmlType="submit"
                  to="item-details"
                  // onClick={() => handleRegister()}
                  disabled={!active}
                >
                  Submit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div >
    </div >
  );
}

export default Authentication;
