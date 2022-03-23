import React from "react";
import { Chart } from "react-google-charts";
import {useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';


export default function PieChartAppointment() {
  const [waiting, setWaiting] = useState();
  const [approved, setApproved] = useState();
  let sumApp=approved+waiting
  console.log(sumApp);
  useEffect(()=>{
    ApiCaller('sum-waiting', 'GET')
  .then ( async res => {
    setWaiting(res.data.data)
     
  })
},[])

useEffect(()=>{
  ApiCaller('sum-approved', 'GET')
.then ( async res => {
  setApproved(res.data.data)
   
})
},[])

 const data = [
  ["Status", "Amount"],
  ["Done", approved],
  ["Pending", waiting],
  
];

 const options = {
  title: `Total appointment: ${sumApp}`,
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
