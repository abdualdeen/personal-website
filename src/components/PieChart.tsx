import React from 'react';
import { Pie } from 'react-chartjs-2';
import "chart.js/auto"; // needed as dependency to display the chart.

export default function LineChart({chartData}:any) {
  return (
    <Pie data={chartData} />
  )
}
