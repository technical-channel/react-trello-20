import React from "react";
import { BsCheck2 } from "react-icons/bs";

const PlanSection = () => {
  const data = [
    {
      id: 1,
      heading: "free",
      price: "$ 0",
      imgUrl:'/assets/check1.svg',
      list: [
        {
          first: "Project Create",
          second: "Buyer Invite",
          third: "Seller Invite",
        },
      ],
    },
    {
      id: 2,
      heading: "premium",
      price: "$ 175",
      imgUrl:'/assets/check1.svg',
      list: [
        {
          first: "Project Create",
          second: "Buyer Invite",
          third: "Seller Invite",
          fourth: "Chat",
        },
      ],
    },
    {
      id: 3,
      heading: "platinum",
      price: "$ 500",
      imgUrl:'/assets/check1.svg',
      list: [
        {
          first: "Project Create",
          second: "Buyer Invite",
          third: "Seller Invite",
          fourth: "Chat",
          fifth: "Zoom Call ",
        },
      ],
    },
  ];
  return (
    <div>
      <section id="pricing" className="pb-[3rem]  px-5 "   data-aos="zoom-in-up">
        
        <div className="max-w-[1300px] mx-auto relative  ">
        <img
          src={process.env.PUBLIC_URL + "/assets/priceleft.svg"}
          className="absolute top-0 left-[-20%] bounce-out"
        />
          <h1
            className="lg:text-[40px] wow bounceInUp text-[35px] text-center font-bold capitalize text-[#0674BB] py-4"
            style={{ fontFamily: "Mulish" }}
          >
            Pricing Plan
          </h1>
          <div className="max-w-[1100px] w-full mx-auto ">
            <p
              className="my-[2rem] text-md text-center  text-black leading-7"
              style={{ fontFamily: "Mulish" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <div className="max-w-[1300px] mx-auto relative ">
          {/* <img src={process.env.PUBLIC_URL +'/assets/priceleft.svg'} className="absolute top-0 left-0 "/> */}
          <div className="flex  flex-col md:flex-row gap-[30px] justify-center items-start">
            {data.map((data, index) => (
              <>
                <div
                  className="w-full   pb-[50px] px-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-white shadow-lg
                     h-full  py-[30px]  rounded-2xl"
                  style={{ boxShadow: " 4px 8px 42px 4px #E8E6EF" }}
                >
                  <h5
                    className="text-xl text-[#363848]  mb-5 font-bold text-center uppercase"
                    style={{ fontFamily: "Mulish" }}
                  >
                    {data.heading}
                  </h5>
                  <p
                    className=" text-4xl text-[#363848] text-center pb-5 font-bold "
                    style={{ fontFamily: "Mulish" }}
                  >
                    {data.price}
                    <br />
                    <span
                      className="text-[18px] font-light"
                      style={{ fontFamily: "Mulish" }}
                    >
                      {" "}
                      per month
                    </span>
                  </p>

                  <ul className="mt-[20px] flex flex-col py-5 px-5 m-auto md:h-[250px] h-auto">
                    <li className="mb-4">
                      <div className="flex">
                        
                        <img src={process.env.PUBLIC_URL+data.imgUrl} className="mr-3" />
                        <p className="text-[16px] " style={{fontFamily: 'Mulish'}}>
                          {data.list[0].first}
                        </p>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex">
                      <img src={process.env.PUBLIC_URL+data.imgUrl} className="mr-3" />
                        <p className="text-[16px] " style={{fontFamily: 'Mulish'}}>
                          {data.list[0].second}
                        </p>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex">
                        <img src={process.env.PUBLIC_URL+data.imgUrl} className="mr-3" />
                        <p className="text-[16px] " style={{fontFamily: 'Mulish'}}>
                          {data.list[0].third}
                        </p>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex">
                        {data.list[0].fourth ? (
                            <img src={process.env.PUBLIC_URL+data.imgUrl} className="mr-3" />
                        ) : null}

                        <p className="text-[16px] " style={{fontFamily: 'Mulish'}}>
                          {data.list[0].fourth}
                        </p>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="flex">
                        {data.list[0].fifth ? (
                            <img src={process.env.PUBLIC_URL+data.imgUrl} className="mr-3" />
                        ) : null}

                        <p className="text-[16px] ">
                          {data.list[0].fifth}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex justify-center ">
                    <button className=" px-[5rem] py-2 bg-[#0674BB] text-white  font-semibold rounded-full  hover:bg-[#F7F5FF] hover:text-[#0674BB] ">
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanSection;
