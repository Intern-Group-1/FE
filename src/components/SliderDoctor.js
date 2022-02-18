import '../style/SliderDoctor.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import Adoctor from './Adoctor';
import { Button } from '@chakra-ui/react';




function SliderDoctor() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const [Api, setApi] = useState([]);

    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)
            })
    }, [])

    const book=()=>{
        const infor = document.getElementById(Api.map(dt =>(dt.full_name)));
     console.log(Api.map(dt =>(dt.age)));
    }
    return (
        <div id='slide-doctor'>
            <div className="section-doctor">
                
                <Button
                    className='btn-more'
                    href='/doctor '
                    as={'a'}
                   >
                    More...
                </Button>
                <div className='doctor-header'>
                    <p className='doctor-title1'>Book Our Doctor</p>
                    <p className='doctor-title2'>Quick appointment with doctors</p>
                </div>
                <div className="doctor-content">

                    <Slider {...settings} >
                        {/* <Alldoctor/> */}
                        {Api.map(dt => (
                                <>
                            <Adoctor id={dt.age} key={dt.full_name} age={dt.age} full_name={dt.full_name} speciality={dt.speciality} avt='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                           
                            </>
                      ))}
                    </Slider>
                </div>
            </div>
        </div>
    );

}
export default SliderDoctor;
