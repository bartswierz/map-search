import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
/* CHARTJS REFERENCED - https://www.chartjs.org/docs/latest/getting-started/usage.html */

export const BarChart = ({ data }) => {
  // Iterating through our data object to get the labels and values
  const labels = Object.keys(data); // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const values = Object.values(data); // [12, 37, 117, 197, 105, 98, 45]

  if (values.length === 0) return null;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Store Traffic",
        data: values, // [12, 37, 117, 197, 105, 98, 45]
        backgroundColor: "rgb(59, 130, 246)",
      },
    ],
  };

  // options = options={{aspectRatio}} aspect ratio, animations, etc.
  return <Bar data={chartData} className="" />;
};

export default BarChart;
