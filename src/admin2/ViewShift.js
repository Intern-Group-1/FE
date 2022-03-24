import React,{useState,useEffect} from 'react';
import '../style/input-file.css'
import '../responsive/profile/Profile.css'
import {ViewIcon} from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { handleCreateUser, handleGetUserId } from '../services/User';
  import { useDisclosure } from '@chakra-ui/react'
toast.configure()
function ViewShift(){
  const { isOpen, onOpen, onClose } = useDisclosure()
   const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
   const [gender, setGender] = useState('')
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
    const byID = async ()=>{ 
        const data= await handleGetUserId()
        console.log(data)
        if(data)
        {
            setName(data.data.data[0].full_name)
            setAvt(data.data.data[0].avatar)
            setAddress(data.data.data[0].address)
            setPhone(data.data.data[0].phone_number)
            setGender(data.data.data[0].gender)
        }
    }
    const loggedInUser = localStorage.getItem('token')
    useEffect(() => {
        if(loggedInUser){
            byID()
        }
      }, [ byID()])
  return <>
    <ViewIcon onClick={onOpen}/>

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}

>
  <ModalOverlay />
  <ModalContent
  minW={'1000px'}
  >
    <ModalHeader>Doctor's shift</ModalHeader>
    <ModalCloseButton />
    <ModalBody w={'1000px'} pb={6}>
    <Flex 
    flexDirection={'column'}
    alignItems={'center'}
    >
        <Box className='schedule' 
        w={'95%'} 
        h={'fit-content'} 
        bg='white'  
        boxShadow='2xl' 
        rounded='md' 
        marginBottom={'30px'}
        pb={'50px'}
        >
           <Box 
           className='tag-schedule'
           border={'2px #8ec2ed dashed'}
           boxShadow={'2px 2px #b4d5f0'}
           >

                <Box className='infodoctor'
                borderRight={'#b4d5f0 dashed'}
                position={'relative'}
                >
                    <Text>Dr Gutman</Text>
                    <Text>Orthopedic</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 25/02  </Text>
                    <Text>Address: Hoang Long, 14 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'
           border={'2px #8ec2ed dashed'}
           boxShadow={'2px 2px #b4d5f0'}
           >
                <Box className='infodoctor'
                borderRight={'#b4d5f0 dashed'}
                position={'relative'}
                >
                    <Text>Dr Kilgore</Text>
                    <Text>General Physician</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 09:00-10:00</Text>
                    <Text>Date: 10/03</Text>
                    <Text>Address: Kim Anh, 23 Tran Phu</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'
           border={'2px #8ec2ed dashed'}
           boxShadow={'2px 2px #b4d5f0'}
           >
                <Box className='infodoctor'
                borderRight={'#b4d5f0 dashed'}
                position={'relative'}
                >
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>

                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 16/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'
           border={'2px #8ec2ed dashed'}
           boxShadow={'2px 2px #b4d5f0'}
           >
                <Box className='infodoctor'
                borderRight={'#b4d5f0 dashed'}
                position={'relative'}
                >
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>

                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 16/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'
           border={'2px #8ec2ed dashed'}
           boxShadow={'2px 2px #b4d5f0'}
           >
                <Box className='infodoctor'
                borderRight={'#b4d5f0 dashed'}
                position={'relative'}
                >
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>

                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 16/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'
           border={'2px #8ec2ed dashed'}
           boxShadow={'2px 2px #b4d5f0'}
           >
                <Box className='infodoctor'
                borderRight={'#b4d5f0 dashed'}
                position={'relative'}
                >
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 10:00</Text>
                    <Text>Date: 12/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box> 
        </Box>
       
    </Flex>
    </ModalBody>

    <ModalFooter>
      {/* <Button colorScheme='blue' mr={3}>
        Save
      </Button>
      <Button onClick={onClose}>Cancel</Button> */}
    </ModalFooter>
  </ModalContent>
</Modal>

    
  </>
}

export default ViewShift;