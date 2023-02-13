import React from "react";
import { Link } from "react-router-dom";
import Profilecontent from "./Profilecontent";

const Profile = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] lg:p-7 p-4 min-h-screen">
        {/* bg-white shd-box max-w-[1300px] mx-auto lg:mt-[30px] mt-[30px] pb-[2rem] multistep_form  relative mb-3 rounded-md lg:px-6 px-4 */}
        <div className="bg-white z-0 relative lg:mt-[10px] mt-[50px] rounded-lg  pt-[30px]   ">
          <div className="flex lg:flex-row flex-col">
            <Profilecontent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
