import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './right';
import { PhoneIcon, AddIcon, CheckIcon,DeleteIcon} from '@chakra-ui/icons'
function TableUser() {
    

    const [Api, setApi] = useState([]);
 
    useEffect(()=>{
        ApiCaller('get-all-user', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])


    let i=0;
    function  deleteUser(id){     
        console.log(id);
    }
  return (
    <>
   
    
    <Center  pt='50px' pl='340px'>
        <Box >
        <Right/>
        <table className="table table-hover" style={{
            width:'1000px',
            height:'600px'
        }} >
  <thead>
    <tr>
       <th scope="col">#</th> 
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Gmail</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {Api.map(api => (
        <>           
    <tr  id={api._id}>
    
       <th  scope="row">{(api._id!=null) ? i++: <></> 
            }</th> 
      <td>{api.full_name}</td>
    
      <td>{api.address}</td>
      <td>{api.phone_number}</td>
       <td>{
           (api.account!=null) ?<a>{api.account.email}</a> : <a>null</a>
       }</td> 
      <td>
        <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-success'> <CheckIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'  onClick={()=>deleteUser(api._id)} > <DeleteIcon  /></Button></td>
        </tr>
 
   
          
      </td>
    
    </tr>
    </>
      ))}
  
   
    
  </tbody>
</table>

        </Box>
    </Center>
    </>

    
  )
}

export default TableUser