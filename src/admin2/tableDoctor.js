import { Box, Flex,Center,Image,Spinner,Text } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest'

import ModalDoctor from './ModalCreateDoctor'
import { EditIcon, AddIcon, CheckIcon,DeleteIcon} from '@chakra-ui/icons'
import DeleteDoctor from './ModalDeleteDoctor'
import UpdateDoctor from './ModalUpdateDoctor'
import {ViewIcon} from '@chakra-ui/icons'
import ViewShift from './ViewShift'
function Table() {
  const [open,setOpen]=useState('');
  const [save, setSave] = useState('Delete')
    const [Api, setApi] = useState([]);
    const [loading,setLoading] =useState(false)
    useEffect(()=>{
        ApiCaller('get-all-doctor', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
          setLoading(true)
      })
    },[])


    let i=1;
  return (
    <>    
    <Box  ml={'330px'}>
        <Box >
        <Box
        ml={'-340px'}
        >
          <Right/>
        </Box>
        <Box
        style={{
          marginTop:'15px',
          marginBottom:'15px',
          marginLeft:'1022px'
        }} 
        > <Button   className='btn btn-success'  href='/admin/account'><AddIcon mr='12px'/>Add Doctor</Button></Box>
        <table className="table table-hover" style={{
            width:'1210px',
            height:'600px'
        }} >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope='col'>Avatar</th>
      <th scope="col">Name</th>
      <th scope="col">Specialy</th>
      <th scope="col">Phone</th>
      <th width={'300px'} scope="col">Address</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th width={'200px'} scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {loading ? Api.map(api => (
        <>
    <tr>
    <th  scope="row">{(api._id!=null) ? i++: <></> 
            }</th> 
            <td><Box className='thumb'><Image  src={api.avatar}/></Box></td>
      <td>{api.full_name}</td>
      <td>{api.speciality&&api.speciality.name}</td>
      <td>{api.phone_number}</td>
      <td>{api.address}</td>
      <td>{api.age}</td>
     
      <td>{(api.gender) = 'true' ? <p>Male</p> : <p>Female</p>}</td>
      <td>
          <Box
          d={'flex'}
          >
            <Box>
              <UpdateDoctor doctor={api._id}/> 
            </Box>
            <Box ml={'10px'}>
              <DeleteDoctor doctor={api._id}/>
            </Box>
            <Box ml={'10px'} className='btn btn-warning'> 
              <ViewShift />
            </Box>           
          </Box> 
      </td>
    
    </tr>
    </>
      )):
      <Box  mt='200px' height={'500px'} pl={'500px'}>
             
      <Spinner

    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /> <Text  color={'blue.500'}>Loading...</Text>  </Box>} 
  </tbody>
</table>

        </Box>
    </Box>
    </>

    
  )
}

export default Table