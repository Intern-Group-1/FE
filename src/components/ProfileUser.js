import React,{useState,useEffect} from 'react';
import '../style/input-file.css'
import '../responsive/profile/Profile.css'
import InitialFocus from './Modal'
import Navbar from './Navbar'
import Footer from './Footer'
import moment from 'moment'
import ChangeAppointment from './ModalChangeAppointment'
import { handleGetAppointment } from '../services/Appointment';
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
    styled,
    background,
    Avatar,
    Spinner
  } from '@chakra-ui/react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { handleCreateUser, handleGetUserId } from '../services/User';
toast.configure()
function ProfileUser(){
    const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
   const [gender, setGender] = useState()
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
   const [Iduser, setIdUser] = useState('')
   const [loading,setLoading] =useState(false)
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
        if (app){
            setLoading(true)
        }
        console.log('apppp');
        console.log(app);
        setAppointment(app.data.data)
        
         
       
      },[Iduser])
      
  return <>
    
    <Navbar />
   
    <Flex 
    flexDirection={'column'}
    alignItems={'center'}
    >
        <Box className='container-profile'  
        w='90%' 
        h='400px' 
        m='5%' 
        boxShadow='2xl' 
        d='flex' 
        rounded='md' 
        bg='white'  
        justifyContent='center'
        alignItems={'center'}
        alignContent='center'
        position={'relative'}
        >
            <Text
            position={'absolute'}
            top={'25px'}
            left={'50px'}
            fontSize={'23px'}
            fontWeight={'bold'}
            color={'#6e6767'}
            >
                Your profile
            </Text>
            <Box className='user-avt' w={'450px'}>
            <Box width='250px' height='250px' borderRadius='50%'  border='1px' boxShadow='2xl' m='10' borderColor='blue.300'>
            <Image src={avatar} width='250px' height='250px' borderRadius='50%' />
                </Box> 
                <input  type='file' className='custom-file-input' /> 
            </Box>
        
       
            <Box className='wrapper-info' d='flex' justifyContent='center' alignItems='flex-start' w='400' h='360' flexDirection='column' >
                <Box maxH='300' className='box'>
                    <Text maxH='100' fontWeight={'bold'}>
                        Full Name
                        <Input type='text'  
                        value={full_name} 
                        className='text-inf'
                        border={'none'}></Input>
                    </Text>
                    <Text  maxH='100' fontWeight={'bold'}>
                    Address
                        <Input type='text' 
                        value={address} 
                        className='text-inf'
                        border={'none'}></Input>
                    </Text>
                    <Text maxH='100' fontWeight={'bold'}>
                        Phone
                        <Input type='text' 
                        value={phone}
                        className='text-inf'
                        border={'none'}></Input>
                    </Text>
                    <Text fontWeight={'bold'}>
                        Gender
                        <Input type='text' 
                         value={gender == true ? 'Male': 'Female'} 
                        className='text-inf'
                        border={'none'}></Input>
                    </Text>
                </Box>         
                <Box 
                    className='change-info'
                    h={'45px'}
                    w={'120px'}
                    mt={'10px'}
                    ml={'120px'}
                    >
                    <InitialFocus />
                </Box>
                    <ToastContainer />
            </Box> 
        </Box>
      
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
            
            {loading ?appointment.map(app=>(       
            <Box 
            style={
                app.status==0?{ border:'2px #cccc dashed'}
            :app.status==1?{border:'2px green dashed'}:{border:'2px red dashed'}
        }
           
            boxShadow={'2px 2px #cccc'}
            className='tag-schedule'
            position={'relative'}
            >
                <Box 
                className='infodoctor'
                style={
                    app.status==0?{ borderRight:'2px #cccc dashed'}
                :app.status==1?{borderRight:'2px green dashed'}:{borderRight:'2px red dashed'}
            }
                >
                    <Avatar
                    size={'xl'}
                    src={app.doctor.avatar}
                    />
                    <Box

                      visibility={  app.status==0? 'visible'
                            :'hidden'}
                    position={'absolute'}
                    bottom={'7px'}
                    left={'20px'}
                    >
                        <ChangeAppointment/>
                    </Box>

                </Box>
                <Box className='info-schdule'>
                    <Text>Time: {app.time}</Text>
                    <Text>Date: {moment(app.date).format('L')}</Text>
                    <Text>{app.doctor.full_name}</Text>
                    <Text>{app.branch.address}</Text>
                </Box>
            </Box>
            )):<><Box  mt='200px' height={'500px'} pl={'700px'}>
             
            <Spinner

          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> <Text  color={'blue.500'}>Loading...</Text>  </Box></>} 

        </Box>
        
       
    </Flex>
  <Footer />
  </>
}

export default ProfileUser;