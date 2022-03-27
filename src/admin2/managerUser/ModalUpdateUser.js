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
import { Button as Btn} from 'react-bootstrap-v5'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../../utils/apiCaller';
import '../../style/input-file.css'
import "react-widgets/styles.css";
import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import '../../style/button.css'
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { handleUpdateUser, handleGetUserId } from '../../services/User';

import { handleGetUserById } from '../../services/admin';
import { ToastContainer, toast } from 'react-toastify';

function UpdateUser(props) {
  // console.log('ididiidid');
  //   console.log(props.user);
  const [fullname, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState(true)
  const [avt, setAvt] = useState('')
  const [save, setSave] = useState('Save')
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const [open, setOpen] = useState('');
  const id = props.user;
  // console.log('iaia');
  // console.log(id);
  const [Api, setApi] = useState([]);
  //const account= localStorage.getItem('user')
  let genderlist = ['Female', 'Male'];




  function handleFullNameInput(e) {
    setName(e.target.value);
  }
  function handleAddressInput(e) {
    setAddress(e.target.value);
    console.log('dc');
    console.log(address);

  }
  const handlePhoneInput = e => {
    setPhone(e.target.value);
    console.log('phone');
    console.log(phone);


  }
  const handleAvtInput = e => {
    setAvt(e.target.files[0]);
    console.log('avt');
    console.log(avt);

  }

  useEffect(() => {
    ApiCaller('get-all-user', 'GET')
      .then(async res => {
        setApi(res.data.data)
      })
  }, [])

const byID = async ()=>{
    const data= await  handleGetUserById(id)
    if(data)
    {
        setName(data.data.data[0].full_name)
        setAvt(data.data.data[0].avatar)
        setAddress(data.data.data[0].address)
        setPhone(data.data.data[0].phone_number)
        setGender(data.data.data[0].gender)
    }
    return data
}
useEffect(() => {
    byID() 
}, [id])

async function handleUpdate () {
 
  const da_ta = new FormData();
  console.log(fullname);
    da_ta.append("full_name", fullname)
    da_ta.append("address", address)
    da_ta.append("phone_number", phone)
    da_ta.append("gender", gender)
    da_ta.append("file", avt)
    try {
      setSave('Loading...')
      console.log(save);
      setOpen(onOpen)
     
      if (da_ta) {      
        await handleUpdateUser(id,da_ta) 
      
      }
      setOpen(onClose)
      setSave('Save')
      toast.success("Successful!");
      navigate('/admin')
      navigate('/admin/user')


    } catch (error) {
      console.log(error)
      toast.error("Failed!");
    }
}

  return (
    <>
        <Btn onClick={onOpen} className='btn btn-info'><EditIcon   /> </Btn> 
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Edits will be saved when you press Save 

              
            </ModalBody> 
            <Box w='90%' ml='20px'>   
                         
              
             
              <>
              <FormControl >
              <FormLabel>Full name</FormLabel>
              <Input value={fullname} 
                onChange={handleFullNameInput} 
              />
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
                defaultValue={gender == true ? 'Male': 'Female'}
                onChange={gender => gender == 'Male'?setGender(true) : setGender(false)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Avatar</FormLabel>
              <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
            </FormControl>            
            <ModalFooter  >
              <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event);
              handleUpdate()}}
              >
                {save}
              </Button>
              <Button    onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </> 
             </Box>
          </ModalContent>
  
        </Modal>
      </>
  )
}

export default UpdateUser;