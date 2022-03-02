import React,{useState,useEffect} from 'react';
import Session from 'react-session-api'
import ApiCaller from '../utils/apiCaller';
import '../style/input-file.css'
import '../responsive/profile/Profile.css'
import InitialFocus from './Modal'
import AlertsSuccess from './Success'
import Navbar from './Navbar'
import Footer from './Footer'
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
  import avt from '../assets/image/client.png'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { handleCreateUser, handleGetUserId } from '../services/User';

toast.configure()
function ProfileUser() {
    console.log('id là use: ');
   console.log(Session.get('user')); 
    const [Api, setApi] = useState([]);
    const [id,setID]=useState('');
    useEffect(() => {
        ApiCaller('get-all-user', 'GET')
            .then(async res => {
                // console.log(res);
            //   console.log();
                setApi(res.data.data)
                console.log('id là ');
                   console.log(res.data.data);
            })

    }, []);
    const usertest={
        full_name: "Dung",
        address: 'Hue',
        phone_number:'90292',
        
    }
    //Id_user=_id rồi,  map roi thôi

    const byID= async ()=>{
        // localStorage.getItem('token')
        // console.log( localStorage.getItem('token'));
        // const data2= await handleGetUserId()
        // console.log('haha');
        // console.log(data2.data.data);
        // localStorage.setItem('byToken',data2.data.data._id)
       
    }



  return <>
    <Navbar />
    <Flex >
        
       

       
        <Box className='container-profile'  w='90%' h='50%' m='5%' boxShadow='2xl' borderRadius='2xl' d='flex' rounded='md' bg='white' boxShadow='outline'
         d='flex' justifyContent='center'
         alignContent='center'>
        <Box className='user-avt'  w={'22%'}>
            <Image src={avt} w='250' h='250' boxShadow='2xl' m='10' borderRadius='50%' border='1px' borderColor='blue.300'></Image>
            <input  type='file' className='custom-file-input' /> 
        </Box>
       <Box d='flex' justifyContent='center' alignItems='flex-start' w='400' h='360' flexDirection='column' >
        <Box maxH='300' className='box'>
        <Button onClick={byID}>ID</Button>
        {/* {Api.map(user=>{ <> */}
        {   Api.map(u=>(
            <>
            {
            //  console.log(u._id)
            (u._id == Session.get('byToken')
            )
            ? 
            <>
               <Text maxH='100' >
            Full Name
            
            <Input type='text'  
              value={u.full_name} 
            className='text-inf'></Input>
        </Text>
        <Text  maxH='100'>
           Address
            <Input type='text' 
             value={u.address} 
            className='text-inf'></Input>
        </Text>
        <Text maxH='100'>
            Phone
            <Input type='text' 
            value={u.phone_number}
             className='text-inf'></Input>
        </Text>
        <Text>
            Gender
            <Input type='text' 
             value={(u.gender)='true' ?'Male':'Female'} 
            className='text-inf'></Input>
        </Text>
       
            </>:<></>
            // console.log(+u.full_name):console.log('null')}
        
        // console.log(u._id)
            }</>
        ))}
     

        </Box>
      
    <Button 
            className='change-info'
            h={'45px'}
            w={'120px'}
            mt={'10px'}
            ml={'120px'}
            >
                <InitialFocus />
            </Button>
            {/* <Button
            onClick={notify}
            >
                Test
            </Button>
             <ToastContainer /> 
            <Button
            onClick={notify1}
            >
                Test1
            </Button> */}
            <ToastContainer />
        </Box> 
        <Box className='schedule' w={'720px'} h={'410px'}>
           {/* <Text textAlign={'center'} mt={'5px'}  >Schedule</Text>  */}
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Gutman</Text>
                    <Text>Orthopedic</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 25/02  </Text>
                    <Text>Address: Hoang Long, 14 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Kilgore</Text>
                    <Text>General Physician</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 09:00-10:00</Text>
                    <Text>Date: 10/03</Text>
                    <Text>Address: Kim Anh, 23 Tran Phu</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
                    <Text>Dr Thanh</Text>
                    <Text>Cadiologry</Text>
                </Box>
                <Box className='info-schdule'>
                    <Text>Time: 07:00-08:00</Text>
                    <Text>Date: 16/03</Text>
                    <Text>Address: 12 Le Loi</Text>
                </Box>
           </Box>
           <Box className='tag-schedule'>
                <Box className='infodoctor'>
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
        </Box>
        
       
    </Flex>
  <Footer />
  </>
}

export default ProfileUser;