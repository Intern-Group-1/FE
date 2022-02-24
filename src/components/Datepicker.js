import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
 const Datepicker =() => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  var dateP= new Date('2022-02-19T03:18:35.000Z')
    return (
      <DatePicker
      selected={startDate}
      onChange={onChange}
      // excludeDates={[addDays(new Date(), 2), addDays(dateP,0)]}
      selectsRange
      selectsDisabledDaysInRange
      inline
      />
    );
  };


export default Datepicker