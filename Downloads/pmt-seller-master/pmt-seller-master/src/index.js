import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { SideBarProvider } from './Provider/SidebarProvider';

import App from "./App";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
