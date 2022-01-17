import ApexCharts from "react-apexcharts";

import { data } from "../utils/chartData";

const Chart = () => {
  const series = [
    {
      name: "series-1",
      data: data,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      borderColor: "#323232",
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: "#5d5d5d",
        },
      },
    },
    xaxis: {
      tickAmount: 8,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        formatter: (val) => {
          return new Date(val).toLocaleDateString();
        },
        rotate: 0,
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: "#5d5d5d",
        },
      },
    },
  };

  return <ApexCharts height="300" options={options} series={series} type="candlestick" />;
};

export default Chart;
