import spy from '../assets/image/brain.png'
import { MdArrowBackIos, MdOutlineNavigateNext } from "react-icons/md"
import '../style/SliderDoctor.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import Alldoctor from './Alldoctor';
import Adoctor from './WithoutNav';




function SliderDoctor() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    const [Api, setApi] = useState([]);

    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)
            })
    }, [])




    return (

        <div className="section-specialty">

            <div className="doctor-content">

                <Slider {...settings}>
                    {/* <Alldoctor/> */}
                    {Api.map(api => (

                        <Adoctor age={api.age} full_name={api.full_name} avt='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                    ))}
                </Slider>
            </div>


        </div>

    );

}
export default SliderDoctor;
