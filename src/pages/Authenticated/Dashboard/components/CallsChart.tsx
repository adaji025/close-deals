import { ApexOptions } from "apexcharts";
import { useState } from "react";
import Chart from "react-apexcharts";

const CallsChart = () => {
  const [activeTab, setActiveTab] = useState<
    "last week" | "this week" | "next week"
  >("last week");
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "20%",
        dataLabels: {
          position: "center",
        },
      },
    },
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 5,

      labels: {
        formatter: function (value) {
          const categories = [
            "10 - 30 + mins",
            "30 - 60 mins",
            "60 - 75 mins",
            "75 - 90 mins",
            "90 - 120 mins",
          ];
          return categories[Math.floor(value / (100 / categories.length))];
        },
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: ["#5E17EC"],
  };

  const series = [
    {
      name: "Confirmed",
      data: [80, 30, 50, 20, 10],
    },
  ];

  return (
    <div className="bg-primary/5 rounded-xl h-full">
      <div className="flex justify-between px-5 pt-5">
        <div className="text-lg text-black font-semibold">
          Average Call Duration
        </div>
        <div className="flex items-center gap-1 text-xs z-10">
          <div
            className={`py-1 px-2  rounded-md cursor-pointer ${
              activeTab === "last week" && "bg-tertiary"
            }`}
            onClick={() => setActiveTab("last week")}
          >
            Last week
          </div>
          <div
            className={`py-1 px-2  rounded-md cursor-pointer ${
              activeTab === "this week" && "bg-tertiary"
            }`}
            onClick={() => setActiveTab("this week")}
          >
            This week
          </div>
          <div
            className={`py-1 px-2  rounded-md cursor-pointer ${
              activeTab === "next week" && "bg-tertiary"
            }`}
            onClick={() => setActiveTab("next week")}
          >
            Next week
          </div>
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default CallsChart;
