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
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import avt from '../assets/image/Doctor.jpg'
import '../style/input-file.css'
import "react-widgets/styles.css";
import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import '../style/button.css'
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { handleUpdateUser, handleGetUserId } from '../services/User';

import { handleGetUserById } from '../services/admin';
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
  const [Id, setIdUser] = useState('')
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
  const handleGenderInput = e => {
    console.log('gioi tinh e1');
    console.log('sex' + e);
    e == 'Male' ? setGender(true) : setGender(false)
    console.log('gioi tính sex');
    console.log(gender);
    // if(e=='Male')
    //   setGender(true);
    //  else 
    //  setGender(false);

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


  const handleUpdate = async (iduser) => {


    const da_ta = new FormData();

    console.log('sex');
    console.log(gender);

    da_ta.append("full_name", fullname)
    da_ta.append("address", address)
    da_ta.append("phone_number", phone)
    da_ta.append("gender", gender)
    da_ta.append("file", avt)
    console.log(da_ta);
    try {
      setSave('Loading...')
      console.log(save);
      setOpen(onOpen)

      if (da_ta) {
        console.log('id ng dung');
        console.log(iduser);
        const data = await handleUpdateUser(iduser, da_ta)
        console.log('dat alaa');
        console.log(data);
        //await localStorage.setItem('Id_User',data.data.data[0]._id)
        //await setId(localStorage.getItem('Id_User'))
      }
      setOpen(onClose)
      setSave('Save')
      toast.success("Successful!");


    } catch (error) {
      console.log(error)
      toast.error("Failed!");
    }
  }

  return (
    <>
      <EditIcon onClick={onOpen} />
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
            {/* {(u._id==props.user)?<a>{u.full_name}</a>:<></>)} */}

          </ModalBody>
          <Box w='90%' ml='20px'>
            {Api.map(u => (
              <>
                {(u._id == props.user) ?
                  <>
                    <FormControl >
                      <FormLabel>Full name</FormLabel>
                      <Input 
                      //placeholder={u.full_name}
                      defaultValue={u.full_name}
                              
                             //value={u.full_name}
                             onChange={handleFullNameInput}
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Address</FormLabel>
                      <Input defaultValue={u.address} onChange={handleAddressInput} />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Phone</FormLabel>
                      <Input defaultValue={u.phone_number} onChange={handlePhoneInput} />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Gender</FormLabel>
                      {/* <Combobox
                
                data={genderlist}
                defaultValue={u.gender == true ? 'Male': 'Female'}
                onChange={handleGenderInput}
             
              /> */}
                      <Combobox

                        data={genderlist}
                        //defaultValue={u.gender == true ? 'Male' : 'Female'}
                        onChange={genderlist => genderlist == 'Male' ? setGender(true) : setGender(false)}
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Avatar</FormLabel>
                      <Input id='file' type={'file'} onChange={handleAvtInput}></Input>
                    </FormControl>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={(event) => {
                        onOpen(event);
                        handleUpdate(u._id)
                      }}
                      >
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </>
                  :
                  <></>}
              </>
            ))}
          </Box>
        </ModalContent>

      </Modal>
    </>
  )
}

export default UpdateUser;