import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Image
} from '@chakra-ui/react'
import { Button as Btn } from 'react-bootstrap-v5'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import avt from '../assets/image/Doctor.jpg'
import '../style/input-file.css'
import "react-widgets/styles.css";
import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon,EditIcon } from '@chakra-ui/icons'
import '../style/button.css'
import { handleDeleteUser } from '../services/admin';
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { handleGetDoctorById, handleUpdateDoctor } from '../services/admin';
import { ToastContainer, toast } from 'react-toastify';
function UpdateDoctor(props) {
  const [fullname, setName] = useState('')
  const [speciatily, setSpeciality] = useState('')
  const [age, setAge] = useState()
  const [gender, setGender] = useState(true)
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [avt, setAvt] = useState('')
  const [save, setSave] = useState('Save')
  let genderlist = ['Female', 'Male'];
  function handleFullNameInput (e) {
    setName(e.target.value);
    
  }
  function handleSpecialityInput (e)   {
      setSpeciality(e.target.value);

  }
  const handleAgeInput = e => {
      setAge(e.target.value);

  }
  function handleAddressInput(e) {
    setAddress(e.target.value);
  }
  const handlePhoneInput = e => {
    setPhone(e.target.value);
  }
  const handleAvtInput = e => 
    { 
    setAvt(e.target.files[0]);

  }
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const [open,setOpen]=useState('');
  const id = props.doctor
  console.log('id doctor');
  console.log(id);
  const byID = async ()=>{
    const data= await  handleGetDoctorById(id)
    console.log("Data By Doctor")
    console.log(data)
    if(data)
    {
        setName(data.data.data[0].full_name)
        setAvt(data.data.data[0].avatar)
        setAddress(data.data.data[0].address)
        setPhone(data.data.data[0].phone_number)
        setGender(data.data.data[0].gender)
        setSpeciality(data.data.data[0].speciality._id)
        setAge(data.data.data[0].age)
    }
    return data
}
async function handleUpdate () {
  const da_ta = new FormData();
  da_ta.append("full_name", fullname)
  da_ta.append("speciality", speciatily)
  da_ta.append("phone_number", phone)
  da_ta.append("address", address)
  da_ta.append("gender", gender)
  da_ta.append("file", avt)
  da_ta.append("age", age)
    try {
      setSave('Loading...')
      console.log(save);
      setOpen(onOpen)
     
      if (da_ta) {      
        await handleUpdateDoctor(id,da_ta) 
      
      }
      setOpen(onClose)
      setSave('Save')
      toast.success("Successful!");
      navigate('/admin')
      navigate('/admin/doctor')


    } catch (error) {
      console.log(error)
      toast.error("Failed!");
    }
}
const [Api, setApi] = useState([]);
useEffect(() => {
  ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
          console.log(res);
          setApi(res.data.data)
      })
}, [])
  return (
    <>   <Btn onClick={(event)=>{ onOpen(event);
      byID()}} className='btn btn-info'><EditIcon   /> </Btn> 
      {/* <EditIcon  onClick={(event)=>{ onOpen(event);
            byID()}} /> */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>

          <ModalHeader>Edit Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Edits will be saved when you press Save               
          </ModalBody> 
          <Box w='90%' ml='20px'>   
            <>
            <FormControl >
            <FormLabel>Full name</FormLabel>
            <Input  value={fullname}  
              onChange={handleFullNameInput} 
            />
           </FormControl>

           <FormControl mt={4}>
              <FormLabel>Speciality</FormLabel>
              <select onChange={handleSpecialityInput} >
                              {Api.map(brs => (

                                  <option value={brs._id} selected={speciatily == brs._id ?true: false}> {brs.name} </option>

                              ))}
                          </select>
            </FormControl>

          <FormControl mt={4}>
            <FormLabel>Age</FormLabel>
            <Input value={age} onChange={handleAgeInput} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Address</FormLabel>
            <Input value={address} onChange={handleAddressInput} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Phone</FormLabel>
            <Input value={phone} onChange={handlePhoneInput} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Gender</FormLabel>
            <Combobox
              data={genderlist}
              value={gender == true ? 'Male': 'Female'}
              onChange={gender => gender == 'Male'?setGender(true) : setGender(false)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Avatar</FormLabel>
            <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
          </FormControl>
          
             
            </>


         
           </Box>    
          <ModalFooter  >
            <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event); handleUpdate() }}
            >
              {save}
            </Button>
            <Button   onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  )
}

export default UpdateDoctor;