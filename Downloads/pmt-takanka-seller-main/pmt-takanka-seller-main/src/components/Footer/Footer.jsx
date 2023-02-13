import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className=" bg-[#00558B] pt-[3rem]">
        <div className="max-w-[1500px] w-full mx-auto px-5">
          <div className="flex flex-col md:flex-row  gap-5 justify-between items-start">
            <div className="max-w-[500px] w-full ">
              <h4
                className="text-white text-2xl font-bold mb-4"
                style={{ fontFamily: "Almarai" }}
              >
                Tanaka
              </h4>
              <p className="text-white py-3 leading-8">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <div className=" flex gap-5 mt-5">
                <FaFacebookF
                  size={22}
                  className="text-[#CECECE] hover:text-white social-icons"
                />
                <AiOutlineTwitter
                  size={22}
                  className="text-[#CECECE] social-icons"
                />
                <AiFillYoutube
                  size={22}
                  className="text-[#CECECE] social-icons"
                />
                <AiFillLinkedin
                  size={22}
                  className="text-[#CECECE] social-icons "
                />
                <AiOutlineInstagram
                  size={22}
                  className="text-[#CECECE] social-icons"
                />
              </div>
              <p
                className="text-white py-5 my-5 "
                style={{ fontFamily: "Mulish" }}
              >
                Tanaka Landing Website - © 2023 All Rights Reserved
              </p>
            </div>
            <div className="">
              <h6
                className="text-lg font-bold text-white capitalize mb-2"
                style={{ fontFamily: "Mulish" }}
              >
                tanaka
              </h6>
              <div className="py-3 leading-8">
                <div
                  className="text-white py-1 block  capitalize "
                  style={{ fontFamily: "Mulish" }}
                >
                  Why tanaka
                </div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                  features
                </div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                  pricing
                </div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                  reviews
                </div>
                <p
                  className="text-white py-5 my-5 "
                  style={{ fontFamily: "Mulish" }}
                >
                  Terms and Conditions || FAQs || Privacy Policy
                </p>
              </div>
            </div>
            <div className="leading-8">
              <h6
                className="text-lg font-bold text-white capitalize mb-2"
                style={{ fontFamily: "Mulish" }}
              >
               Company
              </h6>
              <div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                 About us
                </div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                  Contact Us
                </div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                  Login
                </div>
                <div
                  className="text-white py-1 block  capitalize"
                  style={{ fontFamily: "Mulish" }}
                >
                  Signup
                </div>
                <p
                  className="text-white py-5 my-5"
                  style={{ fontFamily: "Mulish" }}
                >
                  Made by Ramlogics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
