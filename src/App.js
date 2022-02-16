<<<<<<< HEAD

import Home from "./components/Homepage";
import Login from "./components/Login";
import {Signup} from "./components/Signup";
=======
import Home from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
>>>>>>> 076214ecdc9ab68eb4ee0e543060c4a239df923c
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";
import SliderDoctor from "./components/SliderDoctor";
<<<<<<< HEAD

=======
>>>>>>> 076214ecdc9ab68eb4ee0e543060c4a239df923c



function App() {


  return (
<<<<<<< HEAD
    <ChakraProvider>


=======
    <ChakraProvider>   
>>>>>>> 076214ecdc9ab68eb4ee0e543060c4a239df923c
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={<ContactFormWithSocialButtons />} />
        <Route path="/pro5" element={<ProfileUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Alldoctor />} />
      </Routes>
<<<<<<< HEAD
      {/* <PreviousNextMethods /> */}

      {/* <Datepicker/>
      <PreviousNextMethods />
      <SliderDoctor/> */}
      {/* <SliderDoctor /> */}
=======
      <SliderDoctor/>
>>>>>>> 076214ecdc9ab68eb4ee0e543060c4a239df923c
    </ChakraProvider>

  )
}

export default App;