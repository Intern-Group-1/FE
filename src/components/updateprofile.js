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
import React, { useState } from 'react';
import avt from '../assets/image/Doctor.jpg'
import '../style/input-file.css'
import "react-widgets/styles.css";
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { handleCreateUser } from '../services/User';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { Signup } from './Signup';
function InitialFocus2() {
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setSex] = useState('')
  const [avt, setAvt] = useState('')

  const navigate = useNavigate()
  const handleFullNameInput = e => {
    setFullname(e.target.value);
  }
  const handleAddressInput = e => {
    setAddress(e.target.value);

  }
  const handlePhoneInput = e => {
    setPhone(e.target.value);

  }
  const handleGenderInput = e => {
    setSex(e.target.value);

  }
  const handleAvtInput = e => {
    setAvt(e.target.files[0]);

  }
  console.log(avt)
  console.log(avt)
  const handleCreate = async () => {

    const account = window.sessionStorage.getItem('user');
    const data = new FormData();
    data.append("full_name", fullname)
    data.append("address", address)
    data.append("phone_number", phone)
    data.append("gender", gender)
    data.append("file", avt)
    data.append("account", account)
    try {

      setOpen(onClose)
      const data1 = await handleCreateUser(data)
      console.log(data1)
      if (data1) {
        console.log('thanh cong');
        sessionStorage.getItem('user');
        toast.success("Successful!");
        navigate('/home')
       const Id_user=localStorage.setItem('Id_user', data1.data.data[0]._id)
       console.log(' Id user là :  ');
       console.log(Id_user);
      }
      
      navigate('/home')
    } catch (error) {
      toast.error("Failed!");
    }
  }
  const byid=()=>{
    console.log('huhu');
  }
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [open, setOpen] = useState('');
  const [on,setOn]=useState('')
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  let genderlist = ['Female', 'Male'];
  function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 0);
}
  return (
    <>    <Signup/>
    <div id="ac-wrapper" style={{
      display:'none'
    }}>
    <div id="popup">
        <center>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={onOpen}
        onClose={open}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your information so we know.</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input ref={initialRef} placeholder='Full name' onChange={handleFullNameInput} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input placeholder='Address' onChange={handleAddressInput} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input placeholder='Phone' onChange={handlePhoneInput} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Combobox
              // data={genderlist}
              // value={gender}
              // onChange={gender => setGender(gender)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Avatar</FormLabel>
              <Input id='file' type={'file'} onChange={handleAvtInput}></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCreate}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
        </center>
    </div>
</div>
    </>


  )
}

export default InitialFocus2;