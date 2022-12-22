import React from "react";
import FactCard from "../../../components/Card/FactCard";

const FactiblitySection = () => {
  const factibilityData = [
    {
      icon: process.env.PUBLIC_URL + "/assets/eco.svg",
      title: "Economic",
    },
    {
      icon: process.env.PUBLIC_URL + "/assets/technical.svg",
      title: "Technical",
    },
    {
      icon: process.env.PUBLIC_URL + "/assets/legal.svg",
      title: "Legal",
    },
    {
      icon: process.env.PUBLIC_URL + "/assets/social.svg",
      title: "Social",
    },
    {
      icon: process.env.PUBLIC_URL + "/assets/env.svg",
      title: "Enviourment",
    },
  ];
  return (
    <>
      <div className="bg-white py-[50px] md:px-0 px-4">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-left">
            <h1 className="text-[48px] font-bold leading-[1.3] tracking-wide md:px-4 px-0 ">
              How Nostrum Capital
              <br></br>
              ensure
              <span className="bg-clip-text bg-gradient-to-r from-[#004987] to-[#00988a] text-transparent">
                {" "}
                Factibility?
              </span>
            </h1>
            <p className="md:px-4 px-0">
              In order to publish a project on Nostrum Capital, we need to
              evaluate the factibility of<br></br> the following points:
            </p>
          </div>
          <div className=" flex flex-wrap gap-5  items-center w-full py-[50px] text-center ">
            {factibilityData.map((item, index) => (
              <>
              <div className="flex-1 ">
          {console.log("hello",process.env.PUBLIC_URL )}
              <FactCard img={item.icon} title={item.title} />
              </div>
                
              </>
            ))}
          </div>
          <div className="text-center ">
            <button className="bg-secondary text-white rounded max-w-[200px] text-center px-5 uppercase font-normal text-sm  py-2">
              publish a project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FactiblitySection;
