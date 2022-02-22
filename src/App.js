


import Home from "./components/Homepage";
import Login from "./components/Login";
import {Signup} from "./components/Signup";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";


import {rt,Datepicker} from "./components/Datepicker";
import Book from "./components/book";
import InitialFocus from "./components/Modal";

// import ArticleList from "./components/Booking"

import Booking from "./components/Booking"

function App() {
 

  return (
    <ChakraProvider>
      {/* <Datepicker />
      <rt/> */}
      <Routes>
      
      
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={<ContactFormWithSocialButtons />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Alldoctor />} />

        <Route path="/test" element={<Booking />} />
        <Route path='/test/:id' element={<Booking />} />
        <Route path='/book/:id' element={<Book/>}/>

      </Routes>

    </ChakraProvider>
  )
}

export default App;
