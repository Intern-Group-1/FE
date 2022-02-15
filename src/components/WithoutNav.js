import { Flex, Box, Image, Button, Text, Input, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import '../style/SliderDoctor.css'
import bg from '../assets/image/background.jpg'
function Adoctor(props) {


  return (

    <Flex w='300px'
      h='300px'
      borderRadius='2xl'
      bgColor='blue.200'
      border='none'
      className='doctor' >
      <Box d='flex' flexDirection='column' alignItems='center'>
        <Image className='img-doctor' src={props.avt} />
        <Text>{props.full_name}</Text>
        <Text>{props.age}</Text>
        <Button className='btn-book'>BOOK NOW</Button>
      </Box>

    </Flex>
  )
}

export default Adoctor