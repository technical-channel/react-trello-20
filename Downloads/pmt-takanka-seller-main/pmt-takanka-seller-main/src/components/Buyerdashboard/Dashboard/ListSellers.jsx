import React from "react";

const ListSellers = () => {
  const data = [
    {
      id: 1,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
    {
      id: 2,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
    {
      id: 3,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
    {
      id: 4,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
    {
      id: 5,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
    {
      id: 6,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
    {
      id: 1,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },

    {
      id: 1,
      imgUrl: "/assets/avtar-2.svg",
      name: "Ali Ahmad",
    },
  ];
  return (
    <div>
      <div className="bg-white rounded-md  shadow  lg:px-6 px-4 pt-5 pb-[30PX]">
        <h3 className="font-bold lg:text-[18px] text-[16px]">
          List of top Buyers
        </h3>
        <div className="grid  grid-cols-1  md:grid-cols-2  xl:gap-6 gap-4 mt-6 ">
          {data.map((data, index) => {
            return (
              <>
                <div className="flex flex-wrap items-center justify-center md:justify-start box-dashboard rounded-2xl  sm:px-6 px-2 py-2 mb-2">
                  <img
                    src={process.env.PUBLIC_URL + data.imgUrl}
                    className="h-[60px] rounded-full"
                  />
                  <p className="ml-3 text-[#27104E] lg:text-[18px] text-[15px] sm:text-left text-center">
                    {data.name}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListSellers;
