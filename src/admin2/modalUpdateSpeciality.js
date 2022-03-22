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
    Image,
    Img
} from '@chakra-ui/react'
import { Button as Btn} from 'react-bootstrap-v5'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import avt from '../assets/image/Doctor.jpg'
import '../style/input-file.css'
import "react-widgets/styles.css";
import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import '../style/button.css'
import { handleDeleteSpeciality, handleDeleteUser, handleGetSpecialityById, handleUpdateSpeciality } from '../services/admin';
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { ToastContainer, toast } from 'react-toastify';
import { BiTrain } from 'react-icons/bi';

function UpdateSpeciality(props) {
    const [fullname, setFullname] = useState('')
    const [avt, setAvt] = useState('')
    const [save, setSave] = useState('Save')
    async function getByID(id){
      
        const data = await handleGetSpecialityById(id)
      
        if(data)
        {
         setFullname(data.data.data.name)
         console.log('anh');
         console.log(data.data.data.images);
         setAvt(data.data.data.images)
        }
     
     }
    function handleFullNameInput(e) {
        console.log(e.target.value);
        setFullname(e.target.value);

    }
    const handleAvtInput = e => {
        setAvt(e.target.files[0]);

    }
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [open, setOpen] = useState('');
    const id = props.speciality;
  
  

    const [Api, setApi] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    useEffect(() => {
        ApiCaller('get-all-speciality', 'GET')
            .then(async res => {

                setApi(res.data.data)
            })
    }, [])






async function editSpeciality(idspec) {
   
        setSave('Loading...')
        console.log(save);
        setOpen(onOpen)
        const da_ta = new FormData();
        console.log(fullname);
        console.log(avt);
        da_ta.append("name", fullname)
        da_ta.append("avatar", avt)    
        try {
            console.log('id xóa là');
            console.log(id);

            const data = await handleUpdateSpeciality(idspec, da_ta);
            console.log('da xoa id');
            console.log(data);
            setOpen(onClose)
            setSave('Save')
            toast.success("Successful!");
            window.location.reload();
            //navigate('/admin/user')
        } catch (error) {
            toast.error("Failed!");
            console.log(error);
        }

    }


    return (
        <>  <Btn onClick={(e)=>{onOpen(e);getByID(id)}} className='btn btn-info'><EditIcon   /> </Btn> 
          
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />

                <ModalContent>

                    <ModalHeader>Edit Speciality</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Edits will be saved when you press Save
                    </ModalBody>
                    <Box w='90%' ml='20px'>
                      
                            <>
                               
                                    <>
                                        <FormControl >
                                            <FormLabel>Name</FormLabel>
                                            <Input value={fullname}
                                                onChange={handleFullNameInput}
                                            />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Image</FormLabel>
                                            <Img src={avt}/>
                                            <Input id='avatar' type={'file'} onChange={handleAvtInput}></Input>
                                        </FormControl>


                                    </>
                                   
                            </>


                       
                    </Box>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={(event) => { onOpen(event); editSpeciality(props.speciality);}}
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

export default UpdateSpeciality;