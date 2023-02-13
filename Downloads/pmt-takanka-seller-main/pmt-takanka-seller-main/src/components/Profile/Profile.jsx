import React from "react";
import { Link } from "react-router-dom";
import Profilecontent from "./Profilecontent";

const Profile = () => {
  return (
    <>
      <div class="bg-[#F5F5F5] lg:p-7 p-4 min-h-screen">
        <div class="bg-white relative z-40 shd-box lg:mt-[10px] mt-[50px] rounded-lg  pt-[30px]  rounded-md">
          <div class="flex lg:flex-row flex-col">
            <Profilecontent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
