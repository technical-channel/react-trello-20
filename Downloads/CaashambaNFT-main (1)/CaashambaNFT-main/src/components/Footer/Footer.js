import {Button} from "antd";
import React from "react";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div className="border bg-gradient-to-r from-[#054784] to-[#00988a] text-white py-[50px] mt-5">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} width={200} />
        </div>
        <div className="text-center md:text-left ">
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </p>
          <div className="my-10">
            <div className=" hidden md:flex items-center gap-6 uppercase">
              <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/explore">Discover</Link>
                <Link to="/create">Publish a Project</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto md:w-full">
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
      <div className=" max-w-[1100px] mx-auto border my-[10px]"></div>
      <div className="flex-wrap max-w-[1100px] mx-auto  my-[10px] flex  justify-between py-8">
        <div>logo {new Date().getFullYear()}</div>
        <div className="flex gap-10">
          <div>Privacy</div>
          <div>Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
