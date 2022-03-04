import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest';
import { EditIcon, AddIcon, CheckIcon,DeleteIcon} from '@chakra-ui/icons'
function Table() {
    function  deleteDoctor(){
        console.log('ahii');
    }

    const [Api, setApi] = useState([]);
 
    useEffect(()=>{
        ApiCaller('get-all-doctor', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])



  return (
    <>    
    <Box  ml={'330px'}>
        <Box >
        <Box
        ml={'-340px'}
        >
          <Right/>
        </Box>
        <Button className='btn btn-success'
        style={{
          marginTop:'15px',
          marginBottom:'15px',
          marginLeft:'885px'
        }}
        
        > <AddIcon/> Add user</Button> 
        <table className="table table-hover" style={{
            width:'1000px',
            height:'600px'
        }} >
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Specialy</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {Api.map(api => (
        <>
    <tr>
   
      {/* <th scope="row">1</th> */}
      <td>{api.full_name}</td>
     
      <td>{api.speciality.name}</td>

      <td>{api.age}</td>
     
      <td>{(api.gender) = 'true' ? <p>Male</p> : <p>Female</p>}</td>
      <td>
        <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-info'> <EditIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'> <DeleteIcon  onClick={deleteDoctor} /></Button></td>
        </tr>
 
   
          
      </td>
    
    </tr>
    </>
      ))}
    
   
    
  </tbody>
</table>

        </Box>
    </Box>
    </>

    
  )
}

export default Table