import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Status", "Amount"],
  ["Done", 300],
  ["Pending", 75],
  ["Cancel", 25],
];

export const options = {
  title: "Total appointment: 400",
  is3D: true,

  colors: ['#199eb3','#C0C0C0','#DC143C'], 
};

export default function PieChartAppointment() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
