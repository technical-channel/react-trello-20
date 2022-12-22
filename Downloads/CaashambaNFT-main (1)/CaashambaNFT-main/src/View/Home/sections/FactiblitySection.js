import React from "react";
import FactCard from "../cards/FactCard";

const FactiblitySection = () => {
    const factibilityData = [
        {
            icon: process.env.PUBLIC_URL + "/assets/eco.svg",
            title: "Economic",
        },
        {
            icon: process.env.PUBLIC_URL + "/assets/technical.svg",
            title: "Technical",
        },
        {
            icon: process.env.PUBLIC_URL + "/assets/legal.svg",
            title: "Legal",
        },
        {
            icon: process.env.PUBLIC_URL + "/assets/social.svg",
            title: "Social",
        },
        {
            icon: process.env.PUBLIC_URL + "/assets/env.svg",
            title: "Enviourment",
        },
    ];
    return (
        <>
            <div className="bg-white py-[50px]">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-left">
                        <h1 className="text-5xl font-bold leading-[1.3] tracking-wide changa-font">
                            How Nostrum Capital
                            <br></br>
                            ensure
                            <span className="bg-clip-text bg-gradient-to-r from-[#054784] to-[#00988a] text-transparent">
                                {" "}
                                Factibility?
                            </span>
                        </h1>
                        <p>
                            In order to publish a project on Nostrum Capital, we need to
                            evaluate the factibility of<br></br> the following points:
                        </p>
                    </div>
                    <div className="grid grid-cols-5 w-full py-[50px]">
                        {factibilityData.map((item, index) => (
                            <>
                                <FactCard img={item.icon} title={item.title} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default FactiblitySection;