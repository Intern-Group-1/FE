import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from '../admin2/RightTest'
import { AiOutlineCheck } from 'react-icons/ai'
import moment from 'moment'
import {  handleGetAppointmentbyDoctor } from '../services/doctor';
function TableAppointmentByDoctor() {
    const id = localStorage.getItem('idDoctor')
  
   
    const [Api, setApi] = useState([]);
    const [app, setApp] = useState([]);
   async function byID(){
    const data1= await handleGetAppointmentbyDoctor(id)
    console.log(data1);
    setApp(data1.data.data)
   }
   
    byID()

 


  return (
    <>    
    <Box  ml={'340px'}>
        <Box >
        <Box
        ml={'-330px'}
        >
          <Right/>
        </Box>
        <table className="table table-hover" style={{
           
            width:'1200px',
            height:'800px',
            marginTop:'20px',
           
        }} >
  <thead>
    <tr >
      
      <th width='120px'>Branch</th>    
      <th width='130px'>Name Customer</th>
      {/* <th width='100px' >Address Customer</th> */}
      <th width='130px'>Phone Customer</th>    
      <th width='50px' >Date</th>
      <th width='120px'>Time</th>
     
      <th width='220px' >Handle</th>
      <th >Status</th>
    </tr>
  </thead>
 
  <tbody>
   {app.map(api => (
    <>
        <tr >
  <td >{api.branch!=null? <>{api.branch.name}</>:<>NULL</>}</td>
 
  <td >{api.user?<>{api.user.full_name}</>:<b>NULL</b>}</td>
  {/* <td>{api.user?<>{api.user.address}</>:<b>NULL</b>}</td> */}
  <td>{api.user?<>{api.user.phone_number}</>:<b>NULL</b>}</td>


         
        
 
  <td>{moment(api.date).format('L')}</td>
  <td>{api.time}</td>
  <td>{api.status == 0? <><Box
  display={'flex'}
  justifyContent={'space-around'}
  
  >
    <Button className='btn btn-success' > 
    Approve
  </Button>
  
  <Button className='btn btn-danger' > 
    Cancel
  </Button>
  </Box>
    
  </> : <>
  <Box
  display={'flex'}
  justifyContent={'space-around'}
  
  >
    <Button className='btn btn-danger' > 
    Delete
  </Button>
 
  </Box>
  </> }
 
  </td>
  <td>{api.status==1 ?'Approved':api.status==0?'Pending':'Cancel'}
  </td>       
        </tr>
    </>   
   ))}
  </tbody>
</table>

        </Box>
    </Box>
    </>

    
  )
}

export default TableAppointmentByDoctor