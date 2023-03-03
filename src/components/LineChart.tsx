import React from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto"; // needed as dependency to display the chart.

export default function LineChart({chartData}:any) {
  return (
    <Line data={chartData} />
  )
}
