import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest'
import ModalDoctor from './ModalDoctor'
import { AiOutlineCheck } from 'react-icons/ai'
import moment from 'moment'
function TableAppointment() {

    const [Api, setApi] = useState([]);
 
    useEffect(()=>{
        ApiCaller('get-all-appointment', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])
    const [sp, setSp] = useState([]);
    const [speciality_id, setSpecialityId] = useState('');
    useEffect(() => {
        ApiCaller('get-all-speciality', 'GET')
            .then(async res => {
                console.log(res);
                setSp(res.data.data)
            })
    }, [])


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
           
            width:'1300px',
            height:'800px',
            marginTop:'20px',
           
        }} >
  <thead>
    <tr >
      
      <th width='140px'>Branch</th>    
      <th width='150px'>Name Customer</th>
      {/* <th width='100px' >Address Customer</th> */}
      <th width='150px'>Phone Customer</th>
      <th width='150px'>Name Doctor</th>
      {/* <th >Address Doctor </th>
      <th >Phone Doctor</th> */}
      <th width='150px'>Speciality</th>
     
      <th width='50px' >Date</th>
      <th width='130px'>Time</th>
      <th >Handle</th>
    </tr>
  </thead>
 
  <tbody>
   {Api.map(api => (
    <>
        <tr >
  <td >{api.branch.address}</td>
 
  <td >{api.user?<>{api.user.full_name}</>:<b>NULL</b>}</td>
  {/* <td>{api.user?<>{api.user.address}</>:<b>NULL</b>}</td> */}
  <td>{api.user?<>{api.user.phone_number}</>:<b>NULL</b>}</td>
  <td>{api.doctor.full_name}</td>
  {/* <td>{api.doctor.address}</td>
  <td>{api.doctor.phone_number}</td> */}
 
  <td>{sp.map(sp=>(
           <>
           {api.doctor.speciality==sp._id ? <a>{sp.name}</a>:<></>}
           </>
        )
         
        )}         
        
  </td>
  <td>{moment(api.date).format('L')}</td>
  <td>{api.time}</td>
  <td><Button className='btn btn-success' width={'70px !important'}> <AiOutlineCheck /> </Button></td>
   
        {/* <td>{api.user}</td> */}
        {/* <td>076851211034</td>
        <td>Dr.Thanh</td>
        <td>Neurology</td>
        <td>Da Nang city</td>
        <td>Waiting</td>   
        <td><Button className='btn btn-success' width={'70px !important'}> <AiOutlineCheck /> </Button></td> */}
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

export default TableAppointment