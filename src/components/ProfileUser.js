import React from 'react';
import '../style/input-file.css'
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
    
  } from '@chakra-ui/react';
  import avt from '../assets/image/Doctor.jpg'
function ProfileUser() {
    const user={       
        name:'dung',
        address :' hue',
        phone :'035555',
        gender :'Male'
    }
  return <div>

    <Flex >
        <Box  w='80%' h='50%' m='10%' boxShadow='2xl' borderRadius='2xl' d='flex' rounded='md' bg='white' boxShadow='outline'
         d='flex' justifyContent='center'
         alignContent='center' >
        <Box  >
            <Image src={avt} w='250' h='250' boxShadow='2xl' m='10' borderRadius='50%' border='1px' borderColor='blue.300'></Image>
            <input  type='file'  className='custom-file-input' /> 
        </Box>
       <Box d='flex' justifyContent='center' alignItems='flex-start' w='50%' h='400' flexDirection='column'  flexGrow='2'>
        {/* <Box  > 
            <Text id ='name'>Name:  {user.name}
            </Text> 
        </Box> */}
        <Box maxH='300' className='box'>
        <Text maxH='100' >
            Full Name
            <Input type='text'  value={user.name} className='text-inf'></Input>
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
        <Button ml='300px'>Done</Button>
        </Box>
       
        </Box>
        
    </Flex>


  </div>;
}

export default ProfileUser;
