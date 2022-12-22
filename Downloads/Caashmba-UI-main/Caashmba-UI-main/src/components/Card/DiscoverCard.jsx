import React from "react";
const DiscoverCard = ({ title, imgUrl, bgColor }) => {
  console.log(imgUrl, "images");
  return (
    <>
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full */}
      <div className="max-w-[400px] max-h-[400px] h-full mx-auto">
        <div className="h-full relative overflow-hidden  shadow-lg cursor-pointer">
          <img
            className="object-cover w-full h-full "
            src={imgUrl}
            alt={title}
          />
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 bg-[${bgColor}]  opacity-[0.7] flex justify-center items-center`}
          >
            <h4 className=" text-4xl tracking-tight text-white font-display">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
