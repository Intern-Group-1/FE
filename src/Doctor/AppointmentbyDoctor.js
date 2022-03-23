import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from '../admin2/RightTest'
import { AiOutlineCheck } from 'react-icons/ai'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import {  handleGetAppointmentbyDoctor } from '../services/doctor';
import { ToastContainer, toast } from 'react-toastify';
import { handleUpateStatus,handleDeleteStatus,handleGetUserById, handleGetDoctorById, handleGetAppointment  } from '../services/doctor';

function TableAppointmentByDoctor() {
    const iddoctor = localStorage.getItem('idDoctor')
    const [Api, setApi] = useState([]);
    const [app, setApp] = useState([]);
    const navigate = useNavigate()
   async function byID(){
    const data1= await handleGetAppointmentbyDoctor(iddoctor)
    console.log(data1);
    setApp(data1.data.data)
   }
   useEffect(()=>{
    byID()
   },[iddoctor])
    
 
    
   async function handleGetID (id,user) { 
     console.log(id);
     console.log(user);
     console.log(iddoctor);
    const da = await handleGetDoctorById(iddoctor)
    const data = await handleGetUserById(user)
    const date = await handleGetAppointment(id)
    console.log("Data Appointment")
    console.log(date)
    let email = [data.data.data[0].account.email, da.data.data[0].account.email]
    let content =[date.data.data.branch.name, date.data.data.branch.address, date.data.data.date, date.data.data.time]
    console.log(content)
      const da_ta =  new FormData();
      da_ta.append("status", 1)
      da_ta.append("email", email)
      da_ta.append("content", content)
    await handleUpateStatus(id, da_ta)
 
    toast.success("Successful!");
    navigate('/manager/')
    navigate('/manager/appointment/')
    }
    async function handleGetBYID(idapp){
      console.log('hahaha');
      console.log('id app');
      console.log(idapp);
    await handleDeleteStatus(idapp)
    toast.success("Delete Successful!");
    navigate('/manager/')
    navigate('/manager/appointment/')
    }
    async function  handleCancelID(id,user, iddoctor){
      const da = await handleGetDoctorById(iddoctor)
      const data = await handleGetUserById(user)
      let email = [data.data.data[0].account.email, da.data.data[0].account.email]
      const da_ta = new FormData();
      da_ta.append("status", 0)
      da_ta.append("email", email)
      await handleUpateStatus(id, da_ta)
      toast.success("Successful!");
      navigate('/manager/')
      navigate('/manager/appointment/')
    }




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
   <Button className='btn btn-success'disabled={api.status ==0? false : true} 
    onClick={e=>handleGetID( api._id,api.user._id)}>  Approve</Button>
        <Button className='btn btn-danger'
         disabled={api.status ==1? false : true} 
         onClick={e=>handleCancelID( api._id,api.user._id,iddoctor)}
         >Cancel</Button>
        <Button className='btn btn-danger' 
        disabled={api.status ==1? true : false} 
        onClick={(e)=>handleGetBYID(api._id)}
        > Delete </Button>
  </Box>
    
  </> : <>
  <Button className='btn btn-success'disabled={api.status ==0? false : true} 
    onClick={e=>handleGetID( api._id,api.user._id)}>  Approve</Button>
        <Button className='btn btn-danger'
         disabled={api.status ==1? false : true} 
         onClick={e=>handleCancelID( api._id,api.user._id,iddoctor)}
         >Cancel</Button>
        <Button className='btn btn-danger' 
        disabled={api.status ==1? false : true} 
        onClick={(e)=>handleGetBYID(api._id)}
        > Delete </Button>
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