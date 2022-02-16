import { Flex, Box, Image, Button, Text,} from '@chakra-ui/react'
import React from 'react'
import '../style/SliderDoctor.css'
function Adoctor(props) {
  return (

    <Flex w='280px'
      h='340px'
      borderRadius='2xl'
      bgColor='gray.200'
      border='none'
      className='doctor' >
      <Box d='flex' flexDirection='column' alignItems='center'>
        <Image className='img-doctor' src={props.avt} />
        <Text className='text-info'>{props.full_name}</Text>
        {/* <Text className='text-info'>{props.age}</Text> */}
        <Text className='text-info'>{props.speciality}</Text>
        <Button colorScheme='blue'className='btn-book' >Book now</Button>
      </Box>

    </Flex>
  )
}

export default Adoctor