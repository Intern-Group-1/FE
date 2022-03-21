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
  import React, { useState } from 'react';
  import avt from '../assets/image/Doctor.jpg'
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import Combobox from "react-widgets/Combobox";
  import { handleCreateUser, handleGetUserId } from '../services/User';
  import { ToastContainer, toast } from 'react-toastify';
  import Session from 'react-session-api'
  import { useNavigate } from 'react-router-dom'
import { handleCreateBranch } from '../services/admin';
  function AddClinic() {
    const navigate = useNavigate()
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [avt, setAvt] = useState('')
    const [add, setAdd] = useState('Create')
    const handleAddressInput = e => {
      setAddress(e.target.value);
  
    } 
    const handleNameInput = e => {
      setName(e.target.value);
  
    } 
    const handleAvtInput = e => 
    { 
    setAvt(e.target.files[0]);

  }
    <FormControl mt={4}>
    <FormLabel>Address</FormLabel>
    <Input placeholder='Address' onChange={handleAddressInput} />
  </FormControl>
    console.log(Session.get('token'))
  
    const handleCreate = async (req, res) => {
      const da_ta = new FormData();
      da_ta.append("address", address)
      da_ta.append("name", name)
      da_ta.append("file", avt)
      try {
        setAdd('Loading...')
       
        setOpen(onOpen)
        const data = await handleCreateBranch(da_ta)
        setOpen(onClose)
          setAdd('Create')
         console.log(data)
        if (data) {
          toast.success("Successful!");
          navigate('/admin')
        navigate('/admin/clinic')
          
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
        <Button
         className='btn btn-success'
         bg={'#28a745'}
         _hover={'#28a745'}
         onClick={onOpen}
         border={'none'}
          > 
          <AddIcon mr='7px'/> 
           Add  Clinic
        </Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
          onClose={open}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add information clinic</ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody pb={6}>
              
  
              <FormControl mt={4}>
              <FormControl mt={4}>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Name' onChange={handleNameInput} />
              </FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address' onChange={handleAddressInput} />
              </FormControl>
            
              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCreate}>
                {add}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> 
      </>
  
  
    )
  }
  
  export default AddClinic;