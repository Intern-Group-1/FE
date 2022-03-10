import Home from "./components/Homepage";
import Login from "./components/Login";
import { Signup } from "./components/Signup";
import React from "react";
import { Routes, Route, Navigate, RequireAuth } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";
import InitialFocus2 from "./components/updateprofile";
import Booking from "./components/Booking"
import Admin from "./admin2/admin";
import Table from "./admin2/tableDoctor";
import TableClinic from "./admin2/tableClinic";
import PrivateRoute from '../src/admin2/auth/PrivateRoute'
import Logoutadmin from "./admin2/logout";
import TableUser from "./admin2/tableUser";
import Profile from "./components/TestProfile"
import TableAppointment from './admin2/tableAppointment'
import BasicStatistics from "./admin2/Dashboard"
import BarChart from "./admin2/Chart"
import Dashboard from "./admin2/Dashboard";

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
       
     
        <Route path="/testprofile" element={<Profile />} />

       
      
        



        {/* admin */}
        <Route  path="/admin" element={<PrivateRoute> <Admin /></PrivateRoute>}/> 
        <Route path='/admin/doctor' element={<PrivateRoute> <Table /></PrivateRoute>} />
        <Route path='/admin/user' element={<PrivateRoute> <TableUser /></PrivateRoute>} />
        <Route path='/admin/clinic' element={<PrivateRoute> <TableClinic /></PrivateRoute>} />
         <Route path='/admin/appointment' element={<PrivateRoute> <TableAppointment /></PrivateRoute>} />  
         <Route path='/admin/dashboard' element={<PrivateRoute> <Dashboard /></PrivateRoute>} />    
        <Route path="/testadmin" element={<BarChart />} />
        <Route  path="/logout" element={<PrivateRoute> <Logoutadmin /></PrivateRoute>}/> 
      </Routes>

    </ChakraProvider>
  )
}

export default App;