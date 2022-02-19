import { Flex, Box, Image, Button, Text,} from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import '../style/SliderDoctor.css'
import ApiCaller from '../utils/apiCaller';
function Adoctor(props) {
  const [Api, setApi] = useState([]);
  const [Id, setId] =useState('');
   useEffect(()=>{
       ApiCaller('get-all-doctor', 'GET')
     .then ( async res => {
     console.log(res);
         setApi(res.data.data)
     })
    
   },[])
   
   const book=(e)=>{
    //const infor = document.getElementById('id').key;
    //const selectedIndex = e.target.options.selectedIndex;
        console.log(e.target.value);
}
  return (
    <>
    
    <Flex 
      w='280px'
      h='360px'
      borderRadius='2xl'
      bgColor='gray.200'
      border='none'
      //  className='doctor' 
      >
      <Box d='flex' flexDirection='column' alignItems='center'  >
        <Image className='img-doctor'  src={props.avt} />
        <Text className='text-info' >{props.full_name}</Text>
        <Text className='text-info'>{props.speciality}</Text>
        {/* <Text className='text-info' id='id' value={props._id}>{props._id}</Text> */}
        <Button   value={props._id} onClick={book}
        // id={Api.map(api=>api._id)}
          colorScheme='blue' className='btn-book' >Book Now</Button>
       
       
      </Box>
    </Flex>
    </>
  )
}

export default Adoctor