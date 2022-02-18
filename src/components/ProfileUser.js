import React from 'react';
import '../style/input-file.css'
import InitialFocus from './Modal'
import AlertsSuccess from './Success'
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
    <Flex >
        <Box  w='80%' h='50%' m='10%' boxShadow='2xl' borderRadius='2xl' d='flex' rounded='md' bg='white' boxShadow='outline'
         d='flex' justifyContent='center'
         alignContent='center'>
        <Box className='user-avt'>
            <Image src={avt} w='250' h='250' boxShadow='2xl' m='10' borderRadius='50%' border='1px' borderColor='blue.300'></Image>
            <input  type='file' className='custom-file-input' /> 
        </Box>
       <Box d='flex' justifyContent='center' alignItems='flex-start' w='50%' h='400' flexDirection='column'  flexGrow='2'>
        <Box maxH='300' className='box'>
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
            <Button 
            h={'45px'}
            w={'120px'}
            mt={'10px'}
            ml={'170px'}
            >
                <InitialFocus />
            </Button>
            <Button
            onClick={notify}
            >
                Test
            </Button>
            {/* <ToastContainer /> */}
            <Button
            onClick={notify1}
            >
                Test1
            </Button>
            <ToastContainer />
        </Box> 
        </Box>
        
    </Flex>
  </>;
}

export default ProfileUser;