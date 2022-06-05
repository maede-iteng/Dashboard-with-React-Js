import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title,
    Tooltip,
    Legend, Chart,
} from 'chart.js';
import {faker} from '@faker-js/faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 250 })),
            backgroundColor: '#04C9B7',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 250 })),
            backgroundColor: '#185551',
        },
    ],
};
export const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'left',
        },
        title: {
            display: true,
            text: 'Earning',
        },
    },
}