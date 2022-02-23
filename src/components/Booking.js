import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import ApiCaller from '../utils/apiCaller';

import Navbar from "./Navbar";
import Footer from './Footer'
import '../style/button.css'
import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
  import Doctor from '../assets/image/dtavt.png'
  import DatePicker from "react-datepicker";
  import '../style/Booking.css'
  import '../responsive/Appointment.css'
import { getValue } from '@testing-library/user-event/dist/utils';
export default function Booking(){

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
    console.log(startDate);
    const [branch, setBranch]=useState('');
    const [time, setTime] = useState('');
    
    console.log(startDate.getDate());

    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
      const d =  startDate.getDate();
     const m =  startDate.getMonth() + 1;
     
   
    var dateP = new Date('2022-02-26T03:18:35.000Z')
    const handleChange=(e)=>{
    
        console.log(e.target.value);
        setBranch(e.target.value)
    }
   

    return(
        <>
            <Navbar />
            <Box id='container-booking' pt='40px'>
                <Heading as="h1" className='title-appoitment'>Make an appointment</Heading>
                <Box className='info-personal'>
                    <Box className='info-doctor'>
                    
                    {Api.map(api => (
                <>
                   
                    {(id == api._id) ? (
                        <>
    
                    <Box>

                        <Text
                            as="p"
                            marginTop="5"
                            color={'gray.900'}
                            fontSize="xl"
                            fontWeight={"bold"}
                            >
                            Doctor
                        </Text>
                        <Image
                                className='img-doctor'
                                borderRadius="full"
                                src={api.avatar}
                            />
                    </Box>
                    <Box className='wrapper-info-doctor'>
                        <Text
                            as="p"
                            marginTop="20"
                            color={'gray.900'}
                            fontSize="lg">
                            Name: {<b>{api.full_name}</b>}
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={'gray.900'}
                            fontSize="lg">
                            Age: {<b>{api.age}</b>}
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={ 'gray.900'}
                            fontSize="lg">
                            Speciality:{<b>{api.speciality.name}</b>} 
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={'gray.900'}
                            fontSize="lg">
                            Gender: {(api.gender)='true' ?<b>Male</b>:<b>Female</b>}
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
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="xl"
                            fontWeight={"bold"}
                            >
                            Customer
                        </Text>
                        <Text
                            as="p"
                            marginTop="7"
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
                            Phone:
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Address:
                        </Text>
                    </Box>
                </Box>
                <Box className='picker-comfirm'>
                    <Box className='date'>
                        <Heading as="h3"mt={'10'} mb={'45'}>Chosse date</Heading>
                        <DatePicker

                            selected={startDate}
                            onChange={onChange}
                            // excludeDates={[addDays(new Date(), 2), addDays(dateP, 0)]}
                            selectsRange
                            selectsDisabledDaysInRange
                            inline

                        />

                    </Box>
                    <Box className='time-clinic'>
                        <Heading as="h3"mt={'10'} mb={'45'}>Chosse time and clinic</Heading>
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
                            <select  onChange={handleChange}  name="hue" className='select-clinic'>
                                <option   key="Hue city">Hue city</option>
                                <option key="Hoang Long, 14 Le Loi">Hoang Long, 14 Le Loi</option>
                                <option  key="Ton Duc Thang, 23 Dien Bien Phu">Ton Duc Thang, 23 Dien Bien Phu</option>
                                <option  key="Kim Anh, 23 Tran Phu">Kim Anh, 23 Tran Phu</option>
                            </select>
                            <select  onChange={handleChange} name="danang" className='select-clinic'>
                                <option value="Da Nang city" hidden={'false'}>Da Nang city</option>
                                <option value="Bach Ma, 12 Le Huan">Bach Ma, 12 Le Huan</option>
                                <option value="Mai Anh, 45 Tran Hung Dao">Mai Anh, 45 Tran Hung Dao</option>
                                <option value="Duc Anh, 23 Luong Viet Bang">Duc Anh, 23 Luong Viet Bang</option>
                            </select>
                            <select  onChange={handleChange} name="hcm" className='select-clinic'>
                                <option value="Ho Chi Minh city" selected>Ho Chi Minh city</option>
                                <option value="Bach Lan, 12 Le Dai Hanh, Quan 1 ">Bach Lan, 12 Le Dai Hanh, Quan 1 </option>
                                <option value="An Dinh, 65 Hoang Van Thu, Quan 7">An Dinh, 65 Hoang Van Thu, Quan 7</option>
                            </select>
                        </Box> 
                    </Box>
    <Box className='comfirm-appointment' flex='1' bg='' id='confirm'>
        <Heading as="h1" mt={'10'} mb={'10'}>Confirm appointment</Heading>
        <Text fontSize={'20'} mt={'15'} className='name-customer'>Customer</Text>
        <Box className='wrapper-customer'>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Name:
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Age:
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Address:
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
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
        as="p"
        marginTop="5"
        color={ 'gray.900'}
        fontSize="md">
        Name: {<b>{api.full_name}</b>}
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={'gray.900'}
        fontSize="md">
        Age: {<b>{api.age}</b>}
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={ 'gray.900'}
        fontSize="md">
        Speciality: {<b>{api.speciality.name}</b>}
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={ 'gray.900'}
        fontSize="md">
        Gender: {(api.gender)='true' ?<b>Male</b>:<b>Female</b>}
        </Text>         
        </Box>
        </>)

: <></>}

</>
))}

        <Text fontSize={'20'} mt={'15'} className='name-datetime'>Datetime and clinic</Text>
        <Box className='wrapper-datetime'>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
                                             Date: {<b>{d.toString()}-{m.toString()}</b>}
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
                                       {<Box   > Time:{<b>{time}</b>}</Box>}
        </Text>  
        <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="md">
            Clinic:  {<b>{branch}</b>}
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