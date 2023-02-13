import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import { Pagination, Navigation, Autoplay } from "swiper";
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      id: 1,
      content: (
        <>
          <div>
            <div className="grid mt-[90px] p-5 lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ml-5 ">
              <div className="">
                <div className="flex justify-center relative mb-8">
                  <img
                    src="assets/profile.png"
                    className="lg:h-auto h-[200px] mx-auto"
                  />
                  <div>
                    <img
                      src="assets/blue-dotss.svg"
                      className="absolute lg:block hidden bottom-[30px] left-[-30px] dots"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/black_quotes.svg"
                      className="absolute lg:block hidden top-0 left-[-30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex sm:flex-row items-center flex-col justify-between mb-9">
                  <div>
                    <h3 className="font-bold lg:text-[22px] text-[18px] mb-2">
                      William Smith
                    </h3>
                    <h3 className="lg:text-[18px] text-[16px] mb-4">
                      CEO of True Love Studios
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <p className="font-bold text-[22px]">4.8</p>
                  </div>
                </div>

                <p className="lg:text-[18px] text-[16px] lg:leading-9 leading-7">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
              <div className="flex">
                <img
                  src={process.env.PUBLIC_URL + "/assets/dots.svg"}
                  className="absolute right-[30%] bottom-[10%] "
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/testimonialright.svg"}
                  className="absolute right-0 bottom-0 mb-[2rem] blob"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <div>
            <div className="grid mt-[90px] p-5 lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ml-5 relative">
              <div className="">
                <div className="flex justify-center relative mb-8">
                  <img
                    src="assets/profile.png"
                    className="lg:h-auto h-[200px] mx-auto"
                  />
                  <div>
                    <img
                      src="assets/blue-dotss.svg"
                      className="absolute lg:block hidden bottom-[30px] left-[-30px] "
                    />
                  </div>
                  <div>
                    <img
                      src="assets/black_quotes.svg"
                      className="absolute lg:block hidden top-0 left-[-30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex sm:flex-row items-center flex-col justify-between mb-9">
                  <div>
                    <h3 className="font-bold lg:text-[22px] text-[18px] mb-2">
                      William Smith
                    </h3>
                    <h3 className="lg:text-[18px] text-[16px] mb-4">
                      CEO of True Love Studios
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <p className="font-bold text-[22px]">4.8</p>
                  </div>
                </div>

                <p className="lg:text-[18px] text-[16px] lg:leading-9 leading-7">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <div>
            <div className="grid mt-[90px] p-5 lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ml-5">
              <div className="">
                <div className="flex justify-center relative mb-8">
                  <img
                    src="assets/profile.png"
                    className="lg:h-auto h-[200px] mx-auto"
                  />
                  <div>
                    <img
                      src="assets/blue-dotss.svg"
                      className="absolute lg:block hidden bottom-[30px] left-[-30px]"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/black_quotes.svg"
                      className="absolute lg:block hidden top-0 left-[-30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex sm:flex-row items-center flex-col justify-between mb-9">
                  <div>
                    <h3 className="font-bold lg:text-[22px] text-[18px] mb-2">
                      William Smith
                    </h3>
                    <h3 className="lg:text-[18px] text-[16px] mb-4">
                      CEO of True Love Studios
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <p className="font-bold text-[22px]">4.8</p>
                  </div>
                </div>

                <p className="lg:text-[18px] text-[16px] lg:leading-9 leading-7">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <div>
            <div className="grid mt-[90px] p-5 lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ml-5">
              <div className="">
                <div className="flex justify-center relative mb-8">
                  <img
                    src="assets/profile.png"
                    className="lg:h-auto h-[200px] mx-auto"
                  />
                  <div>
                    <img
                      src="assets/blue-dotss.svg"
                      className="absolute lg:block hidden bottom-[30px] left-[-30px]"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/black_quotes.svg"
                      className="absolute lg:block hidden top-0 left-[-30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex sm:flex-row items-center flex-col justify-between mb-9">
                  <div>
                    <h3 className="font-bold lg:text-[22px] text-[18px] mb-2">
                      William Smith
                    </h3>
                    <h3 className="lg:text-[18px] text-[16px] mb-4">
                      CEO of True Love Studios
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <p className="font-bold text-[22px]">4.8</p>
                  </div>
                </div>

                <p className="lg:text-[18px] text-[16px] lg:leading-9 leading-7">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <div>
            <div className="grid mt-[90px] p-5 lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ml-5">
              <div className="">
                <div className="flex justify-center relative mb-8">
                  <img
                    src="assets/profile.png"
                    className="lg:h-auto h-[200px] mx-auto"
                  />
                  <div>
                    <img
                      src="assets/blue-dotss.svg"
                      className="absolute lg:block hidden bottom-[30px] left-[-30px]"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/black_quotes.svg"
                      className="absolute lg:block hidden top-0 left-[-30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex sm:flex-row items-center flex-col justify-between mb-9">
                  <div>
                    <h3 className="font-bold lg:text-[22px] text-[18px] mb-2">
                      William Smith
                    </h3>
                    <h3 className="lg:text-[18px] text-[16px] mb-4">
                      CEO of True Love Studios
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <p className="font-bold text-[22px]">4.8</p>
                  </div>
                </div>

                <p className="lg:text-[18px] text-[16px] lg:leading-9 leading-7">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <div>
            <div className="grid mt-[90px] p-5 lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ml-5">
              <div className="">
                <div className="flex justify-center relative mb-8">
                  <img
                    src="assets/profile.png"
                    className="lg:h-auto h-[200px] mx-auto"
                  />
                  <div>
                    <img
                      src="assets/blue-dotss.svg"
                      className=" absolute lg:block hidden bottom-[30px] left-[-30px] dots "
                    />
                  </div>
                  <div>
                    <img
                      src="assets/black_quotes.svg"
                      className="absolute lg:block hidden top-0 left-[-30px] dots"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex sm:flex-row items-center flex-col justify-between mb-9">
                  <div>
                    <h3 className="font-bold lg:text-[22px] text-[18px] mb-2">
                      William Smith
                    </h3>
                    <h3 className="lg:text-[18px] text-[16px] mb-4">
                      CEO of True Love Studios
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="" className="text-[#fe8d4d] text-[22px]">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <p className="font-bold text-[22px]">4.8</p>
                  </div>
                </div>

                <p className="lg:text-[18px] text-[16px] lg:leading-9 leading-7">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="max-w-[1300px] mx-auto relative px-5 py-5" data-aos="fade-right" id="reviews"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div>
          <h1
            className="lg:text-[40px] wow bounceInUp text-[35px] text-center font-bold capitalize text-[#0674BB] py-4"
            style={{ fontFamily: "Mulish" }}
          >
            What our Customer Says
          </h1>
          <div className="max-w-[1100px] w-full mx-auto ">
            <p
              className="my-[2rem] text-md text-center  text-black leading-7"
              style={{ fontFamily: "Mulish" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {data.map((data, index) => {
            return (
              <>
                <div>{data.content}</div>
              </>
            );
          })}
        </Slider>
        <div className="flex">
          <img
            src={process.env.PUBLIC_URL + "/assets/dots.svg"}
            className="absolute right-[30%] bottom-[10%]  dots"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/testimonialright.svg"}
            className="absolute right-0 bottom-0 mb-[2rem] blob"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
