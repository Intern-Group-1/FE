import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";

import React from "react";

import { Routes, Route } from "react-router-dom";
import PreviousNextMethods from "./components/Testslick"
import Item from './components/Speciality'

import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ProductAddToCart from "./components/ProductAddToCart";
import LazyLoad from "react-lazyload";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";



function App() {
  
 
  return (
    <ChakraProvider>
       <Navbar />
        <Routes>
      
          <Route path="/signin" element={<Login />} />
        
          <Route path="/contact" element={<ContactFormWithSocialButtons/>}/>
          <Route path="/pro5" element={<ProfileUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor" element={<Alldoctor />} />
         
        </Routes>
         
  
      
        <PreviousNextMethods />
        <Footer />
    
     
        {/* <Route component={DefaultContainer} /> */}
    

      {/* <Footer /> */}


      {/* <Route path="/login" element={<Login />} />
        } />
        <Route exact path="/signup" element={<Signup />} /> */}
      {/* <Item/> */}
      {/* <ProductAddToCart/> */}
      

    </ChakraProvider>

  )
}

export default App;
