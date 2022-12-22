import React from "react";

const FactCard = ({ title, img }) => {
    return (
        <>
            <div className="w-[150px] h-[150px] bg-[#f5f5f7] rounded-md flex justify-center items-center">
                <div className="flex-column justify-center items-center">
                    <div className="py-5 flex justify-center">
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