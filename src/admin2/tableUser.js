import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './right';
import { PhoneIcon, AddIcon, CheckIcon,DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { handleDeleteUser } from '../services/User';
import DeleteUser from './ModalConfirm';
import UpdateUser from './ModalUpdate';
import { render } from 'react-dom';
function TableUser() {
    const [Api, setApi] = useState([]);
 
    useEffect(()=>{
        ApiCaller('get-all-user', 'GET')
      .then ( async res => {
        // console.log(res);
          setApi(res.data.data)
      })
    },[Api])
    let i=1;
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
                <Button className='btn btn-info'> <UpdateUser user={api._id}/></Button>
        
            </td>
           
            <td>
              <Button className='btn btn-danger'> 
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
    </Center>
    </>

    
  )
}

export default TableUser