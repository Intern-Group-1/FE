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






  function ChangeAppointment() {



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
    const [Id, setId] = useState('');
    const [user, setUser] = useState([]);
    const [branch_id, setBranchId] = useState('');
    const today= new Date()
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
            ApiCaller('get-all-branch', 'GET')
            .then(async res => {
                console.log('data branch:')
                console.log(res);
                setBranchs(res.data.data)
            })
    }, []);


    const listTime=['07:00-08:00',
    '08:00-09:00',
    '09:00-10:00',
    '10:00-11:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '17:00-18:00',]
    const [startDate, setStartDate] = useState(new Date());
    const [branch, setBranch] = useState(''); 
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
    const handleChange = (e) => {
      const select = e.target;
      const value = select.value;
      const desc = select.selectedOptions[0].text;
      setBranchId(value);
      setBranch(desc)
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
<Box className='clinic'>
                            <select onChange={handleChange} name="hue" className='select-clinic2' >
                                <option selected >Select Clinic</option>
                                {branchs.map(brs => (

                                    <option value={brs._id} > {brs.name}, {brs.address} </option>

                                ))}
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
  export default ChangeAppointment;