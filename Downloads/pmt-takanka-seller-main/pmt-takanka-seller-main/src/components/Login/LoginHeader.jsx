import React from "react";
import { Link } from "react-router-dom";
const LoginHeader = () => {
  return (
    <div>
      <header>
        <div className="max-w-[1600px] px-5 mx-auto flex pt-[20px] justify-between">
          <Link to="/">
            <div className="text-[#0674BB] font-bold text-[25px]"> LOGO</div>
          </Link>

          <Link
            to="/"
            className="common-btn lg:text-[16px] text-[14px] text-white px-[40px] transition-all duration-300 hover:bg-[#115887] py-[10px]"
          >
            {/* <span>
                <i className="fa-solid fa-angle-left mr-2"></i>
              </span> */}
            Back
          </Link>
        </div>
      </header>
    </div>
  );
};

export default LoginHeader;
