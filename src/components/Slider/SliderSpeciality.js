
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import ApiCaller from '../../utils/apiCaller';
import ASpeciality from '../Navbar/ModuleSpeciality';
import '../../responsive/homepage/SliderSpeciality.css'




function SliderSpeciality() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        lazyLoad: true,
        className: "center",
        centerPadding: "60px",
       
    };
    const [Api, setApi] = useState([]);
    useEffect(() => {
        ApiCaller('get-all-speciality', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)
            })
    }, [])
   
    return (
        <div id='slide-speciality'>     
        <div className="section-specialty">
            <div className='speciality-header'>
                <p className='speciality-title1'>Clinics and Specialities</p>
                <p className='speciality-title2'>Find experienced doctors across all specialties</p>
            </div>
            <div className="speciality-content" >
                <Slider {...settings} >
                    {Api.map(dt => (
                        <ASpeciality key={dt._id} name={dt.name} avt={dt.images} />
                    ))}
                </Slider>
            </div>
        </div>
        </div>                    
    );

}
export default SliderSpeciality;