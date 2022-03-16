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
import { handleCreateDoctor } from '../services/admin';
import Admin from './admin';
import Right from './RightTest';
import { Account } from './Account';
import { useNavigate } from 'react-router-dom'
  function CreateDoctor() {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState()
    const [avt, setAvt] = useState('')
    const [Api, setApi] = useState([]);
    const [speciality_id, setSpecialityId] = useState('');
    useEffect(() => {
        ApiCaller('get-all-speciality', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)
            })
    }, [])
    const handleFullNameInput = e => {
      setFullname(e.target.value);
    }
   
    const handleSpecialityInput = e => {
      //console.log(e);
      //setSpeciality(e);
      const select = e.target;
      const value = select.value;     
      const desc = select.selectedOptions[0].text;
      setSpecialityId(value);
      setSpeciality(desc)
      console.log('nameid');
      console.log(speciality_id);
  
    }
    const handleAddressInput = e => {
      console.log(e.target.value);
      setAddress(e.target.value);
  
    }
    const handlePhoneInput = e => {
      //console.log(e.target.value);
      setPhone(e.target.value);
  
    }
    const handleAgeInput = e => {
      console.log(e.target.value);
      setAge(e.target.value);
    }
    const handleGenderInput = e => {
      console.log(e);
      if(e=='Male')
      setGender(true);
      if(e=='Male') setGender(false)
      console.log(gender);
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
      da_ta.append("full_name", fullname)
      da_ta.append("speciality", speciality_id)
      da_ta.append("phone_number", phone)
      da_ta.append("address", address)
      da_ta.append("gender", gender)
      da_ta.append("avatar", avt)
      da_ta.append("age", 22)
      da_ta.append("account", account)
      console.log(speciality);
      console.log(fullname);
      console.log(gender);
      console.log(phone);
      console.log(address);
      console.log(age);
      console.log(avt);
       try {
         setOpen(onClose)
         console.log('chua chạy');
         const data = await handleCreateDoctor(da_ta)
          console.log('haha data');
          console.log(data)

          toast.success("Successful!");
          navigate('/admin/doctor')
        //  if (data) {
        //    toast.success("Successful!");
        //    console.log(data.data.data[0]._id)
        //    Session.set('id_user',data.data.data[0]._id)
        //  }  
       
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
        <Right/>
        <Account/>
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
            isOpen={onOpen}
          onClose={open}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add information doctor</ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input ref={initialRef} placeholder='Full name' onChange={handleFullNameInput} />
              </FormControl>
             
              <FormControl mt={4}>
                <FormLabel>Speciality</FormLabel>
                {/* <Combobox
                data={Api.map(sp=>sp._id)}
                key={Api.map(sp=>sp._id)}
                onChange={handleSpecialityInput}
                />
                <Input placeholder='speciality' onChange={handleAddressInput} /> */}
                <select onChange={handleSpecialityInput} >
                                <option selected >Select speciality</option>
                                {Api.map(brs => (

                                    <option value={brs._id} > {brs.name} </option>

                                ))}
                            </select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Phone</FormLabel>
                <Input ref={initialRef} placeholder='Phone Number' onChange={handlePhoneInput} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input ref={initialRef} placeholder='Address' onChange={handleAddressInput} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Age</FormLabel>
                <Input placeholder='Age' onChange={handleAgeInput} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Combobox
                  data={['Male','Female']}
                  //onChange={handleGenderInput}
                  onChange={gender => gender == 'Male'?setGender(true) : setGender(false)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Avatar</FormLabel>
                <Input id ='avatar' type={'file'} onChange={handleAvtInput}></Input>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCreate}>
                Save
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal> 
      </>
  
  
    )
  }
  
  export default CreateDoctor;