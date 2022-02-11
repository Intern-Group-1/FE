import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
//toJSON() chuyển đổi thời gian về dạng JSON (YYYY-MM-DDTHH:mm:ss.sssZ).
 const Datepicker =() => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
//   var dateP= new Date('February 29, 2022 12:00:00')
//   YYYY-MM-DDTHH:mm:ss.sssZ
  var dateP= new Date('2022-02-20T13:20:10.100Z')
    return (
      <DatePicker
      selected={startDate}
      onChange={onChange}
      excludeDates={[addDays(new Date(), 2), addDays(dateP,0)]}
      selectsRange
      selectsDisabledDaysInRange
      inline
      />
      
    );
  };


export default Datepicker