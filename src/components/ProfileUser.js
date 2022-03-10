import React,{useState,useEffect} from 'react';
import ApiCaller from '../utils/apiCaller';
import '../style/input-file.css'
import '../responsive/profile/Profile.css'
import InitialFocus from './Modal'
import AlertsSuccess from './Success'
import Navbar from './Navbar'
import Footer from './Footer'
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { handleCreateUser, handleGetUserId } from '../services/User';
  import { handleGetAppointment } from '../services/Appointment';
toast.configure()
function ProfileUser(){
   const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
   const [gender, setGender] = useState()
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
   const [Iduser, setIdUser] = useState('')
    const byID = async ()=>{ 
        const data= await handleGetUserId()
        console.log(data)
        if(data)
        {
            setName(data.data.data[0].full_name)
            setAvt(data.data.data[0].avatar)
            setAddress(data.data.data[0].address)
            setPhone(data.data.data[0].phone_number)
            setGender(data.data.data[0].gender)
            setIdUser(data.data.data[0]._id)
        }
    }
    const [appointment, setAppointment] = useState([])
    const handleGetApp = async (req, res)=>{
            const data = await handleGetAppointment(Iduser)
            return data
    } 
    const loggedInUser = localStorage.getItem('token')
    useEffect(async () => {
        const app =await handleGetApp()
        setAppointment(app.data.data)
        if(loggedInUser){
            byID()
        }
      }, [ byID()])

         
  return <>
    
    <Navbar />
   
    <Flex >
        <Box className='container-profile'  w='90%' h='50%' m='5%' boxShadow='2xl' borderRadius='2xl' d='flex' rounded='md' bg='white' boxShadow='outline'
         d='flex' justifyContent='center'
         alignContent='center'>
        <Box className='user-avt'>
           <Box width='250px' height='250px' borderRadius='50%'  border='1px' boxShadow='2xl' m='10'  border='1px' borderColor='blue.300'>
           <Image src={avatar} width='250px' height='250px' borderRadius='50%' />
               </Box> 
            <input  type='file' className='custom-file-input' /> 
        </Box>
        
       
       <Box d='flex' justifyContent='center' alignItems='flex-start' w='400' h='360' flexDirection='column' >
        <Box maxH='300' className='box'>
        <Text maxH='100' >
            Full Name
            <Input type='text'  
              value={full_name} 
            className='text-inf'></Input>
        </Text>
        <Text  maxH='100'>
           Address
            <Input type='text' 
             value={address} 
            className='text-inf'></Input>
        </Text>
        <Text maxH='100'>
            Phone
            <Input type='text' 
            value={phone}
             className='text-inf'></Input>
        </Text>
        <Text>
            Gender
            <Input type='text' 
             value={gender == true ? 'Male': 'Female'} 
            className='text-inf'></Input>
        </Text>

        </Box>
      
    <Button 
            className='change-info'
            h={'45px'}
            w={'120px'}
            mt={'10px'}
            ml={'120px'}
            >
                <InitialFocus />
            </Button>
            <ToastContainer />
        </Box> 
        <Box className='schedule' w={'720px'} h={'410px'}>
        {appointment.map(app=>(
            <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>{app.doctor.full_name}</Text>
                    {/* <Text>{app.speciality}</Text> */}
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: {app.time}</Text>
                    <Text>Date: {app.date}</Text>
                    <Text>Address: {app.branch.address}</Text>
                </Box>
            </Box>
            ))}
       
        </Box>
        </Box>
        
       
    </Flex>
  <Footer />
  </>
}

export default ProfileUser;