import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alldoctor from "./components/Alldoctor";
import ProfileUser from "./components/ProfileUser"
import {ChakraProvider} from '@chakra-ui/react'
import React from "react";
import { Routes ,Route } from "react-router-dom";
import ContactFormWithSocialButtons from"./components/Contact";

// import PreviousNextMethods from "./components/Testslick"

function App() {
  return (
    <ChakraProvider>
    <Navbar />
    <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/user" element= {<ProfileUser />} />
        <Route path="/signin" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/contact" element={ <ContactFormWithSocialButtons /> } />
        <Route path="/doctor" element={<Alldoctor />}/>
    </Routes>
    <Footer />
    </ChakraProvider>
  )
}

export default App;
