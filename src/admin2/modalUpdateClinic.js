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
import { Button as Btn } from 'react-bootstrap-v5'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import avt from '../assets/image/Doctor.jpg'
import '../style/input-file.css'
import "react-widgets/styles.css";
import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import '../style/button.css'
import { handleBranchByID, handleDeleteSpeciality, handleDeleteUser, handleGetSpecialityById, handleUpdateBranch, handleUpdateSpeciality } from '../services/admin';
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { ToastContainer, toast } from 'react-toastify';
import { BiTrain } from 'react-icons/bi';

function UpdateBranch(props) {
    const navigate = useNavigate()
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [avt, setAvt] = useState('')
    const [add, setAdd] = useState('Create')
    const id = props.branch;
  
    async function getByID(id) {
    console.log(id);
        const data = await handleBranchByID(id)

        if (data) {
            console.log(data);
            setName(data.data.name)
            setAddress(data.data.address)
            console.log(data.data.image);
            setAvt(data.data.image)
        }

    }
    function handleAddressInput(e)  {
        setAddress(e.target.value);

    }
    function handleNameInput(e) {
        console.log(e.target.value);
        setName(e.target.value);

    }
    const handleAvtInput = e => {
        setAvt(e.target.files[0]);

    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [open, setOpen] = useState('');
    



    const [Api, setApi] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    useEffect(() => {
        ApiCaller('get-all-speciality', 'GET')
            .then(async res => {

                setApi(res.data.data)
            })
    }, [])






    async function editBranch(idspec) {

        setAdd('Loading...')
       
        setOpen(onOpen)
        const da_ta = new FormData();  
        console.log(avt);
        da_ta.append("name", name)
        da_ta.append("address", address)
        da_ta.append("file", avt)
        try {
            console.log('id xóa là');
            console.log(id);

            const data = await handleUpdateBranch(idspec, da_ta);
            console.log('da xoa id');
            console.log(data);
            setOpen(onClose)
            setAdd('Save')
            toast.success("Successful!");
            window.location.reload();
            //navigate('/admin/user')
        } catch (error) {
            toast.error("Failed!");
            console.log(error);
        }

    }


    return (
        <>
            <Button
                bg={'#17a2b8'}
                color={'Black'}
                w={'148px'}
                borderRadius={'none'}
                _hover={{ bg: "#036776", color: "white" }}
                onClick={(e) => { onOpen(e); getByID(id) }}
            >
                <EditIcon />
            </Button>
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
                    <ModalBody pb={6}>
                    <FormControl mt={4}>
              <FormControl mt={4}>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Name' value={name} onChange={handleNameInput} />
              </FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address'  value={address} onChange={handleAddressInput} />
              </FormControl>
            
              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Image w='100px' h='100px' src={avt}/>
                <Input id ='file' type={'file'}  onChange={handleAvtInput}></Input>
              </FormControl>
                    </ModalBody>
              
       
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={(event) => { onOpen(event); editBranch(props.branch); }}
                        >
                            {add}
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )
}

export default UpdateBranch;