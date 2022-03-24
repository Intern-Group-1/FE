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
import { handleCreateSchedule, handleGetAppointment } from '../services/doctor';






  function ChangeAppointment(props) {
const idAppointment=props.appID
console.log(idAppointment);

    const MyButton = (props) => {
        const handleClick = (e) => {
                  setTime(e.target.innerHTML)                        
        };
        
        return (
            <button style={
                time===props.item? {
                 color:'rgb(0 29 171 / 78%)',
                 fontWeight:'bolder',
                 backgroundColor : '#7fb9e9c7'
             }:{}
            }  onClick={handleClick} 
            className={"btn-time"}
            >
            {props.item}
          </button>
          
        );
      };
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open,setOpen]=useState('');
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const notify = () => toast.success("Make appointment success!");
    const { id } = useParams();
    const [Api, setApi] = useState([]);
    const [doctor_id, setDoctorId] = useState('');
    const today= new Date()
    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
               
                setApi(res.data.data)

            })

    }, []);
    
 async  function handleGetAppointmentbyId(idAppointment){
      const dataa= await handleGetAppointment(idAppointment)
     
      setDoctorId(dataa.data.data.doctor._id)
      
    }


    


    const listTime=['07:00-08:00',
    '08:00-09:00',
    '09:00-10:00',
    '10:00-11:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '17:00-18:00',]
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [branchs, setBranchs] = useState([]);
    const [endDate, setEndDate] = useState(null);
   

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const d = startDate.getDate();
    const m = startDate.getMonth() + 1;


    var dateP = new Date('2022-02-26T03:18:35.000Z')
   
async function createSchedule(startDate,time,doctor_id){
  const da_ta = new FormData();
  da_ta.append("data", '2022-02-26T03:18:35.000Z')
  da_ta.append("time", '14:00-15:00')
  da_ta.append("doctor", '6215e72d2d724ee34bbf183f')
  const schedule = await handleCreateSchedule(da_ta)
  console.log(schedule);
}
    return (
      <>
       <Button  onClick={(e)=>{onOpen(e);handleGetAppointmentbyId(idAppointment)}}>Create Schedule</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={open}
        >
          <ModalOverlay />
          <ModalContent >
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
                             minDate={today}
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
                              {listTime.map((timer, i)=>(
                                <MyButton                                                                                                                   
                                key={i} item={timer}></MyButton>
                            ))}
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
                          
                        </Box>

                    </Box>
                </Box>
            
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>createSchedule(startDate,time,doctor_id)}>Save</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> 
      </>
  
  
    )
  }
  export default ChangeAppointment;