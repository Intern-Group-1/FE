


import Home from "./components/Homepage";
import Login from "./components/Login";
import {Signup} from "./components/Signup";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";
import ArticleList from "./components/Appointment"
import Booking from "./components/Booking"
import News from "./components/News"
import DataTable from "./components/Admin"

 
function App() {


  return (
    <ChakraProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={<ContactFormWithSocialButtons />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Alldoctor />} />
        <Route path="/booking" element={<ArticleList />} />
        {/* <Route path="/test" element={<Booking />} /> */}
        <Route path="/news" element={<News />} />
        <Route path="/test" element={<DataTable />} />

      </Routes>
    </ChakraProvider>
  )
}

export default App;