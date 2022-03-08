import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest';
import { PhoneIcon, AddIcon, CheckIcon,DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { handleDeleteUser } from '../services/User';
import DeleteUser from './ModalConfirm';
import UpdateUser from './ModalUpdate';
import { render } from 'react-dom';
import ModalUser from './ModalUser'
function TableUser() {
    const [Api, setApi] = useState([]);
    useEffect(()=>{
        ApiCaller('get-all-user', 'GET')
      .then ( async res => {
          setApi(res.data.data)
      })
    },[])

    let i=1;
    function  deleteUser(id){     
        console.log(id);
    }
  return (
    <>  
    <Box  pt='0px' pl='0px'> 
     
        <Box >
        <Right/>
        <Box
        style={{
          marginLeft:'1308px',
          marginTop:'15px',
          marginBottom:'15px'
        }} 
        ><ModalUser /></Box>
        <table className="table table-hover" style={{
            width:'1100px',
            height:'600px',
            marginLeft:'320px'
        }} >
            <thead>
              <tr>
                <th scope="col">Order</th> 
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col" width='200px'>Phone Number</th>
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
                <Button className='btn btn-info'> <UpdateUser user={api._id}/></Button>
        
            </td>
           
            <td>
              <Button 
              className='btn btn-danger'
              > 
                <DeleteUser  user={api._id}/> 
              </Button>
            </td>
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

export default TableUser