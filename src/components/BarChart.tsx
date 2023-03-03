import React from 'react';
import { Bar } from 'react-chartjs-2';
import "chart.js/auto"; // needed as dependency to display the chart.

export default function BarChart({chartData}:any) {
  return (
    <Bar data={chartData} />
  )
}
