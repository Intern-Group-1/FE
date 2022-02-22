import React from 'react';
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
  import avt from '../assets/image/client.jpg'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import Modal from './Modal'




toast.configure()
function ProfileUser() {
    const HandleClick = () =>{
        alert(<AlertsSuccess />)
    }
    const notify = () => toast.success("Login success!");
    const notify1 = () => toast.error("Login failed!");

    const user={
        name:'dung',
        address :' hue',
        phone :'035555',
        gender :'Male'
    }
  return <>
    <Navbar />
    <Flex >

       


        <Box className='container-profile' w='80%' h='50%' m='10%' boxShadow='2xl' borderRadius='2xl' d='flex' rounded='md' bg='white' boxShadow='outline'
         d='flex' justifyContent='center'
         alignContent='center'>
               
        <Box className='user-avt'>
            <Image src={avt} w='50%' h='60%' boxShadow='2xl' m='10' borderRadius='50%' border='1px' borderColor='blue.300'></Image>
            <input  type='file' className='custom-file-input' /> 
        </Box>
       <Box d='flex' justifyContent='center' alignItems='flex-start' w='50%' h='60%' flexDirection='column'  flexGrow='2'>
        <Box  className='box'>
        <Text maxH='100' >
            Full Name
            <Input type='text'  placeholder={user.name} className='text-inf'></Input>
        </Text>
        <Text  maxH='100'>
           Address
            <Input type='text' placeholder={user.address} className='text-inf'></Input>
        </Text>
        <Text maxH='100'>
            Phone
            <Input type='text' placeholder={user.phone} className='text-inf'></Input>
        </Text>
        <Text >
            Gender
            <Input type='text' placeholder={user.gender} className='text-inf'></Input>
        </Text>
     
        </Box>
            {/* <Button 
            className='change-info'
            h={'45px'}
            w={'120px'}
            mt={'10px'}
            ml={'170px'}
            >
                <InitialFocus />
            </Button> */}
            {/* <Button
            onClick={notify}
            >
                Test
            </Button>
             <ToastContainer /> 
            <Button
            onClick={notify1}
            >
                Test1
            </Button> */}
            <ToastContainer />
        </Box> 
       
           
           <ToastContainer />
                     </Box> 

    </Flex>
  <Footer />
  </>
}

export default ProfileUser;