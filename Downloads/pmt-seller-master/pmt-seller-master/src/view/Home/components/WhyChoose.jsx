import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhyChoose = () => {

  const data = [
    {
      id: 1,
      imgUrl: "/assets/choose1.png",
      heading: "Effective Task Management",
      para: "Delegate Tasks to your team on the Priority-Basis and Track its performance through real-time progress updates.",
    },
    {
      id: 2,
      imgUrl: "/assets/choose2.png",
      heading: "Streamlined Communication",
      para: "Delegate Tasks to your team  on the Priority-Basis and Track its performance through real-  time progress updates.",
    },
    {
      id: 3,
      imgUrl: "/assets/choose3.png",
      heading: "Express Client-Approval",
      para: "Share your Work-Status on the Task-Boards and get ExpressApproval from your client.",
    },
    {
      id: 4,
      imgUrl: "/assets/choose1.png",
      heading: "Effective Task Management",
      para: "Delegate Tasks to your team on the Priority-Basis and Track its performance through real-time progress updates.",
    },
    {
      id: 5,
      imgUrl: "/assets/choose2.png",
      heading: "Streamlined Communication",
      para: "Delegate Tasks to your team  on the Priority-Basis and Track its performance through real-  time progress updates.",
    },
    {
      id: 6,
      imgUrl: "/assets/choose3.png",
      heading: "Express Client-Approval",
      para: "Share your Work-Status on the Task-Boards and get ExpressApproval from your client.",
    },
  ];
  return (
    <div>
      <section className=" py-[3rem] px-5 " id="why-choose"   data-aos="fade-right" >
        <div className="relative max-w-[1500px] mx-auto ">
          <h1
            className="lg:text-[40px] text-[35px] text-center font-bold capitalize text-[#0674BB] py-4"
            style={{ fontFamily: "Mulish" }}
          >
            Why Choose Us
          </h1>
          <div className="max-w-[1100px] w-full mx-auto ">
            <p
              className="my-[2rem] text-md text-center  text-black leading-7"
              style={{ fontFamily: "Mulish" }}
            >
              Tanaka is a beautiful, versatile, transparent, secure and user-
              friendly project management tool that functions as the Task
              Management System, Team Collaboration Platform and Payment
              Solution. Take facts-driven decisions to benchmark your Team’s
              performance and stay competent in your project management with
              Tanaka’s all-inclusive features that ensure:
            </p>
          </div>

          <div className=" gap-5 lg:gap-[30px] ">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data.map((data, index) => (
                <SwiperSlide key={index}>
                  {" "}
                  <>
                    <div className=" my-[4rem] h-[320px] max-w-[400px] w-full mx-auto ">
                      <div
                        className=" bg-white 
                   h-full px-[30px] py-[30px]  rounded-3xl "
                        style={{ boxShadow: " 4px 8px 42px 4px #E8E6EF" }}
                      >
                        <img
                          src={process.env.PUBLIC_URL + data.imgUrl}
                          className=" block w-100 h-auto mb-5"
                        />
                        <h5
                          className="lg:text-[20px] text-[18px] mb-3 font-bold "
                          style={{ fontFamily: "Mulish" }}
                        >
                          {data.heading}
                        </h5>
                        <p
                          className="text-[#7C7C7C] my-5 text-md "
                          style={{ fontFamily: "Mulish" }}
                        >
                          {data.para}
                        </p>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/assets/chooseright.png"}
            className="w-full max-w-[600px]  absolute top-[30%] right-0 z-100 float-right blob"
          ></img>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
