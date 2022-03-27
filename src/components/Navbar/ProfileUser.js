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
import React,{useState,useEffect} from 'react';
import '../../style/input-file.css'
import '../../responsive/profile/Profile.css'
import InitialFocus from '../Login/Modal'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'
import moment from 'moment'
import { FaCheckCircle,FaTimesCircle,FaHistory,FaSplotch,FaPaperPlane } from "react-icons/fa";
import { handleGetAppointment } from '../../services/Appointment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleCreateUser, handleGetUserId } from '../../services/User';
import { useNavigate } from 'react-router-dom'
  

toast.configure()
function ProfileUser(){
    const navigate = useNavigate()
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
    function  navigateToAllDoctor(){
        navigate('/doctor')
    }
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
            <Box d='flex'   flexDirection='column-reverse'
             width='250px' height='250px' borderRadius='50%'  border='1px'
              boxShadow='2xl' m='10' borderColor='blue.300'>
            <Image src={avatar} width='250px' height='250px' borderRadius='50%' />
            <Button  
           position={'absolute'}
           fontSize={'23px'}
           fontWeight={'bold'}
           color={'blue.600'}
           bg={'#edf2f7'}
           mb='-60px'
            ml='50px'
           onClick={navigateToAllDoctor}
           _hover={{
               color:'gray.200',
               backgroundColor:'blue.300'
           }}
           >
             <FaPaperPlane color='#de590f'/> Book Now</Button>
                </Box> 
                
            </Box>
        
       
            <Box d='flex' justifyContent='center' alignItems='flex-start' w='400' h='360' flexDirection='column' >
                <Box maxH='300' className='box'>
             
                    <Text maxH='100' fontWeight={'bold'}>
                        Full Name
                        <Input type='text'  
                        value={full_name} 
                        className='text-inf'
                        border={'1px #00499b solid'}></Input>
                    </Text>
                    <Text  maxH='100' fontWeight={'bold'}>
                    Address
                        <Input type='text' 
                        value={address} 
                        className='text-inf'
                        border={'1px #00499b solid'}></Input>
                    </Text>
                    <Text maxH='100' fontWeight={'bold'}>
                        Phone
                        <Input type='text' 
                        value={phone}
                        className='text-inf'
                        border={'1px #00499b solid'}></Input>
                    </Text>
                    <Text fontWeight={'bold'}>
                        Gender
                        <Input type='text' 
                         value={gender == true ? 'Male': 'Female'} 
                        className='text-inf'
                        border={'1px #00499b solid'}></Input>
                    </Text>
                </Box>         
                <Box  
                    className='change-info'
                    h={'45px'}
                    w={'140px'}
                    mt={'10px'}
                    ml={'130px'}
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
            marginBottom={'60px'}
            pb='50px'
            position={'relative'}
            >
                {appointment.length!=0? <Text
            position={'absolute'}
            top={'5px'}
            left={'50px'}
            fontSize={'23px'}
            fontWeight={'bold'}
            color={'#6e6767'}
            >Your appointment</Text> 
            :<><Box>
             <Text
            position={'absolute'}
            top={'5px'}
            left={'50px'}
            fontSize={'23px'}
            fontWeight={'bold'}
            color={'#6e6767'}
            >No Appointment</Text> 
            <Button  
            hidden={loading?false:true} 
            position={'absolute'}
            top={'5px'}
            left={'50px'}
            fontSize={'23px'}
            fontWeight={'bold'}
            color={'blue.600'}
            ml='190px'
            onClick={navigateToAllDoctor}
            >
               Please Make An Appointment</Button> 
              
               </Box>
               </>  }
          
            
            {loading ?appointment.map(app=>(  
                <>
            
            <Box 
            h={'175px'}
            style={
                app.status==0?{ border:'2px #cccc dashed'}
            :app.status==1?{border:'2px #02c800 dashed'}:{border:'2px red dashed'}
            
            }
           
            boxShadow={'2px 2px #cccc'}
            className='tag-schedule'
            position={'relative'}
            >
                
                <Box 
                className='infodoctor'
                style={
                    app.status==0?{ borderRight:'2px #cccc dashed'}
                :app.status==1?{borderRight:'2px #02c800 dashed'}:{borderRight:'2px red dashed'}
            }
                >
                    <Text fontWeight={'bold'} style={
                app.status==0?{ color:'gray'}
            :app.status==1?{color:'#02c800'}:{color:'red'}
         }>{ app.status==0?<Box display={'flex'} flexDirection='row'><FaHistory size={'25px'}/>Pending</Box>:app.status==1?
         <Box display={'flex'} flexDirection='row'><FaCheckCircle size={'25px'}/>Approved</Box>
         :
         <Box display={'flex'} flexDirection='row'><FaTimesCircle size={'25px'}/>Cancel</Box>}</Text>
                    <Avatar
                    mt={'15px'}
                    size={'xl'}
                    src={app.doctor.avatar}
                    />
                    
                 

                </Box>
                
                <Box className='info-schdule'  >
                    <Text>Time: {app.time}</Text>
                    <Text>Date: {moment(app.date).format('L')}</Text>

                    {/* <Text>Time: {api.branch}</Text> */}
                    <Text>{app.doctor.full_name}</Text>
                    <Text>{app.branch.address}</Text>
                </Box>
            </Box>
            </>  )):<><Box  mt='200px' height={'500px'} pl={'700px'}>
             
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