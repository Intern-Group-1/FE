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
}
