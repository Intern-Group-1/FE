import { Box, Flex, Center, Image, Spinner, Text, Button as btn, ButtonSpinner, Icon } from '@chakra-ui/react'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest';
import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import AddSpeciality from './modalAddSpeciality';
import DeleteSpeciality from './ModalDeleleSpeciality';
import UpdateSpeciality from './modalUpdateSpeciality';

function TableSpeciality() {
  const [Api, setApi] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        setApi(res.data.data)
        setLoading(true)
      })
  }, [])

  //console.log('haha1');
  let i = 1;
  function deleteUser(id) {

    console.log(id);
  }
  const Loading = () => (
    <div >
      <h5>Loading...</h5>

    </div>
  )
  return (
    <>

      <Box pt='0px' pl='0px'>

        <Box >

          <Right />
          <Box
            style={{
              marginLeft: '1095px',
              marginTop: '15px',
              marginBottom: '15px'
            }}
          >
            <Button className='btn btn-success'>
              <AddSpeciality />
            </Button>
          </Box>
          <table className="table table-hover" style={{
            width: '800px',
            height: '600px',
            marginLeft: '450px'
          }} >
            <thead>
              <tr>

                <th scope="col">#</th>
                <th scope='col'>Avatar</th>
                <th scope="col">Name</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {loading ? Api.map(api => (

                <>

                  <tr id={api._id}>

                    <th scope="row">{(api._id != null) ? i++ : <></>
                    }</th>
                    <td><Box ><Image src={api.images} /></Box></td>
                    <td>{api.name}</td>

                    <td
                      width={'200px'}
                    >
                      <Box
                        d={'flex'}
                      >
                        <Box>
                          <UpdateSpeciality speciality={api._id} />
                        </Box>
                        <Box
                          ml={'20px'}
                        >
                          <DeleteSpeciality speciality={api._id} />
                        </Box>
                      </Box>
                    </td>

                  </tr>


                </>

              ))
                :
                <Box mt='200px' height={'500px'} pl={'500px'}>

                  <Spinner

                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                  /> <Text color={'blue.500'}>Loading...</Text>  </Box>}
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  )
}

export default TableSpeciality 