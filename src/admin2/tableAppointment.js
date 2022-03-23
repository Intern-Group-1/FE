import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest'
// import ModalDoctor from './ModalDoctor'
import { AiOutlineCheck } from 'react-icons/ai'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { handleUpateStatus,handleDeleteStatus,handleGetUserById, handleGetDoctorById, handleGetAppointment  } from '../services/admin';
import { ToastContainer, toast } from 'react-toastify';
function TableAppointment() {
  const navigate = useNavigate()
    const [Api, setApi] = useState([]);
 
    useEffect(()=>{
        ApiCaller('get-all-appointment', 'GET')
      .then ( async res => {
        console.log("Data email")
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
   const handleGetID = async(id,user, doctor) =>{ 
    const da = await handleGetDoctorById(doctor)
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
    navigate('/admin/')
    navigate('/admin/appointment/')
    }
    async function handleGetBYID(id){
    await handleDeleteStatus(id)
    toast.success("Delete Successful!");
    navigate('/admin/')
    navigate('/admin/appointment/')
    }
    async function  handleCancelID(id,user, doctor){
      const da = await handleGetDoctorById(doctor)
      const data = await handleGetUserById(user)
      let email = [data.data.data[0].account.email, da.data.data[0].account.email]
      const da_ta = new FormData();
      da_ta.append("status", 0)
      da_ta.append("email", email)
      await handleUpateStatus(id, da_ta)
      toast.success("Successful!");
      navigate('/admin/')
      navigate('/admin/appointment/')
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
        <th width='130px'>Name Doctor</th>
        {/* <th >Address Doctor </th>
        <th >Phone Doctor</th> */}
        <th width='130px'>Speciality</th>
       
        <th width='50px' >Date</th>
        <th width='120px'>Time</th>
        <th >Status</th>
        <th >Handle</th>
      </tr>
    </thead>
    <tbody>
     {Api.map(api => (
      <>
          <tr>
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
    <td><Box
    display={'flex'}
    justifyContent={'space-around'}
    >
      <>    
        <Button className='btn btn-success'disabled={api.status ==0? false : true}  onClick={e=>handleGetID( api._id,api.user._id,api.doctor._id)}>  Approve</Button>
        <Button className='btn btn-danger' disabled={api.status ==1? false : true} onClick={e=>handleCancelID( api._id,api.user._id,api.doctor._id)}>Cancel</Button>
        <Button className='btn btn-danger' disabled={api.status ==1? false : true} onClick={e=>handleGetBYID(api._id)}> Delete </Button>
    </>
    </Box>
      
    {/* </> : <>
    <Box
    display={'flex'}
    justifyContent={'space-around'}
    
    >
      <Button className='btn btn-danger' onClick={e=>handleGetBYID(api._id)}> 
      Delete
    </Button>
   
    </Box>
    </> } */}
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