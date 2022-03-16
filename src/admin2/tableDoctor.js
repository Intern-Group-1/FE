import { Box, Flex,Center,Image,Spinner,Text } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest'
import ModalDoctor from './ModalDoctor'
import { EditIcon, AddIcon, CheckIcon,DeleteIcon} from '@chakra-ui/icons'
import DeleteDoctor from './ModalDeleteDoctor'
import UpdateDoctor from './ModalUpdateDoctor'
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
          marginLeft:'870px'
        }} 
        ><ModalDoctor /></Box>
        <table className="table table-hover" style={{
            width:'1150px',
            height:'600px'
        }} >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope='col'>Avatar</th>
      <th scope="col">Name</th>
      <th scope="col">Specialy</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Handle</th>
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
      <td>{api.speciality.name}</td>
      <td>{api.phone_number}</td>
      <td>{api.address}</td>
      <td>{api.age}</td>
     
      <td>{(api.gender) = 'true' ? <p>Male</p> : <p>Female</p>}</td>
      <td>
        <tr>
            <td   style={{
                  paddingRight: '20px'
            }}>
                <Button className='btn btn-info'> <UpdateDoctor doctor={api._id}/></Button>
        
            </td>
            <td>
              <Button className='btn btn-danger'> 
                <DeleteDoctor doctor={api._id}/>
              </Button>
            </td>
        </tr>     
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