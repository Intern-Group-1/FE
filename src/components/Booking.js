import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import ApiCaller from '../utils/apiCaller';
import Adoctor from './Adoctor';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import Navbar from "./Navbar";
import Footer from './Footer'
import '../style/button.css'
// import InitialFocus from './Modal'
import ConfirmBooking from './ModalBooking'
import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Button,
    Center,
    background,
} from '@chakra-ui/react';
import Doctor from '../assets/image/dtavt.png'
//   import {Datepicker} from './Datepicker'
//   import '../responsive/Appointment.css'
import '../style/Booking.css'
import styled from '@emotion/styled';


function Booking() {
    const { id } = useParams();
    const [Api, setApi] = useState([]);
    const [Id, setId] = useState('');
    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)
            })

    }, []);
    const [startDate, setStartDate] = useState(new Date());
  
   
    const [time, setTime] = useState('');
    
    console.log(startDate);

    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
      const d =  startDate.getDay();
     const m =  startDate.getMonth() + 1;
   
    var dateP = new Date('2022-02-26T03:18:35.000Z')
    return (
        <>


            <Navbar />
                

            <Box id='container-booking'>
                <Heading as="h1">Make an appointment</Heading>
                <Box className='info-personal'>
                    <Box className='info-doctor'>
                    {Api.map(api => (
                <>
                   
                    {(id == api._id) ? (
                        <>
                             <Text
                            as="p"
                            marginTop="5"
                            color={'gray.900'}
                            fontSize="lg">
                            Doctor
                        </Text>
                        <Image
                            className='img-doctor'
                            borderRadius="full"
                            src={api.avatar}
                        />
                        <Box className='wrapper-info-doctor'>
                            <Text
                                as="p"
                                marginTop="20"
                                color={ 'gray.900'}
                                fontSize="lg">
                                Name: {api.full_name}
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={ 'gray.900'}
                                fontSize="lg">
                                Age: {api.age}
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={'gray.900'}
                                fontSize="lg">
                                Speciality: {api.speciality.name}
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={ 'gray.900'}
                                fontSize="lg">
                                Gender: {(api.gender)='true' ?<a>Nữ</a>:<a>Nam</a>}
                            </Text>
                        </Box>
                            </>)

                        : <></>}

                </>
            ))}
           
                       
                    </Box>
                    <Box className='info-customer'>
                        <Text
                            as="p"
                            marginTop="50"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Your Name: 
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Your Age:
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Your Phone number:
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Your Address:
                        </Text>
                    </Box>
                </Box>
                <Box className='picker-comfirm'>
                    <Box className='date'>
                        <Heading as="h3" mt={'10'} mb={'45'}>Chosse date</Heading>
                        <DatePicker

                            selected={startDate}
                            onChange={onChange}
                            excludeDates={[addDays(new Date(), 2), addDays(dateP, 0)]}
                            selectsRange
                            selectsDisabledDaysInRange
                            inline

                        />
                    </Box>
                    <Box className='time-clinic'>
                        <Heading as="h3" mt={'10'} mb={'45'}>Chosse time and clinic</Heading>
                        <Box className='time'   >
                            <Button onClick={()=>{
                                setTime('07:00 - 08:00')
                              
                                
                            }} className='btn-time' >07:00 - 08:00</Button>
                            <Button onClick={()=>{
                                setTime('08:00 - 09:00')
                            }}  className='btn-time'>08:00 - 09:00</Button>
                            <Button onClick={()=>{
                                setTime('09:00 - 10:00')
                            }} className='btn-time'>09:00 - 10:00</Button>
                            <Button onClick={()=>{
                                setTime('10:00 - 11:00')
                            }} className='btn-time'>10:00 - 11:00</Button>
                            <Button  onClick={()=>{
                                setTime('14:00 - 15:00')
                            }} className='btn-time'>14:00 - 15:00</Button>
                            <Button onClick={()=>{
                                setTime('15:00 - 16:00')
                            }} className='btn-time'>15:00 - 16:00</Button>
                            <Button onClick={()=>{
                                setTime('16:00 - 17:00')
                            }} className='btn-time'>16:00 - 17:00</Button>
                            <Button onClick={()=>{
                                setTime('17:00 - 18:00')
                            }} className='btn-time'>17:00 - 18:00</Button>
                        </Box>
                        <Box className='clinic'>
                            <select name="hue" className='select-clinic'>
                                <option value="">Hue city</option>
                                <option value="">Hoang Long, 14 Le Loi</option>
                                <option value="">Ton Duc Thang, 23 Dien Bien Phu</option>
                                <option value="">Kim Anh, 23 Tran Phu</option>
                            </select>
                            <select name="danang" className='select-clinic'>
                                <option value="" hidden={'false'}>Da Nang city</option>
                                <option value="">Bach Ma, 12 Le Huan</option>
                                <option value="">Mai Anh, 45 Tran Hung Dao</option>
                                <option value="">Duc Anh, 23 Luong Viet Bang</option>
                            </select>
                            <select name="hcm" className='select-clinic'>
                                <option value="" hidden={'false'}>Ho Chi Minh city</option>
                                <option value="">Bach Lan, 12 Le Dai Hanh, Quan 1 </option>
                                <option value="">An Dinh, 65 Hoang Van Thu, Quan 7</option>
                            </select>
                        </Box>
                    </Box>
                    {/* <Box className='confirm'>
                        <Heading as="h3"mt={'10'} mb={'45'}>Confirm appointment</Heading>
                        <Button> 
                            <ConfirmBooking />
                        </Button>
                    </Box> */}
                    <Box className='comfirm-appointment' flex='1' bg='' id='confirm'>
                        <Heading as="h1" mt={'5'} mb={'0'}>Confirm appointment</Heading>
                        <Text fontSize={'20'} mt={'15'} className='name-customer'>Customer</Text>
                        <Box className='wrapper-customer'>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                Name:
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                Age:
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                Address:
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                Phone:
                            </Text>
                        </Box>
                        <Text fontSize={'20'} mt={'15'} className='name-doctor'>Doctor</Text>
                        {Api.map(api => (
                <>
                   
                    {(id == api._id) ? (
                        <>
                        <Box className='wrapper-doctor'>
                        
                            <Text  
                                
                                marginTop="5"
                                color={ 'gray.900'}
                                fontSize="lg"
                                >
                                Name: {<b>{api.full_name}</b>}
                            </Text>
                            <Text
                                
                                marginTop="5"
                                color={'gray.900'}
                                fontSize="lg">
                                Speciality:  {<b>{api.speciality.name}</b>} 
                            </Text>
                            <Text  
                              
                                marginTop="5"
                                color={ 'gray.900'}
                                fontSize="lg">
                                Age:  {<b>{api.age}</b>}
                            </Text>
                            
                            <Text   
                                marginTop="5"
                                color={'gray.900'}
                                fontSize="lg">
                                 Gender: {(api.gender)='true' ?<b>Nữ</b>:<b>Nam</b>}
                            </Text>
                         
                        </Box>
                           </>)

                           : <></>}
   
                   </>
               ))}
                        <Text fontSize={'20'} mt='10'  className='name-datetime'>Date and time</Text>
                        <Box className='wrapper-datetime'>
                            <Text
                                maxW={'fit-content'}
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                    {<Box bgColor={'blue.100'}>  Date: {d.toString()}-{m.toString()}</Box>}
                               
                            </Text>
                            <Text
                             maxW={'fit-content'}
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg"
                               >
                                {<Box bgColor={'blue.100'}   > Time:{time}</Box>}
                            </Text>
                        </Box>
                        <Button className='btn-confirm'>Confirm appointment</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
export default Booking;