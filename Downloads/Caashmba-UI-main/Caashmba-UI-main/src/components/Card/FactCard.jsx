import React from "react";

const FactCard = ({ title, img }) => {
    return (
        <>
            <div className=" md:px-4 px-0  rounded  max-h-[200px] max-w-[300px] ">
                <div className=" p-5  bg-[#f5f5f7]">
                    <div className="py-3 flex justify-center ">
                        <img src={img} alt={title} width={80} />
                    </div>
                    <h1 className=" changa-font text-lg bg-clip-text bg-gradient-to-r from-[#054784] to-[#00988a] text-transparent">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    );
};
export default FactCard