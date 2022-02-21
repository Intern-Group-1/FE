


import Home from "./components/Homepage";
import Login from "./components/Login";
import {Signup} from "./components/Signup";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";
import Datepicker from "./components/Datepicker";
import Book from "./components/book";
import InitialFocus from "./components/Modal";


function App() {


  return (
    <ChakraProvider>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={<ContactFormWithSocialButtons />} />
        <Route path="/profile" element={<InitialFocus/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Alldoctor />} />
        <Route path='/doctor/:id' element={<Book />} />
        <Route path='/book/:id' element={<Book/>}/>
      </Routes>

    </ChakraProvider>


  )
}

export default App;
