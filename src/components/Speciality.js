import spy from '../assets/image/brain.png'
import { MdArrowBackIos,MdOutlineNavigateNext } from "react-icons/md"
import '../style/Speciality.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// function Speciality() {
//     return(
//         <div id="speciatily">
//             <div className="container-speciality">
//                 <p className="title-speciality"> Speciality </p>
//                 <div className="container-item">
//                     <div className="speciatily-item">
//                         <img src={spy} alt="" />
//                         <p className="title-speciatily">Cardiology</p>
//                     </div>

//                     <div className="speciatily-item">
//                         <img src={spy} alt="" />
//                         <p className="title-speciatily">Cardiology</p>
//                     </div>

//                     <div className="speciatily-item">
//                         <img src={spy} alt="" />
//                         <p className="title-speciatily">Cardiology</p>
//                     </div>
//                 </div>
//                 <button className='btn-back'> <MdArrowBackIos/> </button>
//                 <button className='btn-next'> <MdOutlineNavigateNext /> </button>
//             </div>
            
//         </div>
//     )
// }




export default class Speciality extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
       
      <div className="section-specialty">
        <div className="specialty-content">
        <Slider {...settings}>
        <div className='img-customize'>
        <div className='img'>
          <img src={spy} alt="" className='css-img' />
        </div>
        <div className='title-item'>
                    <a >Huyết</a>
                    </div>
        </div>

        <div className='img-customize'>
            <div className='img'>
                        <img src={spy} alt="" className='css-img'/>
                    </div>
                    <div className='title-item'>
                    <a >Xương</a>
                    </div>                  
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={spy} alt="" className='css-img' />
                    </div>
                    <div className='title-item'>
                    <a >Răng</a>
                    </div>
                    
        </div>
        <Link to='#' className='img-customize'>
            <div className='img'>
                        <img src={spy} alt="" className='css-img' />
                    </div>
                    <div className='title-item'>
                    <a >Tim</a>
                    </div>
                    
        </Link>
       

       
        </Slider>
      </div>
      </div>
    
    );
  }
}

