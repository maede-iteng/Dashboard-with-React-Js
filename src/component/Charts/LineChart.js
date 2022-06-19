import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'visit',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      borderColor: '#04C9B7',
      backgroundColor: '#04C9B7',
    },
    {
      label: 'sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      borderColor: '#185551',
      backgroundColor: '#185551',
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};
export default LineChart;
