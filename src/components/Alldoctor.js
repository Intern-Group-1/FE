import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Flex,
  Spinner 
} from '@chakra-ui/react';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import { Router, useNavigate } from 'react-router-dom'
import { PhoneIcon, EmailIcon, RepeatClockIcon, InfoIcon } from '@chakra-ui/icons'
import Navbar from "./Navbar";
import Footer from './Footer'
import LazyLoad from 'react-lazyload';
import { ToastContainer, toast } from 'react-toastify';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import * as ReactBootStrap from "react-bootstrap"


function Alldoctor(props) {
  const navigate = useNavigate()
  const [Api, setApi] = useState([]);
  const [header, setHeader] = useState('Doctor');
  const [loading,setLoading] =useState(false)

  useEffect(() => {
    ApiCaller('get-all-doctor', 'GET')
      .then( res => {
        console.log(res);
        setApi(res.data.data)
        setLoading(true)

      })
  }, [])

  const loggedInUser = localStorage.getItem('token');
  const book1 = (e) => {



    if (!loggedInUser) {
      navigate('/signin')
      toast.warning("Please Login To Continue");
    }
    else {
      //  console.log(e.target.value);
      navigate('/booking/' + `${e.target.value}`);
      // console.log('/book/'+`${e.target.value}`);

    }


    // <Routes>

    // <Route path={`/book/:${e.target.value}`} element={<Book/>}/>
    //  </Routes>

  }

  //  if(Api){
  //   return Api
  // }
  // else{
  //   console.log('loading');
  //   }




  return (
    <>
      <Navbar />
      <Box>

        <Heading mt='100px' textAlign={'center'}>{header}</Heading>
        {/* <LazyLoad> */}
        <Center mt='10px' py={4}

          d='flex'
          flexWrap={'wrap'}
          justifyContent='start'

        >
          <>




            {loading ? Api.map(api => (
              <>

                <Suspense >

                  <Box ml='20px'

                    maxW={'320px'}
                    h={'400px'}
                    w={'320px'}
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    ml='40px'
                    mt='25px'
                    textAlign={'center'}>
                    <Avatar
                      size={'xl'}
                      src={
                        api.avatar
                      }
                      alt={api.full_name}
                      mb={4}
                      pos={'relative'}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.400',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                      }}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'} >
                      {api.full_name}
                    </Heading>
                    <Text fontWeight={600} color={'black'} mb={4}>
                      {api.speciality.name}
                    </Text>

                    <Text
                      textAlign={'left'}
                      color={'black'}
                      px={3}>
                      <InfoIcon />  {api.age}


                    </Text>
                    <Text
                      textAlign={'left'}
                      color={'black'}
                      px={3}>

                      <PhoneIcon />  {api.phone_number}
                    </Text>
                    <Text
                      textAlign={'left'}
                      color={'black'}
                      px={3}>

                      <EmailIcon />   {api.account.email}
                    </Text>



                    <Stack mt='8px'
                      direction={'row'}
                      spacing={4}>
                      <Button
                        mt='30px'
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        value={api._id}
                        onClick={book1}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        Book Now
                      </Button>
                    </Stack>
                  </Box>
                </Suspense>
              </>
            )
            ) : <Box ml={'50%'}><Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          /></Box>}

          </>
        </Center>

        {/* </LazyLoad> */}
      </Box>
      <Footer />

    </>
  );
}

export { Alldoctor };