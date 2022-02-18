import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button
  } from '@chakra-ui/react';
  import React,{useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { PhoneIcon, EmailIcon, RepeatClockIcon,InfoIcon } from '@chakra-ui/icons' 
import Navbar from "./Navbar";
import Footer from './Footer' 
  export default function Alldoctor() {
    const [Api, setApi] = useState([]);

    useEffect(()=>{
        ApiCaller('get-all-doctor', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])

    return (
      <>
      <Navbar/>
      <Center py={6}   d='flex'
          flexWrap={'wrap'} >
           {Api.map(api => (  
        <Box ml='20px'
        
          maxW={'320px'}
          h={'400px'}
          w={'320px'}
          bg={ 'white'}
          boxShadow={'2xl'}
          rounded={'lg'}      
          p={6}
          ml= '80px'
          mt= '25px'
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                api.avatar
            }
            alt={api.full_name}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.400',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'} >
            {api.full_name}
          </Heading>
          <Text fontWeight={600} color={'black'} mb={4}>
            {api.speciality}
          </Text>
          
          <Text
            textAlign={'left'}
            color={ 'black'}
            px={3}>
           <InfoIcon/>  {api.age}
           
           
          </Text>
          <Text
            textAlign={'left'}
            color={'black'}
            px={3}>
            
         <PhoneIcon/>  {api.phone_number}
          </Text>
          <Text
            textAlign={'left'}
            color={'black'}
            px={3}>

         <EmailIcon/>   {api.account.email}
          </Text>
  
  

          <Stack   mt='8px'
           direction={'row'} 
           spacing={4}>
            <Button
            mt='30px'
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Book Now
            </Button>
          </Stack>
        </Box> 
           ))}
      </Center>
      <Footer/>

      </>
    );
  }