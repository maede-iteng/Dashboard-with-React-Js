import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Chart} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Cyne', 'Gray', 'Green'],
    datasets: [
        {
            label: '# of Votes',
            data: [6, 6, 6],
            backgroundColor: [
                '#04C9B7',
                '#74849D',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                '#04C9B7',
                '#74849D',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderWidth: 1,
        },
    ],
};
export const options = {
        maintainAspectRatio: false,
    // scales: {
    //     y: {
    //         stacked: false,
    //         grid: {
    //             display: false,
    //             color: "rgba(255,99,132,0.2)"
    //         }
    //     },
    //     x: {
    //         grid: {
    //             display: false
    //         }
    //     }
    // }

};
new Chart('chart', {
    type: 'doughnut',
    options: options,
    data: data
});
