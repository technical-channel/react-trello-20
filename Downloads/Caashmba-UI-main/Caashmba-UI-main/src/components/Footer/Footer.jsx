import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className=" bg-navy  text-white py-[50px] md:px-4 px-0">
        <div className="max-w-[1300px] mx-auto md:px-0 px-2 ">
          <div className="flex flex-col md:flex-row md:gap-[60px] gap-5 border-b-2 ">
            <div className="">
              <img
                src={process.env.PUBLIC_URL + "/assets/footerlogo.png"}
                width={200}
              />
            </div>

            <div className="md:max-w-[50%] w-full  mx-auto flex-1 ">
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,{" "}
              </p>
              <p className="mt-3">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <div className="md:my-10 my-0">
                <div className=" hidden md:flex items-center gap-6 uppercase">
                  <div className="flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/explore">Discover</Link>
                    <Link to="/create">Publish a Project</Link>
                    <Link to="/create">Login </Link>
                    <Link to="/create">register</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className="inline-flex  gap-5 flex-wrap ">
                <a>
                  <AiFillFacebook size={30} color={"#fff"} />
                </a>
                <a>
                  <AiFillInstagram size={30} color={"#fff"} />
                </a>
                <a>
                  <AiFillTwitterCircle size={30} color={"#fff"} />
                </a>
                <a>
                  <AiFillLinkedin size={30} color={"#fff"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1100px] mx-auto  my-[10px]"></div>
        <div className="flex-wrap max-w-[1300px] mx-auto  my-[10px] flex  justify-between pt-8 md:px-0 px-4">
          {/* <div>logo {new Date().getFullYear()}</div> */}
          <div>Nostrum Capital 2022.</div>
          <div className="flex gap-10">
            <div>Privacy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
