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
    Button
  } from '@chakra-ui/react'
  import {AddIcon} from '@chakra-ui/icons'
  import React, { useState,useEffect } from 'react';
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import Combobox from "react-widgets/Combobox";
  import { handleCreateUser, handleGetUserId } from '../services/User';
  import { ToastContainer, toast } from 'react-toastify';
  import Session from 'react-session-api'
  import ApiCaller from '../utils/apiCaller';
import { handleCreateDoctor, handleCreateSpeciality } from '../services/admin';
import Admin from './admin';
import Right from './RightTest';
import { Account } from './Account';
import { useNavigate } from 'react-router-dom'
  function AddSpeciality() {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState('')  
    const [avt, setAvt] = useState('')
    const [Api, setApi] = useState([]);
    const [add, setAdd] = useState('Add')

    const handleFullNameInput = e => {
      setFullname(e.target.value);
    }
   
   
    const handleAvtInput = e => 
      { 
      setAvt(e.target.files[0]);
  
    }
    
    const account= localStorage.getItem('iddoctor')
    console.log('accccc');
    console.log(account);
    const handleCreate = async () => {
      const da_ta = new FormData();
      da_ta.append("name", fullname)
    
      da_ta.append("avatar", avt)
     
     
       try {
        setAdd('Loading...')
       
        setOpen(onOpen)
         const data = await handleCreateSpeciality(da_ta)
          console.log('haha data');
          console.log(data)
          setOpen(onClose)
          setAdd('Add')
          //toast.success("Successful!");
          navigate('/admin/doctor')
          if (data) {
        toast.success("Successful!");
        navigate('/admin')
        navigate('/admin/speciality')
        //    console.log(data.data.data[0]._id)
        //    Session.set('id_user',data.data.data[0]._id)
          }  
       
       } catch (error) {
       console.log(error)
         toast.error("Failed!");
       }
    }
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open,setOpen]=useState('');
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    let genderlist = ['Female', 'Male'];
  return (
      <>
        <a 
      onClick={onOpen}
      w={'100px'}
      ><AddIcon mr='12px'/>Add Speciality</a>
        {/* <Button
         className='btn btn-success'
         bg={'#28a745'}
         _hover={'#28a745'}
         onClick={(event)=>{ onOpen(event); byid() }}
         border={'none'}
          > 
          <AddIcon mr='7px'/> 
          Add Doctor
        </Button> */}
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add information speciality</ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='Name Speciality' onChange={handleFullNameInput} />
              </FormControl>
             
              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input id ='avatar' type={'file'} onChange={handleAvtInput}></Input>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCreate}>
                {add}
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal> 
      </>
  
  
    )
  }
  
  export default AddSpeciality;