import React from "react";
import { SlGraph } from "react-icons/sl";

const FeaturedSection = () => {
  return (
    <>
      <div className="bg-white py-[60px] max-w-[1300px] mx-auto   px-4 ">
        <div className=" ">
          <div className="flex flex-col md:flex-row gap-[22px]  text-left flex-1 pb-10">
            <div className="text-left ">
              <h4 className="uppercase font-normal text-secondary text-[14px] ">
                Featured project
              </h4>
              <h2 className="text-[40px] text-secondary">
                Venta futura producción de maiz 40 hectares
              </h2>

              <div className="my-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  tortor massa sollicitudin nunc ipsum, non purus. Sem ac ac
                  posuere condimentum.
                </p>
                <div className="mt-4">
                  <div className="flex items-center gap-2 py-2">
                    <div>
                      <SlGraph size={30} className="text-[#63B8C2]" />
                    </div>
                    Expected annual returns: 15%
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <div>
                      <SlGraph size={30} className="text-[#63B8C2]" />
                    </div>
                    Risk: 1%
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <div>
                      <SlGraph size={30} className="text-[#63B8C2]" />
                    </div>
                    Token price: $100
                  </div>

                  <div className="flex items-center gap-2 py-2">
                    <div>
                      <SlGraph size={30} className="text-[#63B8C2]" />
                    </div>
                    Available tokens: 2,500 / 10,000
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL+ '/assets/line.png'}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[600px] w-full mx-auto ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gfGuPd1CELo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
              <div className="my-5 justify-end flex gap-5">
                <a className=" uppercase font-normal flex flex-col justify-center text-center max-w-[200px] w-full p-2 rounded-lg  bg-cyan text-secondary">
                  read more
                </a>
                <a
                  href="#"
                  className=" uppercase font-normal flex flex-col justify-center text-center max-w-[200px] w-full p-2 rounded-lg text-white bg-secondary"
                >
                  register to invest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedSection;
