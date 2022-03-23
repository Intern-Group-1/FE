import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Button,
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import 'react-datepicker/dist/react-datepicker.css'
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import {EditIcon} from '@chakra-ui/icons'
  import React, { useEffect, useState } from 'react'
  import { useParams } from "react-router-dom";
   import ApiCaller from '../utils/apiCaller';
import '../style/button.css'
import DatePicker from "react-datepicker";
import '../style/Booking.css'
import '../responsive/Appointment.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  function MakeSchedule() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open,setOpen]=useState('');
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const notify = () => toast.success("Make appointment success!");
    const { id } = useParams();
    const [Api, setApi] = useState([]);
    const [Id, setId] = useState('');
    const [user, setUser] = useState([]);

    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
                console.log('res là ');
                console.log(res);
                setApi(res.data.data)

            })

    }, []);
    



    useEffect(() => {
        ApiCaller('get-all-user', 'GET')
            .then(async res => {
                console.log(res);
                setUser(res.data.data)
                console.log('id là ');
                console.log(res.data.data);
            })

    }, []);



    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    const [branch, setBranch] = useState('');
    const [time, setTime] = useState('');
    console.log(time);

    console.log(startDate.getDate());

    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const d = startDate.getDate();
    const m = startDate.getMonth() + 1;


    var dateP = new Date('2022-02-26T03:18:35.000Z')
    const handleChange = (e) => {

        console.log(e.target.value);
        setBranch(e.target.value)
    }
    return (
      <>
        <Button 
        onClick={onOpen}
        bg={'#ffff'}
        border={'1px #d9d9d9 solid'}
        color={'Black'}
        _hover={{ bg:"#17a2b8", color:"white" }}
        w={'78px'}
        h={'26'}
        ><EditIcon/></Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={open}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change your appointment</ModalHeader>
            <ModalCloseButton onClick={onClose} />
            
            <Box className='picker-comfirm'
            d={'flex'}
            flexDirection={'column'}
            w={'440px'}
            >
                    <Box className='date'
                    mt={'30px'}
                    ml={'30px'}
                    >
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            selectsRange
                            selectsDisabledDaysInRange
                            inline
                        />
                    </Box>
                    <Box className='time-clinic'>
                        <Box className='time'
                        d={'flex'}
                        flexWrap={'wrap'}
                        w={'448px'}
                        ml={'30px'}
                        >
                            <Button 
                            style={ time==='07:00 - 08:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('07:00 - 08:00')
                            }} className='btn-time' >07:00 - 08:00</Button>
                            <Button 
                            style={ time==='08:00 - 09:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold',
                                backgroundColor : '#ce1414 !important'
                            }:{} }
                            onClick={() => {
                                setTime('08:00 - 09:00')
                            }} className='btn-time'>08:00 - 09:00</Button>
                            <Button 
                            style={ time==='09:00 - 10:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('09:00 - 10:00')
                            }} className='btn-time'>09:00 - 10:00</Button>
                            <Button 
                            style={ time==='10:00 - 11:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('10:00 - 11:00')
                            }} className='btn-time'>10:00 - 11:00</Button>
                            <Button
                            style={ time==='14:00 - 15:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('14:00 - 15:00')
                            }} className='btn-time'>14:00 - 15:00</Button>
                            <Button 
                            style={ time==='15:00 - 16:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('15:00 - 16:00')
                            }} className='btn-time'>15:00 - 16:00</Button>
                            <Button 
                            style={ time==='16:00 - 17:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('16:00 - 17:00')
                            }} className='btn-time'>16:00 - 17:00</Button>
                            <Button 
                            style={ time==='17:00 - 18:00' ? {
                                color:'#3182ce',
                                fontWeight:'bold'
                            }:{} }
                            onClick={() => {
                                setTime('17:00 - 18:00')
                            }} className='btn-time'>17:00 - 18:00</Button>
                        </Box>

                        <Box className='clinic'
                        mb={'-15px'}
                        ml={'30px'}
                        >

                            <select
                            width={'352px'}
                            style={{
                                width:'352px'
                            }}
                            onChange={handleChange} name="hue" className='select-clinic'>
                                <option key="Hue city">Hue city</option>
                                <option key="Hoang Long, 14 Le Loi">Hoang Long, 14 Le Loi</option>
                                <option key="Ton Duc Thang, 23 Dien Bien Phu">Ton Duc Thang, 23 Dien Bien Phu</option>
                                <option key="Kim Anh, 23 Tran Phu">Kim Anh, 23 Tran Phu</option>
                            </select>
                        </Box>
                    </Box>
                    <Box className='comfirm-appointment' flex='1' bg='' id='confirm'>
                        <Box className='wrapper-datetime'
                        w={'420px'}
                        mb={'50px'}
                        ml={'10px'}
                        >
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                    {<Box  maxW={'fit-content'} bgColor={'blue.100'}>  Date: {<b>{d.toString()}-{m.toString()}</b>}</Box>}
                              
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md"
                                ml={'-15px'}
                                >
                                {<Box maxW={'fit-content'} bgColor={'blue.100'}  > Time:{<b>{time}</b>}</Box>}
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                    {<Box > Clinic:  {<b>{branch}</b>}</Box>}
                               
                            </Text>
                        </Box>

                    </Box>
                </Box>
            
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} >Save</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> 
      </>
  
  
    )
  }
  export default MakeSchedule;