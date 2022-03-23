import React,{useState,useEffect} from "react";
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
    Stack,
    HStack,
  } from '@chakra-ui/react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ChangeProfile from './ModalChangeProfileDoctor'
import Right from "../admin2/RightTest";
import {  handleGetAppointmentbyDoctor, handleGetProfileDoctorById } from '../services/doctor';
import ChangeProfileDoctor from "./ModalChangeProfileDoctor";
export default function ProfileDoctor(){
    const id = localStorage.getItem('idDoctor')
    const [app, setApp] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [avt, setAvt] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [gender, setGender] = useState('');
    async function byID(){
        const data1= await handleGetProfileDoctorById(id)
        console.log(data1);
        setName(data1.data.data[0].full_name)
        setAge(data1.data.data[0].age)
        setSpeciality(data1.data.data[0].speciality.name)
        setGender(data1.data.data[0].gender)
        setAvt(data1.data.data[0].avatar)
        setAddress(data1.data.data[0].address)
       }
     useEffect(() => {
        byID()
     
      
     }, [id])
       
      




    return(
        <>
            <Right/>
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
                     src={avt} 
                    width='250px' height='250px' borderRadius='50%' />
                        </Box> 
                        <input  type='file' className='custom-file-input' /> 
                    </Box>
                
            
                    <Box d='flex' justifyContent='center' alignItems='flex-start' w='400' h='360' flexDirection='column' >
                        <Box maxH='300' className='box'>
                        <HStack>
                        <Text maxH='100' fontWeight={'bold'}>
                                Full Name
                                <Input type='text'  
                                 value={name} 
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                            <Text maxH='100' fontWeight={'bold'}>
                                Speciality
                                <Input type='text' 
                                 value={speciality}
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                        </HStack>
                            
                            <Text maxH='100' fontWeight={'bold'}>
                                Address
                                <Input type='text' 
                                 value={address}
                                className='text-inf'
                                border={'none'}></Input>
                            </Text>
                            <HStack>
                            <Text  maxH='100' fontWeight={'bold'}>
                                Age
                                <Input type='text' 
                                 value={age} 
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
                            </HStack>
                           
                        </Box>         
                        <Button 
                            className='change-info'
                            // h={'45px'}
                            // w={'120px'}
                            mt={'10px'}
                            ml={'120px'}
                            >
                              <ChangeProfileDoctor doctor={id}/>
                        </Button>
                            <ToastContainer />
                    </Box> 
                </Box>
                
            </Flex>
        </>



  
    )
}