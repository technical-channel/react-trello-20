import React, {useContext, useState} from "react";
import {Form, Input, Button, message, Alert} from "antd";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {AuthContext} from "../providers/AuthProvider";
import {LOGIN} from "../graphql/mutations/userMutations";

const Login = () => {
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [Login, {error: loginError}] = useMutation(LOGIN);

  const {checkAuth, userData} = useContext(AuthContext)
  const [user, setUser] = userData
  const [loggedIn, setLoggedIn] = checkAuth

  const Loginhandle = () => {
    Login({
      variables: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res)
        setLoggedIn(true)
        localStorage.setItem("loggedIn", true)
        setUser(res.data.login)
        console.log(res.data.login)
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
      });
  };

  if (loggedIn) {
    return (
      <Navigate to='/' />
    )
  } else {
    return (
      <div>
        <div className="bg-white ">
          <div className="max-w-[300px] w-full mx-auto py-10  ">
            <h1 className="flex justify-center text-2xl text-[#4AB6C1]">Login</h1>
            {
              loginError && (
                <Alert
                  message={loginError.message}
                  type="error"
                  closable
                />
              )
            }
            <Form layout="vertical">
              <div className="my-3 ">
                <Form.Item
                  label="Email"
                  name="email"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Please input Email !",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    className=""
                    style={{width: "100%"}}
                    placeholder="e. g. @gmail.com"
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </Form.Item>
              </div>

              <div className="">
                <Form.Item
                  label="Password"
                  name="password"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                      message: "Please input password !",
                    },
                  ]}
                >
                  <Input.Password
                    // htmlType="password"
                    className=""
                    style={{width: "100%"}}
                    visibilityToggle={{
                      visible: false,
                    }}
                    placeholder="e. g. password"
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="">
                <div className="w-full">
                  {" "}
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      to="item-details"
                      onClick={Loginhandle}
                      className="w-full my-5"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                  <Link to="/auth" >Sign Up (If not a member) </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  };
}

export default Login;
