


import Home from "./components/Homepage";
import Login from "./components/Login";
import { Signup } from "./components/Signup";

import React from "react";
import { Routes, Route, Navigate, RequireAuth } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import {Alldoctor} from "./components/Alldoctor";


import { rt, Datepicker } from "./components/Datepicker";
import InitialFocus2 from "./components/updateprofile";

// import ArticleList from "./components/Booking"

import Booking from "./components/Booking"


import Infor from "./components/updateprofile";
import Admin from "./admin2/admin";
import Table from "./admin2/tableDoctor";
import PrivateRoute from '../src/admin2/auth/PrivateRoute'
import PrivateOutlet from "./admin2/auth/PrivateOutlet";
import Logoutadmin from "./admin2/logout";
import TableUser from "./admin2/tableUser";

function App() {
  return (
    <ChakraProvider>
  
      <Routes>
        {/* customer */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={<ContactFormWithSocialButtons />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/profile/user" element={<InitialFocus2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Alldoctor />} />      
        <Route path="/booking" element={<Booking />} />
        <Route path='/booking/:id' element={<Booking />} />


        {/* admin */}
        <Route  path="/admin" element={<PrivateRoute> <Admin /></PrivateRoute>}/> 
        <Route path='/admin/doctor' element={<PrivateRoute> <Table /></PrivateRoute>} />
        <Route path='/admin/user' element={<PrivateRoute> <TableUser /></PrivateRoute>} />
        <Route  path="/logout" element={<PrivateRoute> <Logoutadmin /></PrivateRoute>}/> 
      </Routes>
    </ChakraProvider>
  )
}

export default App;
