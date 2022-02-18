import { Flex, Box, Image, Button, Text,} from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import '../style/SliderDoctor.css'
import ApiCaller from '../utils/apiCaller';
function Adoctor(props) {
  const [Api, setApi] = useState([]);

  // useEffect(()=>{
  //     ApiCaller('get-all-doctor', 'GET')
  //   .then ( async res => {
  //     console.log(res);
  //       setApi(res.data.data)
  //   })
  // },[])
 
 const book=() => {
    // const infor = document.getElementById(Api.map(api =>(api.full_name))).textContent;
    // console.log(infor);
  }

  return (

    <Flex w='280px'
      h='360px'
      borderRadius='2xl'
      bgColor='gray.200'
      border='none'
      className='doctor' >
        {/* {Api.map(api => ( */}
      <Box d='flex' flexDirection='column' alignItems='center'  >
        <Image className='img-doctor'  src={props.avt} />
        <Text className='text-info' >{props.full_name}</Text>
        <Text className='text-info'>{props.speciality}</Text>
        <Button  colorScheme='blue'className='btn-book' >Book Now</Button>
      </Box>
        {/* ))} */}

    </Flex>
  )
}

export default Adoctor