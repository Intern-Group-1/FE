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
  import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon,EditIcon } from '@chakra-ui/icons'
  import '../style/button.css'
  import { handleDeleteUser } from '../services/admin';
  import { useNavigate } from 'react-router-dom'
  import Combobox from "react-widgets/Combobox";
  
  
  function UpdateUser(props) {
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState(true)
    const [avt, setAvt] = useState('')
    let genderlist = ['Female', 'Male'];
    function handleFullNameInput (e) {
        //console.log(e.target.value);
        // this.setFullname({value: 'event.target.value'});
      setFullname(e.target.value);
      
    }
    function handleAddressInput (e)   {
      setAddress(e.target.value);
  
    }
    const handlePhoneInput = e => {
      setPhone(e.target.value);
  
    }
    const handleGenderInput = e => {
      setGender(e.target.value);
  
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
    const id = props.user;
    // console.log(id);
  
    const [Api, setApi] = useState([]);
  
    useEffect(() => {
      ApiCaller('get-all-user', 'GET')
        .then(async res => {
         
          setApi(res.data.data)
        })
    }, [])
    async function  editUser(id) {
        console.log(id);
        console.log(fullname);
       console.log(address);
       console.log(phone);
       console.log(gender);
    //   try {
    //     console.log('id xóa là');
    //    console.log(id);
   
    //    const data= await handleDeleteUser(id);
    //    console.log('da xoa id');
    //    console.log(data);
    //    console.log('thanh cong');
    //    setOpen(onClose)
    //    navigate('/admin/user')
    //   } catch (error) {
    //    console.log('that bai');
    //     console.log(error);
    //   }
   
   }
  
  
    return (
      <>
        <EditIcon  onClick={onOpen} />
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
              {(u._id == props.user)? 
              <>
              <FormControl >
              <FormLabel>Full name</FormLabel>
              <Input  defaultValue={u.full_name}  
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
              <Combobox
                data={genderlist}
                defaultValue={u.gender == 'true' ? 'Male': 'Female'}
                onChange={gender => setGender(gender)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Avatar</FormLabel>
              <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
            </FormControl>
              </> 
              :
               <></>}
              </>
  
  
            ))}
             </Box>    
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event);editUser(props.user) }}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
  
        </Modal>
      </>
    )
  }
  
  export default UpdateUser;