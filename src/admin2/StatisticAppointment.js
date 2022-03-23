import React from "react";
import { Chart } from "react-google-charts";
import {useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';


export default function PieChartAppointment() {
  const [app, setApp] = useState('');
  useEffect(()=>{
    ApiCaller('sum-cancel', 'GET')
  .then ( async res => {
    setApp(res.data.data)
     
  })
},[])
console.log(app);
 const data = [
  ["Status", "Amount"],
  ["Done", 300],
  ["Pending", 75],
  ["Cancel", 25],
];

 const options = {
  title: "Total appointment: 400",
  is3D: true,

  colors: ['#199eb3','#C0C0C0','#DC143C'], 
};
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
