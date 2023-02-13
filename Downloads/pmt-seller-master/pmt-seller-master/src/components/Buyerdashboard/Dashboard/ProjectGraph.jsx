import React from "react";
import Chart from "react-google-charts";
const ProjectGraph = () => {
  const data = [
    ["Country", "Projects"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["India", 500],
  ];
  var options = {
    colorAxis: {
      colors: ["#24A0FB", "#24A0FB", "#24A0FB", "#24A0FB", "#57B9FC"],
    },
    backgroundColor: "#F8F9FA",
  };

  return (
    <div>
      <div className="bg-white rounded-md shadow lg:px-6 px-4 pt-4 pb-[30PX]">
        <h3 className="font-bold lg:text-[18px] text-[16px] mb-5">
          Projects Per Country
        </h3>
        <div>
          <Chart
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            // style={{ background: "black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGraph;
