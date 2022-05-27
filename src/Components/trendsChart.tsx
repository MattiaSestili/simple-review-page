import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, ChartData, ChartOptions, registerables } from "chart.js";
import faker from "@faker-js/faker";
import { useEffect, useState } from "react";

ChartJS.register(...registerables);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

interface ChartState {
  data: ChartData;
  options: ChartOptions;
}
export const TrendsChart = () => {
  const [chartData, setChartData] = useState<ChartState>({ data: { datasets: [], labels: [] }, options: {} });

  useEffect(() => {
    const options: ChartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const dataValue = labels.map(() => faker.datatype.number({ min: 0, max: 5 }));
    const data: ChartData = {
      labels,
      datasets: [
        {
          type: "line" as const,
          label: "Dataset 1",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: dataValue
        },
        {
          type: "bar" as const,
          label: "Dataset 2",
          backgroundColor: "rgb(75, 192, 192)",
          data: dataValue,
          borderWidth: 2
        }
      ]
    };

    setChartData({ data, options });
  }, []);

  return <Chart type="bar" options={chartData?.options} data={chartData?.data} />;
};
