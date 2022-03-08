import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest';
import { EditIcon, AddIcon,DeleteIcon} from '@chakra-ui/icons'
import AddClinic from './ModalAddClinic'
import DeleteClinic from './ModalDeleteClinic'
function TableClinic() {    

    const [Api, setApi] = useState([]);
    useEffect(()=>{
        ApiCaller('get-all-branch', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])

    let i=1;
    function  deleteUser(id){     
        console.log(id);
    }
  return (
    <>  
    <Box> 
        <Box >
        <Right/>
        <Box 
          style={{
            marginLeft:'1055px',
            marginTop:'15px',
            marginBottom:'15px',
            color:'none'
          }} 
          > 
          <AddClinic/> 
        </Box> 
        <table className="table table-hover" style={{
            width:'700px',
            height:'600px',
            marginLeft:'480px'
        }} >
            <thead>
              <tr>
                <th width={'60px'} scope="col">Order</th> 
                <th width={'430px'} scope="col">Address</th>
                <th scope="col" border-top={'none'}>Handle</th>
              </tr>
            </thead>
            <tbody>
              {Api.map(api => (
                    <>           
                <tr height={'100px'}  id={api._id}>
                  <th  scope="row">{(api._id!=null) ? i++: <></> 
                        }</th> 
                    <td>{api.address}</td>
                    <td>
                      <tr>
                          <td   style={{
                              paddingRight: '20px'
                          }}>
                              <Button className='btn btn-info'> <EditIcon/></Button>  
                          </td>
                          <td>
                            <Button 
                            className='btn btn-danger'  
                            > 
                              <DeleteClinic  clinic={api._id}/>
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

export default TableClinic