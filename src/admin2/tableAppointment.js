import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest'
import ModalDoctor from './ModalCreateDoctor'
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
      <th width='130px'>Phone Customer</th>
      <th width='130px'>Name Doctor</th>
      <th width='130px'>Speciality</th>
      <th width='50px' >Date</th>
      <th width='120px'>Time</th>
      <th style={{textAlign:'center'}} >Handle</th>
      <th >Status</th>
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

export default TableAppointment