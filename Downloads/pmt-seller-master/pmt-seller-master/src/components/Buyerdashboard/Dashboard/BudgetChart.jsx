import React, { useEffect } from "react";

import Chart from "react-apexcharts";
const BudgetChart = () => {
  const data = {
    series: [
      {
        name: "",
        data: [31, 40, 28, 51, 42, 109, 100, 100, 30, 54, 10, 5],
      },
      {
        name: "",
        data: [11, 32, 45, 32, 34, 52, 41, 31, 40, 28, 51, 42],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        type: "month",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      labels: {
        show: true,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div>
      {/* <div className="bg-black rounded-md  mb-[30px] shadow rounded-md lg:px-6 px-4 pt-4 pb-[30PX]">
                <h3 className="font-bold lg:text-[20px] text-[18px]">budget Per Month</h3>
                <div className="mt-6">
                  <img src="assets/spiral-chart.svg" />
                </div>
              </div> */}
      <div className="relative flex flex-col min-w-0 break-words w-full bg-white mb-5 shadow rounded-md lg:px-4 px-0 pt-4 pb-[30PX] px-5 ">
        <h3 className="font-bold lg:text-[18px] text-[16px] capitalize ml-2">
          budget Per Month
        </h3>

        {/* <div className="p-4 flex-auto">
        
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div> */}

        <div id="chart" className="mt-4">
          <Chart
            className="w-full graphresponsive"
            style={{ height: "100%important", minHeight: "100%important" }}
            options={data.options}
            series={data.series}
            type="area"
            width="98%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;
