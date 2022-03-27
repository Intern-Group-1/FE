import { Flex, Box, Image, Text,} from '@chakra-ui/react'
import React from 'react'
import '../../style/SliderSpeciality.css'
import { useNavigate } from 'react-router-dom';
function ASpeciality(props) {
  const navigate = useNavigate()
    function getAllSpeciality(name){
      navigate('/Speciality/'+`${props.name}`)
     
    }
  return (

    <Flex w='300px'
      h='250px'
      borderRadius='2xl'
      bgColor='whrite.100'
      border='none'
      className='speciality'
      justifyContent='center'
      >
      <Box  d='flex' flexDirection='column' alignItems='center' >
        <Box 
        as={'a'}
        className='img-speciality'
        w='150px' 
        h='150px'
        alignItems='center'
        d='flex'
        justifyContent='center'
        onClick={()=>getAllSpeciality(props.name)}
        
        >
        <Image  
         src={props.avt} />
        </Box>
        <b className='text-info-speciality' >{props.name}</b>
      </Box>

    </Flex>
  )
}

export default ASpeciality