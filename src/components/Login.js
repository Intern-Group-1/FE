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
  Link
  
} from '@chakra-ui/react';
import {} from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Signup from './Signup';






function btnlogin() {
    const id = document.getElementById('email').value;
    const pw=document.getElementById('password').value;
    console.log(id);
    var js= {
      iduser: {id},
      pwuser:{pw}
    }
    var text = JSON.stringify(js);
    console.log(text);


  
}
export default function SimpleCard() {
  return (<div >
    <div />
    <Flex

      minH={'120vh'}
      align={'center'}
      justify={'center'}
      // backgroundImage={bglg} 
      backgroundRepeat='no-repeat' backgroundSize='cover'>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} ml='200' mb='20'>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color='blue.400'>Welcome to Doctor Care</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
           
            to enjoy all of our cool 
             <Link  href='/signup' color={'blue.400'}>Sign Up</Link>
             
              ✌️
         
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          // bg={bglg}
          boxShadow={'lg'}
          
          p={8}>
          <Stack spacing={4}>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              href={'/signin'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={btnlogin}

              >
                Sign in
              </Button>
              <Text color='blue.400'

                _hover={{
                  color: 'black'
                }}
              >

              </Text>
            </Stack>
          </Stack>

        </Box>

      </Stack>

    </Flex>

  </div>
  );
}