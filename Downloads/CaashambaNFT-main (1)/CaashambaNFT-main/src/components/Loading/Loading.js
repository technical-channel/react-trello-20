import React from "react";
import Lottie from "react-lottie";
import animationData from "./126962-menu-icon-lottie-json-animation.json"

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <div className="h-screen w-full fixed top-0 bg-[#fff] flex justify-center items-center">
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}
export default Loading;