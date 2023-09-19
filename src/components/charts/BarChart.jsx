/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
/* CHARTJS REFERENCED - 'Build a new application with Chart.js' https://www.chartjs.org/docs/latest/getting-started/usage.html - IMPORTANT: CHARTJS REQUIRES CHART.JS/AUTO - WILL CRASH WITHOUT IT */
import { Bar } from "react-chartjs-2";

export const BarChart = ({ data }) => {
  // Iterating through our data object to get the labels and values
  const labels = Object.keys(data); // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const values = Object.values(data); // [12, 37, 117, 197, 105, 98, 45]

  if (values.length === 0) return null;

  const chartData = {
    // type: "line",
    type: "bar", // bar, line, pie, etc.
    labels: labels,
    datasets: [
      {
        label: "Store Traffic",
        data: values, // [12, 37, 117, 197, 105, 98, 45]
        backgroundColor: "rgb(59, 130, 246)",
      },
    ],
  };

  return <Bar data={chartData} className="p-4 max-w-[98vw]" />;
  //  <Line data={chartData} className="p-4 max-w-[98vw]" />;
};

export default BarChart;
