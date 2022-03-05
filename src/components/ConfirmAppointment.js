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

  import '../style/button.css'
  
  
  
  
  
  function ConfirmAppointment() {
    
    
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
      <>
  
        <Button onClick={onOpen}  className='btn-confirm'>Confirm Appointment</Button>
  
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Appointment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Do you want to create this appointment?</ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} as='a' href='/profile' >
              Confirm
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        {/* </Box> */}
      </>
  
  
    )
  }
  
  export default ConfirmAppointment;