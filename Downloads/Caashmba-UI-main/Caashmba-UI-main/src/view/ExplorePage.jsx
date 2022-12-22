import React from "react";
import ExploreCard from "../components/Card/ExploreCard";

import { Link } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';

const ExplorePage = ({}) => {
  return (
    <>
      <div className="bg-agriculture bg-no-repeat bg-cover  p-5">
        <div className="py-20 ">
          <h5 className="capitalize  text-white text-center justify-center items-center md:text-[70px]  text-3xl  ">
            agriculture{" "}
          </h5>
        </div>
      </div>
      <div className="bg-[#E8E8E8]">
        <div className="max-w-[1300px] w-full mx-auto   py-10">
          <div className="flex flex-col md:flex-row  items-start gap-5  px-0 md:px-3  ">
            <div className="max-w-[300px] w-full mx-auto">
              <Sidebar/>
            </div>
            <div className="w-full  max-w-[1000px] mx-auto">
              <h1 className="md:text-[40px] text-2xl text-[#91939D] md:text-left text-center capitalize  pb-5 px-4">
                exploring X projects
              </h1>
              <Link to="/nft/nftpage">
                <ExploreCard />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
