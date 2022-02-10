import '../style/Navbar.css'
import {AiOutlineDown} from "react-icons/ai"
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';
import hoamai from '../assets/image/hoamai.png'
import hoamai2 from '../assets/image/hoamai2.png'
import '../style/Dropdown.css'
import 'animate.css'

import { Icon,Button,Flex,Box,Text,Image } from '@chakra-ui/react';

function Navbar() {
    return (
        <div id="nav">
           
        <Link   to='/home' className="logo">
        <Box  d='flex' justifyContent='center'>
          <Box>
          
          {/* <Image src={hoamai} maxHeight='500' mr='230'  maxWidth='150' />
           */}
          </Box >
         <Box width='200' height='100' d='flex' justifyContent='center' >
          <Image src={logo}   ></Image>

         </Box>
          
         
          </Box>
        
          
        </Link>
        <Link to='/home' className="home">Home</Link>
        <div className="specialist dropdown animate__animated animate__rotateIn ">Specialist
        
        <div className="dropdown-content">
          <a href="#">Neurology</a>
          <a href="#">Orthopedic</a>
          <a href="#">Dentist</a>
      
      </div>

        </div> 
        <div className="doctor dropdown">Doctor 
        <div className="dropdown-content">
          <a href="#">Neurology</a>
          <a href="#">Orthopedic</a>
          <a href="#">Dentist</a>
      
      </div>
        </div>
        <div className="about">About 
        
        </div>

        <Box  d='flex' justifyContent='center'>
         
         <Box width='190' height='100' d='flex' mt='10'>
         {/* <Link to='/login'><button className="btn-login"  >LOGIN/SIGNUP</button></Link> */}
          <Link to='/pro5'><button className="btn-login"  >ProFile</button></Link> 
           <Link to='/login'><button className="btn-login"  >LOGIN/SIGNUP</button></Link>

         </Box>
         <Box>
          
          {/* <Image src={hoamai2} maxHeight='500'   maxWidth='150' mr='90'/> */}
          
          </Box >
         
          </Box>
       
        
      </div>
    )
}

export default Navbar;