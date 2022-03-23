import React,{useState,useEffect} from 'react';
import '../style/input-file.css'
import '../responsive/profile/Profile.css'
import moment from 'moment'
import MakeSchedule from './MakeSchedule'
import { handleGetAppointment } from '../services/Appointment';
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
    Avatar,
  } from '@chakra-ui/react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { handleCreateUser, handleGetUserId } from '../services/User';
import Right from '../admin2/RightTest';
toast.configure()
function HistoryWork(){
    const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
   const [gender, setGender] = useState()
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
   const [Iduser, setIdUser] = useState('')
   const [appointment, setAppointment] = useState([])
   const byID = async ()=>{ 
    const data= await handleGetUserId()
    console.log('haha');
   
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
console.log('idid');
console.log(Iduser);
const loggedInUser = localStorage.getItem('token')
    useEffect(async () => {
      
        await byID()  
        const app = await handleGetAppointment(Iduser)
        console.log('apppp');
        console.log(app);
        setAppointment(app.data.data)
        
         
       
      },[Iduser])
      
  return (<>
    <Right />
    <Flex 
    flexDirection={'column'}
    alignItems={'center'}
    >
       
        
        <Box className='schedule' 
            w={'90%'} 
            minHeight='fit-content' 
            bg='white'  
            boxShadow='2xl' 
            rounded='md' 
            marginBottom={'30px'}
            pb='40px'
            position={'relative'}
            >
            <Text
            position={'absolute'}
            top={'5px'}
            left={'50px'}
            fontSize={'23px'}
            fontWeight={'bold'}
            color={'#6e6767'}
            >Your appointment</Text>
            
            {appointment.map(app=>(       
            <Box 
            border={'2px #cccc dashed'}
            boxShadow={'2px 2px #cccc'}
            className='tag-schedule'
            position={'relative'}
            >
                <Box 
                className='infodoctor'
                borderRight={'2px #cccc dashed'}
                >
                    <Avatar
                    size={'xl'}
                    src={app.doctor.avatar}
                    />
                    <Box
                    visibility={'visible'}
                    _hover={{
                        visibility: 'visible'
                    }}
                    position={'absolute'}
                    bottom={'7px'}
                    left={'20px'}
                    >
                        <MakeSchedule/>
                    </Box>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: {app.time}</Text>
                    <Text>Date: {moment(app.date).format('L')}</Text>
                    {/* <Text>Time: {api.branch}</Text> */}
                    <Text>{app.doctor.full_name}</Text>
                    <Text>Speciality</Text>
                </Box>
            </Box>
            ))} 
        </Box>
        
       
    </Flex>
  </>)
}

export default HistoryWork;