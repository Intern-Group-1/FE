import React from 'react';
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
  import Datepicker from './Datepicker'
  import '../style/Booking.css'
  import '../responsive/Appointment.css'
export default function Booking(){
    return(
        <>
            <Navbar />
            <Box id='container-booking'>
                <Heading as="h1" className='title-appoitment'>Make an appointment</Heading>
                <Box className='info-personal'>
                    <Box className='info-doctor'>
                    <Box>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="xl"
                            fontWeight={"bold"}
                            >
                            Doctor
                        </Text>
                        <Image
                                className='img-doctor'
                                borderRadius="full"
                                src={Doctor}
                            />
                    </Box>
                    <Box className='wrapper-info-doctor'>
                        <Text
                            as="p"
                            marginTop="20"
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
                            Speciality:
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Gender:
                        </Text>
                    </Box>
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
                        <Datepicker />  
                    </Box>
                    <Box className='time-clinic'>
                        <Heading as="h3"mt={'10'} mb={'45'}>Chosse time and clinic</Heading>
                        <Box className='time'>
                            <Button className='btn-time'>07:00 - 08:00</Button>
                            <Button className='btn-time'>08:00 - 09:00</Button>
                            <Button className='btn-time'>09:00 - 10:00</Button>
                            <Button className='btn-time'>10:00 - 11:00</Button>
                            <Button className='btn-time'>14:00 - 15:00</Button>
                            <Button className='btn-time'>15:00 - 16:00</Button>
                            <Button className='btn-time'>16:00 - 17:00</Button>
                            <Button className='btn-time'>17:00 - 18:00</Button>
                        </Box>
                        <Box className='clinic'>
                        {/* <select name="hue" className='select-clinic'>
                                <option value="">Hue city</option>
                                <option value="">ĐN</option>
                                <option value="">HCM</option>
                            </select> */}


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
    <Box className='comfirm-appointment' flex='1' bg='' id='confirm'>
        <Heading as="h1" mt={'10'} mb={'10'}>Confirm appointment</Heading>
        <Text fontSize={'20'} fontWeight={'bold'} mt={'15'} className='name-customer'>Customer</Text>
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
        <Text fontSize={'20'} fontWeight={'bold'} mt={'15'} className='name-doctor'>Doctor</Text>
        <Box className='wrapper-doctor'>
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
        Speciality:
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Gender:
        </Text>         
        </Box>
        <Text fontSize={'20'} fontWeight={'bold'} mt={'15'} className='name-datetime'>Datetime and clinic</Text>
        <Box className='wrapper-datetime'>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Date:
        </Text>
        <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Time:
        </Text>  
        <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="md">
            Clinic:
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