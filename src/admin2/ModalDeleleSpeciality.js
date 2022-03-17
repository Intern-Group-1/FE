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
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon,EditIcon } from '@chakra-ui/icons'
  import '../style/button.css'
  import { handleDeleteDoctor, handleDeleteSpeciality } from '../services/admin';
  import { useNavigate } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';
  
  
  function DeleteSpeciality(props) {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [open,setOpen]=useState('');
    const [save, setSave] = useState('Delete')
    const id = props.speciality;
    // console.log(id);
  
    const [Api, setApi] = useState([]);
    //console.log(props.doctor);
    useEffect(() => {
      ApiCaller('get-all-speciality', 'GET')
        .then(async res => {
         
          setApi(res.data.data)
        })
    }, [])
    async function  deleteUser(id) {
    
      try {
        console.log('id xóa là');
       console.log(id);
       setSave('Loading...')
       console.log(save);
       setOpen(onOpen)
       const data= await handleDeleteSpeciality(id);
       setOpen(onClose)
       setSave('Delete')
       toast.success("Successful!");
       window.location.reload();
       //navigate('/admin/doctor')
      } catch (error) {
       console.log('that bai');
        console.log(error);
      }
   
   }
  
  
    return (
      <>
        <DeleteIcon  onClick={onOpen} />
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
  
          <ModalContent>
  
            <ModalHeader>Confirm Delete</ModalHeader>
            <ModalCloseButton />
  
            <ModalBody>Do you want to delete {Api.map(u => (
              <>{(u._id == props.speciality) ? <a>{u.name}</a> : <></>}
              </>
  
  
            ))}
              {/* {(u._id==props.user)?<a>{u.full_name}</a>:<></>)} */}
            </ModalBody>          
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event);deleteUser(props.speciality)}}
              >
                {save}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
  
        </Modal>
      </>
    )
  }
  
  export default DeleteSpeciality;