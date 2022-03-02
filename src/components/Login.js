import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  ChakraProvider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link,
  Img,
 

} from '@chakra-ui/react';
import '../responsive/account/signin.css'
import { } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Signup from './Signup';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Session from 'react-session-api'
import { handleLoginAPI,handleGetUserId } from '../services/User'
import bg from '../assets/image/backgroundLogin.jpg'
import gif from '../assets/image/heart.gif'
import { ArrowBackIcon } from '@chakra-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InitialFocus from './Modal'


function SimpleCard() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [messagea, setMessage] = useState('')
  const [eye, setEye] = useState(false)
  const navigate = useNavigate()
  const handleUserNameInput = e => {
    setUsername(e.target.value);
  }
  const handlePasswordInput = e => {
    setPassword(e.target.value);
    
  }
  
  const handleLogin = async () => {
    try {
      const data = await handleLoginAPI(username, password)
      console.log('datala');
      console.log(data);
      localStorage.setItem('role',data.data.data.role)
      
      

      if (data) {
        localStorage.setItem('token', data.data.data.tokens[0].token)
        Session.set('user', data.data.data._id)
           
       

      }
      var loggedInUser = localStorage.getItem('token');
      console.log(loggedInUser)
      
      if (loggedInUser!=null) {
        toast.success("Login success!");
        
        // const data2= await handleGetUserId()
        // console.log(data2.data.data);
        // localStorage.setItem('byToken',data2.data.data._id)
        navigate('/home')
        // delete localStorage.role;
      }
      // if(localStorage.getItem('role') =='admin'){
      //   navigate('/admin')
      // }
      
    } catch (error) {
     
          toast.error("Login failed!");
      //console.log(error);
      // if (error) {
      //   if (error.response) {
      //     if (error.response.data) {
      //       console.log(error.response.data);
      //       setMessage(error.response.data.message);
           
      //     }
      //   }
      // }
     
    }
  }
  const handleShowHidePassword = () => {
    setEye(!eye)
  }

  return (<div className='login-page' >
        <Stack direction='row' spacing={4} className='btn-backtohome'>
        <Button  as={'a'} leftIcon={<ArrowBackIcon />} href='/home' >
          Back to Homepage
        </Button>
      </Stack>

    <div />
    <Flex
      className='container-form'
      minH={'120vh'}
      align={'center'}
      justify={'center'}

      //  backgroundImage={bglg} 
      // backgroundColor='blue.100'
      // backgroundRepeat='no-repeat' backgroundSize='cover'
      >
      <Stack  spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} ml='200' mb='20'>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color='blue.400'>Welcome to Doctor Care</Heading>
          <Text fontSize={'lg'} color={'gray.500'}>

          If you don't have an account, please 
            <Link href='/signup' color={'blue.500'}> register</Link>


            ✌️
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          className='form-signin'
          p={8}>

          <Stack spacing={4} >
            <FormControl id="email">

              <FormLabel>Email address</FormLabel>
              <Input type="email" id="email" value={username} placeholder='Enter your email' onChange={handleUserNameInput} />
            </FormControl>
            <FormControl >
              <FormLabel>Password</FormLabel>
              <Input  id="password" type={eye ? 'text' : 'password'} value={password} placeholder='Enter your password' onChange={handlePasswordInput} />
              <span onClick={handleShowHidePassword}><i class={eye ? "far fa-eye eye" : "far fa-eye-slash eye"}></i></span>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox >Remember Me</Checkbox>
                {/* Remember me</Checkbox> */}
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                href={'/signin'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',

                }}
                onClick={handleLogin}

              >
                Sign in
              </Button>

              <Text color='red'
              >
                {messagea}
              </Text>

            </Stack>
          </Stack>

        </Box>

      </Stack >
      <Box className='animation'>
      <Img src={gif} width='50%'/>
      <Img src={gif} width='100%'/>
      <Img src={gif} width='50%'/>
      </Box>
    </Flex>
            
  </div>
  );
}

export default SimpleCard;

