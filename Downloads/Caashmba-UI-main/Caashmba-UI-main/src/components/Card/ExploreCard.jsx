import React from "react";
import { Link } from "react-router-dom";
const ExploreCard = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];
  return (
    <div className="flex  flex-col flex-wrap md:flex-row gap-[15px] justify-center md:justify-start  items-center px-4">
      {data.map((data, index) => {
        return (
          <>
            <div className="max-w-[290px] w-full  ">
              <Link to="/nft/nftpage">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/nftcard.png"}
                    className="h-[250px] w-full"
                    alt="image"
                  />
                </div>
              </Link>
              <div className=" py-5 bg-white shadow px-5 rounded">
                <h3 className="text-md my-1 text-[#009688bf] ">Subcategory</h3>
                <h2 className="text-2xl text-[#009688bf] ">
                  Venta futura producción de maiz 40 hectareas
                </h2>

                <div className="my-5">
                  <p className="text-sm  text-Grayscale">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    tortor massa sollicitudin nunc ipsum, non purus. Sem ac ac
                    posuere condimentum.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex items-center pb-2">
                    <div className="pr-3">
                      <img src={process.env.PUBLIC_URL + "assets/1.png"} />
                    </div>

                    <h5 className="text-sm text-Grayscale">
                      Expected annual returns: 15%
                    </h5>
                  </div>
                  <div className="flex items-center pb-2 ">
                    <div className="pr-3">
                      <img src={process.env.PUBLIC_URL + "assets/2.png"} />
                    </div>

                    <h5 className="text-sm text-Grayscale">Risk: 1%</h5>
                  </div>
                  <div className="flex items-center pb-2 ">
                    <div className="pr-3">
                      <img src={process.env.PUBLIC_URL + "assets/3.png"} />
                    </div>

                    <h5 className="text-sm text-Grayscale">
                      Token price: $100
                    </h5>
                  </div>
                  <div className="flex items-center pb-2 ">
                    <div className="pr-3">
                      <img src={process.env.PUBLIC_URL + "assets/4.png"} />
                    </div>

                    <h5 className="text-sm text-Grayscale">
                      Available tokens: 2,500 / 10,000
                    </h5>
                  </div>

                  <img src={process.env.PUBLIC_URL+'./assets/line.png'}/>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExploreCard;
