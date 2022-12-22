import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <div className=" mx-auto">
                <div className="h-full relative  overflow-hidden  shadow-lg cursor-pointer">
                    <div className="max-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            className="w-full h-full object-cover"
                            alt="fs"
                        />
                    </div>
                    <div
                        className={`absolute top-0 left-0 right-0 bottom-0 bg-[#00968887]  flex flex-col justify-center items-center`}
                    >
                        <h4 className=" text-[70px]  tracking-tight text-white opacity-[1] leading-[1.3] changa-font ">
                            Welcome to <br></br>NFT MarketPlace
                        </h4>
                        <div className="flex ">
                            <div className="p-10 ">
                                <h3 className="text-white text-2xl mb-5">
                                    Be part of project through NFTs
                                </h3>
                                <Link to="/explore">
                                    <div className="mx-auto  p-5 uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[200px] w-full  text-white border-2 border-white rounded-sm text-xl">
                                        Explore
                                    </div>
                                </Link>
                            </div>
                            <div className="h-full border border-2-white "></div>
                            <div className="p-10">
                                <h3 className="text-white text-2xl mb-5">
                                    Access to investment democratized
                                </h3>
                                <Link to="/create">
                                    <div className="mx-auto p-5 uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[200px] w-full  text-white border-2 border-white rounded-sm text-xl">
                                        Create
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroSection;