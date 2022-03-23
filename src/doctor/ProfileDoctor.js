import React from "react";
import SlideBar from './SlideBar'
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
  import ChangeProfile from './ModalChangeProfile'

export default function ProfileDoctor(){
    return(
        <>
            <SlideBar/>
            <Flex 
            flexDirection={'column'}
            alignItems={'center'}
            >
                <Box className='container-profile'  
                w='70%' 
                h='400px' 
                m='5%' 
                ml={'300px'}
                boxShadow='2xl' 
                d='flex' 
                rounded='md' 
                bg='white'  
                justifyContent='center'
                alignItems={'center'}
                alignContent='center'>
                    <Box className='user-avt' w={'450px'}>
                    <Box width='250px' height='250px' borderRadius='50%'  border='1px' boxShadow='2xl' m='10' borderColor='blue.300'>
                    <Image 
                    // src={avatar} 
                    width='250px' height='250px' borderRadius='50%' />
                        </Box> 
                        <input  type='file' className='custom-file-input' /> 
                    </Box>
                
            
                    <Box d='flex' justifyContent='center' alignItems='flex-start' w='400' h='360' flexDirection='column' >
                        <Box maxH='300' className='box'>
                            <Text maxH='100' fontWeight={'bold'}>
                                Full Name
                                <Input type='text'  
                                // value={full_name} 
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                            <Text  maxH='100' fontWeight={'bold'}>
                                Age
                                <Input type='text' 
                                // value={address} 
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                            <Text maxH='100' fontWeight={'bold'}>
                                Speciality
                                <Input type='text' 
                                // value={phone}
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                            <Text fontWeight={'bold'}>
                                Gender
                                <Input type='text' 
                                // value={gender} 
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                        </Box>         
                        <Button 
                            className='change-info'
                            // h={'45px'}
                            // w={'120px'}
                            mt={'10px'}
                            ml={'120px'}
                            >
                              <ChangeProfile/>
                        </Button>
                            <ToastContainer />
                    </Box> 
                </Box>
                
            </Flex>
        </>



  
    )
}