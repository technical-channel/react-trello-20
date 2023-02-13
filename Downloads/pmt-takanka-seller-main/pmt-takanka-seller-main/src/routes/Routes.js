import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CreateProject from "../components/Buyerdashboard/CreateProject/CreateProject";

import Choose from "../components/Login/Choose";
import ForgotOtp from "../components/Login/ForgotOtp";
import ForgotPassword from "../components/Login/ForgotPassword";
import Login from "../components/Login/Login";
import ResetPassword from "../components/Login/ResetPassword";
import SendOtp from "../components/Signup/SendOtp";

import Signup from "../components/Signup/Signup";
import MainLayout from "../layout/MainLayout";
import HomePage from "../view/Home/HomePage";
import SecondLayout from "../layout/SecondLayout";
import Dashboard from "../components/Buyerdashboard/SideBar/Dashboard";
import Connections from "./../components/Buyerdashboard/Connections";
import ProjectList from "../components/Buyerdashboard/ProjectList/ProjectList";
import Detail from "../components/Buyerdashboard/Detail";

import Tanaka from "../components/Buyerdashboard/Tanaka";
import WaitingPage from "../components/Buyerdashboard/WaitingPage";
import Profile from "../components/Profile/Profile";
import ChangePassword from "../components/Profile/ChangePassword";
import Redirect from "../components/Redirect/Redirect";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<CreateProject />} />
        <Route path="/projects/create" element={<CreateProject />} />
        <Route path="/project/projectlist" element={<ProjectList />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/tanaka" element={<Tanaka />} />
        <Route path="/detailpage" element={<Detail />} />
        <Route path="/waitingpage" element={<WaitingPage />} />
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/redirect" element={<Redirect/>} />
      </Route>

      <Route path="/" element={<SecondLayout />}>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      {/* <Route path="/choose" element={<Choose />}></Route> */}
      <Route path="/sendotp" element={<SendOtp />}></Route>
      <Route path="/forgot" element={<ForgotPassword />}></Route>
      <Route path="/forgototp" element={<ForgotOtp />}></Route>
      <Route path="/resetpassword" element={<ResetPassword />}></Route>
    </Routes>
  );
};

export default Routing;
