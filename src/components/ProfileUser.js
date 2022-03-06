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
toast.configure()
function ProfileUser(){
   const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
   const [gender, setGender] = useState('')
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
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
        }
    }
    const loggedInUser = localStorage.getItem('token')
    useEffect(() => {
        if(loggedInUser){
            byID()
        }
      }, [ byID()])
    // useEffect(() => {
      
    //     ApiCaller('get-all-user', 'GET')
    //         .then( res => {
    //             // console.log('data la');
    //             //console.log(res.data.data);
    //             // console.log(localStorage.Id_user);
    //             console.log(res.data.data);
    //              if(res.data.data._id==localStorage.Id_user){


    //                 setApi(res.data.data._id)
                     
    //                     }
              
                
    //         })
           
    // }, [])
  return <>
    
    <Navbar />
   
    <Flex >
<<<<<<< HEAD

        
       

       
=======
>>>>>>> 0ce8ad1f4e1ba8b089cc02e738a4f8c924762261
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
             value={gender} 
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
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Gutman</Text>
                    <Text>Orthopedic</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 25/02  </Text>
                    <Text>Address: Hoang Long, 14 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Kilgore</Text>
                    <Text>General Physician</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 09:00-10:00</Text>
                    <Text>Date: 10/03</Text>
                    <Text>Address: Kim Anh, 23 Tran Phu</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>

                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 16/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 10:00</Text>
                    <Text>Date: 12/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box>

       
        </Box>
        </Box>
        
       
    </Flex>
  <Footer />
  </>
}

export default ProfileUser;