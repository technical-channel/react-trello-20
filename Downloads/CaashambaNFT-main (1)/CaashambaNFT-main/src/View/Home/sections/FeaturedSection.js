import React from "react";
import { SlGraph } from "react-icons/sl";

const FeaturedSection = () => {
    return (
        <>
            <div className="bg-white py-[100px] ">
                <div className="flex gap-5  max-w-[1000px] mx-auto   justify-between">
                    <div className="flex flex-col  justify-between text-left flex-1">
                        <div className="text-left flex-1">
                            <h4 className="  uppercase font-bold">Featured Project</h4>
                        </div>
                        <div className="flex-1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                tortor massa sollicitudin nunc ipsum, non purus. Sem ac ac
                                posuere condimentum.
                            </p>
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <SlGraph size={30} />
                                    </div>
                                    Expected annual returns: 15%
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <SlGraph size={30} />
                                    </div>
                                    Expected annual returns: 15%
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <SlGraph size={30} />
                                    </div>
                                    Expected annual returns: 15%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] max-w-[600px] w-full ">
                        {/* <img
                src="https://i.seadn.io/gcs/files/e28c07e92877be1928a9d5b785272a24.jpg?auto=format&w=1920"
                className="w-full h-full object-cover"
              ></img> */}
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/gfGuPd1CELo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            className="w-full h-full object-cover"
                        ></iframe>
                        <div className="my-5 justify-end flex ">
                            <div className=" uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[200px] w-full  text-white bg-gradient-to-r from-[#054784] to-[#00988a]">
                                Purchase NFT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FeaturedSection;