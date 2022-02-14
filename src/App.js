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




function App() {
  
  return (
    <ChakraProvider>

      <Navbar />

      <Routes>
        <Route path="/pro5" element={<ProfileUser />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      
        <Route path="/doctor" element={ <ProductAddToCart />}/>

       </Routes>
      
        {/* <Footer /> */}


        {/* <Route path="/login" element={<Login />} />
        } />
        <Route exact path="/signup" element={<Signup />} /> */}
  {/* <Item/> */}
     {/* <ProductAddToCart/> */}
<PreviousNextMethods />
      <Footer />
    </ChakraProvider>

  )
}

export default App;
