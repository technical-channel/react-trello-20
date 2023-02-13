import React from "react";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const data = [
    {
      id: 1,
      profile: "T",
      heading: "tanaka",
      para: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      profile: "T",
      heading: "tanaka",
      para: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      profile: "T",
      heading: "tanaka",
      para: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      profile: "T",
      heading: "tanaka",
      para: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      profile: "T",
      heading: "tanaka",
      para: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div>
      <section
        id="reviews"
        className="lg:pt-[150px] lg:pb-[200px] overflow-x-hidden pt-[50px] pb-[150px] bg-[#F7F8FA] py-5"
      >
        <div className="lg:max-w-[1300px] max-w-[800px] p-5 mx-auto">
          <div className="">
            <h1 className="lg:text-[40px] text-[30px] text-center font-bold capitalize text-[#0674BB] wow bounceInUp mb-4 wow bounceInUp">
              Our Reviews
            </h1>
            <div className="flex justify-center max-w-[1100px] mx-auto ">
              <p className="lg:text-[18px]  lg:text-[16px] text-[14px] leading-9 text-center text-black li">
                Looking to automate Tanaka management template? Tanaka is for
                you. This is a project management and HR automation template
                that can be used for theTanaka system.
              </p>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {data.map((data, index) => {
                return (
                  <>
                    <div className=" bg-white rounded-lg mx-5  py-5 mt-5">
                      <div className="px-5">
                        <div className="flex justify-between items-center ">
                          <div className=" py-5 px-5 max-w-[70px] w-full text-white bg-[#0674BB] rounded-[12px] flex justify-center items-center">
                            <p className="font-bold text-[20px]">
                              {data.profile}
                            </p>
                          </div>

                          <div className="">
                            <span className="text-[#EDF0F4] lg:text-[90px] text-[50px]">
                              <i className="fa-sharp fa-solid fa-quote-right"></i>
                            </span>
                          </div>
                        </div>
                        <h2 className="xl:text-[25px]  mb-4 text-[16px] font-bold capitalize">
                          {data.heading}
                        </h2>
                        <div className="mb-4">
                          <span>
                            <i className="fa-solid fa-star text-[#FFBA34]"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star text-[#FFBA34]"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star text-[#FFBA34]"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star text-[#FFBA34]"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star text-[#FFBA34]"></i>
                          </span>
                        </div>
                        <div>
                          <p className="leading-7 lg:text-[16px] text-[14px]">
                            {data.para}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
