import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Flex } from '@chakra-ui/react';
import Home from '../components/Homepage';
import { render } from '@testing-library/react';
import Right from './right';
import Table from './tableDoctor';
import Nav from '../admin2/Nav';

function Admin() {

    return (
    <> 
        <Right/>
        <Table/>
    </>
       
    )
}

export default Admin