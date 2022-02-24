import '../style/SliderDoctor.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import Adoctor from './WithoutNav';
import '../responsive/homepage/SliderDoctor.css';


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
    const dts = [{
        age: 12,
        full_name: 'John',
        speciality: 'Surgery' 
    },
    {
        age: 20,
        full_name: 'Anna',
        speciality: 'Gynecology'  
    }, {
        age: 23,
        full_name: 'Nam',
        speciality: 'Immunology'   
    }, 
    {
        age: 24,
        full_name: 'Lyna',
        speciality: 'Oncology'    
    },{
        age: 25,
        full_name: 'Mia',
        speciality: 'Gastroenterology'     
    }]
    return (
        <div id='slide-doctor'>     
            <div className="section-doctor">
            <button className='btn-more'>More...</button>
            <div className='doctor-header'>
                    <p className='doctor-title1'>Book Our Doctor</p>
                    <p className='doctor-title2'>Quick appointment with doctors</p>
                </div>
                <div className="doctor-content">
                    <Slider {...settings}>
                        {/* <Alldoctor/> */}
                        {dts.map(dt => (
                            <Adoctor age={dt.age} full_name={dt.full_name} speciality={dt.speciality} avt='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>                    
    );

}
export default SliderDoctor;
