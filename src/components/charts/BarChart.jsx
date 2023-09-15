import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { sampleData } from "../../constants/sample-data";

export const BarChart = ({ data }) => {
  // console.log("data: ", data);
  // console.log("labels: ", Object.keys(data));
  console.log(Object.values(data));
  const labels = Object.keys(data); // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const values = Object.values(data); // [12, 37, 117, 197, 105, 98, 45]

  const chartData = {
    labels: labels,
    // labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Traffic",
        data: values, // [12, 37, 117, 197, 105, 98, 45]
      },
    ],
  };
  // const chartData = {
  //   labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  //   datasets: [data],
  // };
  console.log("chartData.datasets: ", chartData.datasets);
  if (!data) return <div>No traffic data...</div>;
  // TODO - return null IF we dont have provided avgStoreTraffic
  // data = data passed in from sample-data.js
  // options = options={{aspectRatio}} aspect ratio, animations, etc.
  return <Bar data={chartData} />;
  // return <Bar data={data} />;
  // return <div>BAR CHART</div>;
};

export default BarChart;

/* CHARTJS -  https://www.chartjs.org/docs/latest/getting-started/usage.html 
-use this page for reference on how to turn our dataset into chart
const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    ...
  ];

  {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
*/
