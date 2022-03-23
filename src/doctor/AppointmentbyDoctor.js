import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from '../admin2/RightTest'
import { AiOutlineCheck } from 'react-icons/ai'
import moment from 'moment'
import { handleGetAppointmentByDoctor } from '../services/doctor';
function TableAppointmentByDoctor() {
    const emailDoctor = localStorage.getItem('emailAccount')
   console.log(emailDoctor);
    const [App, setApp] = useState([]);
    const [Api, setApi] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [iddoctor,setID]=useState('');
    useEffect(()=>{
      ApiCaller('get-all-appointment', 'GET')
    .then ( async res => {
      
      setApi(res.data.data)
    })
  },[])
 

  useEffect(()=>{
      ApiCaller('get-all-doctor', 'GET')
    .then ( async res => {
      console.log(res);
      setDoctor(res.data.data)
    })
  },[])

  doctor.map(gmail=>{
    console.log(gmail.account.email);
    if(gmail.account.email==emailDoctor){
      console.log('id bac si');
     
      //  setID('6239e0e1e43d2e821303d3ff')
        console.log(iddoctor);
    }
    else {
      console.log('null');
    }
     
    // console.log(id);
          // const app=   handleGetAppointmentByDoctor(id)
            //  setApp(app)

  })
  // useEffect(async () => {
    
  //   const app = await handleGetAppointmentByDoctor('6239e0e1e43d2e821303d3ff')
  //   // if (app){
  //   //     setLoading(true)
  //   // }
  //   console.log('apppp');
   
  //   setApp(app.data.data)
    
     
   
  // },[id])
   
 

      

function handleGetID(id){
  console.log('id app');
  console.log(id);
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
      <th >Status</th>
      <th >Handle</th>
    </tr>
  </thead>
 
  <tbody>
   {Api.map(api => (
    <>
        <tr >
  <td >{api.branch!=null? <>{api.branch.name}</>:<>NULL</>}</td>
 
  <td >{api.user?<>{api.user.full_name}</>:<b>NULL</b>}</td>
  {/* <td>{api.user?<>{api.user.address}</>:<b>NULL</b>}</td> */}
  <td>{api.user?<>{api.user.phone_number}</>:<b>NULL</b>}</td>
  <td>{api.doctor.full_name}</td>

         
        
 
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