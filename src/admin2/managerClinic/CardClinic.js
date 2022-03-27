import React from 'react'
import { Box, Text, Button, Image,Spinner
  } from '@chakra-ui/react'

import { DeleteIcon} from '@chakra-ui/icons'
import {useEffect,useState} from 'react';
import ApiCaller from '../../utils/apiCaller';
import UpdateBranch from './modalUpdateClinic';
import { handleDeleteBranch } from '../../services/admin';
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';

const Card = () => {
  const navigate = useNavigate()
  const [Api, setApi] = useState([]);
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    ApiCaller('get-all-branch', 'GET')
  .then ( async res => {
      setApi(res.data.data)
      setLoading(true)
  })
},[])

function ModalLoading(){
 
  return<>
 
 <Box  mt='200px' height={'500px'} pl={'500px'}>
             
             <Spinner

           thickness='4px'
           speed='0.65s'
           emptyColor='gray.200'
           color='blue.500'
           size='xl'
         /> <Text  color={'blue.500'}>Loading...</Text>  </Box>
    
   
  </>
}


async function  handelDeleteClinic(id) {
  
  try {
  
   
   const data= await handleDeleteBranch(id);
   
   toast.success("Successful!");
   navigate('/admin')
     navigate('/admin/clinic')
  } catch (error) {
   console.log('that bai');
    console.log(error);
  }

}



return <>

{loading? Api.map(branch=>(
  <Box
  w='300px'
  h={'435px'} 
  mt={'50px'} 
  mb={'30px'}
  ml={'auto'}
  mr={'auto'}
  boxShadow='2xl' 
  border={'1px solid #d7d7d7'}
  fontFamily={'Georgia'}
  bg='White'  
  position={'relative'}
>
  <Image 
  src={branch.image} 
  minW={'298px'}
  borderRadius={'2px 2px 0 0'}
  />
  <Text
  fontSize={'23px'}
  mt={'15px'}
  ml={'10px'}
  >
    {branch.name}
  </Text>
  <Text
  mt={'5px'}
  ml={'10px'}
  >
    {branch.address}
  </Text>
  <Box
  position={'absolute'}
  bottom={'0px'}
  right={'0px'}
  left={'0px'}
  >
    <Button
    bg={'#17a2b8'}
    color={'Black'}
    w={'148px'}
    borderRadius={'none'}
    _hover={{ bg:"#036776", color:"white" }}
    
    > <UpdateBranch branch={branch._id}></UpdateBranch>
     
    </Button>
    
    <Button 
    w={'149px'}
    bg={'#f79081'}
    color={'Black'}
    borderRadius={'none'}
    _hover={{ bg:"#dc3545", color:"white" }}
    onClick={(e)=>handelDeleteClinic(branch._id)}
    > 
      <DeleteIcon/> 
    </Button>
  </Box>
</Box>
)
  
):<ModalLoading/> }
  </>
}

export default Card