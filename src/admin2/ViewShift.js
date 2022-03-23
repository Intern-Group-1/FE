import React,{useState,useEffect} from 'react';
import '../style/input-file.css'
import '../responsive/profile/Profile.css'
import {ViewIcon} from '@chakra-ui/icons'
import { Button as Btn } from 'react-bootstrap-v5'
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
import { handleGetAppointmentbyIDDoctor } from '../services/admin';
import moment from 'moment'
toast.configure()
function ViewShift(props){
  const id=props.doctor
  const { isOpen, onOpen, onClose } = useDisclosure()
   const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
   const [gender, setGender] = useState('')
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
   const [app,setApp]= useState([])
   async function byID(id){
   
     const data1= await handleGetAppointmentbyIDDoctor(id)
    console.log(data1);
     setApp(data1.data.data)
    console.log('hello');
   }
  
    
    const loggedInUser = localStorage.getItem('token')
    
  return <>
  <Btn className='btn btn-warning'  onClick={(e)=>{onOpen(e);byID(id)}}><ViewIcon/></Btn>
    

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
<<<<<<< HEAD
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
=======
           {app.map(bydoctor=>(
             <Box 
             className='tag-schedule'
             style={
              bydoctor.status==0?{ border:'3px #cccc dashed'}
          :bydoctor.status==1?{border:'3px green dashed'}:{border:'3px red dashed'}
      }
             
             >
              
                  <Box className='infodoctor'
                 style={
                  bydoctor.status==0?{ borderRight:'3px #cccc dashed'}
              :bydoctor.status==1?{borderRight:'3px green dashed'}:{borderRight:'3px red dashed'}
          }
                  position={'relative'}
                  >
                      <Text>{bydoctor.user.full_name}</Text>
                      <Text>{bydoctor.user.phone_number}</Text>
                  </Box>
                  <Box className='info-schdule'>
                      <Text>{bydoctor.time}</Text>
                      <Text>{moment(bydoctor.date).format('L')}</Text>
                      <Text>{bydoctor.branch.address}</Text>
                  </Box>
             </Box>
           ))}
           
  
>>>>>>> 00a6ba984849216f24755afcf7bf007c7d5834a8
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