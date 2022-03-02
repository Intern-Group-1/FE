import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './right';
import { PhoneIcon, AddIcon, CheckIcon,DeleteIcon} from '@chakra-ui/icons'
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
   
    
    <Center  pt='50px' pl='500px'>
        <Box >
        <Right/>
        <table className="table table-hover" style={{
            width:'1000px',
            height:'600px'
        }} >
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Specialy</th>
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
      <td>
        <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-success'> <CheckIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'> <DeleteIcon  onClick={deleteDoctor} /></Button></td>
        </tr>
 
   
          
      </td>
    
    </tr>
    </>
      ))}
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>    <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-success'> <CheckIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'> <DeleteIcon  onClick={deleteDoctor} /></Button></td>
        </tr>
        </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>
      <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-success'> <CheckIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'> <DeleteIcon  onClick={deleteDoctor} /></Button></td>
        </tr>
      </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
      <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-success'> <CheckIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'> <DeleteIcon  onClick={deleteDoctor} /></Button></td>
        </tr>
      </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <tr>
            <td   style={{
                paddingRight: '20px'
            }}>
                <Button className='btn btn-success'> <CheckIcon/></Button>
        
            </td>
            <td><Button className='btn btn-danger'> <DeleteIcon  onClick={deleteDoctor} /></Button></td>
        </tr>
      </td>
    </tr> */}
   
    
  </tbody>
</table>

        </Box>
    </Center>
    </>

    
  )
}

export default Table