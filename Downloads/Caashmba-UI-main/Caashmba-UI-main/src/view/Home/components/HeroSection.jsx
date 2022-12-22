import React from "react";

import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div >
      <div className="flex flex-col justify-center items-center bg-hero-img bg-cover py-5">
        <div className="max-w-[1000px] w-full mx-auto">
        <h2 className="md:text-[70px] font-display text-center  text-2xl tracking-tight text-white opacity-[1] leading-[1.3] pt-2">
          Welcome to <br></br>NFT MarketPlace
        </h2>
        <div className="flex  flex-col sm:flex-row my-[4rem]">
          <div className="md:p-10 p-5 border-r border-white flex-1 text-center ">
            <h3 className="text-white text-2xl mb-5 ">
              Be part of project through NFTs
            </h3>
            <Link to="/explore">
              <p className="mx-auto  p-2 uppercase font-semibold flex flex-col justify-center  w-full text-center text-white border-2 max-w-[250px] border-white rounded-sm text-xl">
                discover projects
              </p>
            </Link>
          </div>
          
          <div className="md:p-10  p-5 text-center flex-1 mb-5">
            <h3 className="text-white text-2xl mb-5 ">
              Access to investment democratized
            </h3>
            <Link to="/create">
              <div className="mx-auto p-2 text-center uppercase font-semibold max-w-[200px] flex flex-col justify-center  w-full  text-white border-2 border-white max-w-[220px] rounded-sm text-xl">
                <p>publish a project</p>
              </div>
            </Link>
          </div>
        </div>
        </div>
       
      </div>
     
      <div className="md:max-w-[800px] max-w-[400px] w-full mx-auto px-5">
        <div className="mt-[-3rem]  z-50 relative">
          <div className="flex  flex-wrap shadow rounded bg-white px-5 py-5   gap-[20px] items-center ">
            <div className="border-r px-3 flex-1 text-center">
              <h5 className="text-3xl text-secondary ">224,756</h5>
              <p className="text-sm text-grey pt-2">projects funded</p>
            </div>
            <div className="border-r px-3 text-center flex-1 text-center">
              <h5 className="text-3xl text-secondary ">224,756</h5>
              <p className="text-sm text-grey pt-2">towards creative work </p>
            </div>
            <div className="text-center flex-1 ">
              <h5 className="text-3xl text-secondary ">224,756</h5>
              <p className="text-sm text-grey pt-2">pledges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
