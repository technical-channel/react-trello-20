import {Progress} from "antd";
import React, {useEffect, useState} from "react";

const ProjectChart = () => {
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width)
    })
  }, [])

  const chartWidth = () => {
    if (width <= 428) {
      return 100
     
    } 
    else if (width <= 810) {
      return 120
    }
    else {
      return 150
    }
  }

  const chartData = [
    {
      type: "projects",
      percent: "60",
      strokeColor: "#FFBE44",
      width: 170
    },
    {
      type: "completed",
      percent: "70",
      strokeColor: "#5CE8B1",
      width: 170
    },
    {
      type: "yet to start",
      percent: "50",
      strokeColor: "#BB74E9",
      width: 170
    },
    {
      type: "in conflict",
      percent: "40",
      strokeColor: "#F24F4F",
      width: 170
    }
  ]

  return (
    <div>
      <div className="bg-white  rounded-md  shadow mb-5  lg:px-6 px-4 pt-4 pb-[30PX]">
        <h3 className="font-bold lg:text-[18px] text-[1rem]">Projects (500)</h3>
        <div className="mt-6 grid grid-cols-2 gap-6 justify-center items-center">
          {
            chartData.map((d, i) => (
              <div className="box-dashboard rounded-md  flex justify-center items-center p-5">
                <Progress
                  type="circle"
                  percent={d.percent}
                  strokeColor={d.strokeColor}
                  strokeWidth={8}
                  width={chartWidth()}
                  strokeLinecap="butt"
                  format={percent => (
                    <p className="phone:text-lg ipad:text-base text-sm flex flex-col items-center">
                      <span className="capitalize font-semibold" style={{
                        color: d.strokeColor
                      }}>
                        {d.type}
                      </span>

                      <span className="font-semibold"> 
                        {d.percent} %
                      </span>
                    </p>
                  )}
                />
              </div>

            ))
          }
          {/* <div className="box-dashboard rounded-md  flex justify-center items-center p-5">
            <Progress type="circle" percent={70} strokeColor={"#5CE8B1"} strokeWidth={10} width={170} />
          </div>
          <div className="box-dashboard rounded-md  flex justify-center items-center p-5">
            <Progress type="circle" percent={50} strokeColor={"#BB74E9"} strokeWidth={10} width={170} />
          </div>
          <div className="box-dashboard rounded-md  flex justify-center items-center p-5">
            <Progress type="circle" percent={40} strokeColor={"#F24F4F"} strokeWidth={10} width={170} />
          </div> */}


        </div>
      </div>
    </div>
  );
};

export default ProjectChart;
