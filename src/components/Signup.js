import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextFeild';
import * as Yup from 'yup';
import { useState } from 'react';
import '../style/signup.css'
import { Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link, } from '@chakra-ui/react';
  import { ArrowBackIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export  const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const validate = Yup.object({
   
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <>
    <Stack direction='row' spacing={4}>
       
       <Button  as={'a'} leftIcon={<ArrowBackIcon />} href='/home' >
         Back to Homepage
       </Button>
     </Stack>
    <Formik
      initialValues={{
      
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
       
      {formik => (
         <Flex
         minH={'100vh'}
         align={'center'}
         justify={'center'}
         bg={'white'}>
         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
           <Stack align={'center'}>
             <Heading fontSize={'4xl'} textAlign={'center'}>
               Sign up
             </Heading>
             <Text fontSize={'lg'} color={'gray.600'}>
               to enjoy all of our cool features ✌️
             </Text>
           </Stack>
          <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
             
              <TextField label="Email" name="email" type="email" />
              <FormControl id="password">
              {/* <TextField label="Password" name="password" type="password" /> */}
            
              <TextField label='Password' name="password" type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'120px'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
             
                 
                    
              </FormControl>
              <FormControl id="password">
              {/* <TextField label="Password" name="password" type="password" /> */}
            
              <TextField label="Confirm Password" name="confirmPassword" type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'120px'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
             
                 
                    
              </FormControl>
              
              
            
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
            
              </Stack>
              
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href="/signin" color={'blue.400'} ><a>Login</a></Link>
                </Text>
                
              </Stack>
         
            </Stack>
          </Box>
        
                 
          </Stack>
      </Flex>
       
      )}
    </Formik>
    </>
  )
}