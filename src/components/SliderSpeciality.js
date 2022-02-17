import '../style/SliderSpeciality.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import ASpeciality from './ModuleSpeciality';
import sp1 from '../assets/image/speciality/brain.png'
import sp2 from '../assets/image/speciality/Consultant Physician.png'
import sp3 from '../assets/image/speciality/General Physician.png'
import sp4 from '../assets/image/speciality/heart.png'
import sp5 from '../assets/image/speciality/orthopedic.png'





function SliderSpeciality() {
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
        speciality: 'Neurology', 
        avt: sp1
    },
    {
        age: 20,
        full_name: 'Anna',
        speciality: 'Consultant Physician',  
        avt: sp2
    }, {
        age: 23,
        full_name: 'Nam',
        speciality: 'General Physician',   
        avt: sp3
    }, 
    {
        age: 24,
        full_name: 'Lyna',
        speciality: 'Cardiologist', 
        avt: sp4   
    },{
        age: 25,
        full_name: 'Mia',
        speciality: 'Orthopedic',
        avt: sp5     
    }]
    return (
        <div id='slide-speciality'>     
        <div className="section-specialty">
            <div className='speciality-header'>
                <p className='speciality-title1'>Clinic and Specialities</p>
                <p className='speciality-title2'>Find experienced doctors across all specialties</p>
            </div>
            <div className="speciality-content">

                <Slider {...settings}>
                    {dts.map(dt => (
                        <ASpeciality speciality={dt.speciality} avt={dt.avt} />
                    ))}
                </Slider>
            </div>
        </div>
        </div>                    
    );

}
export default SliderSpeciality;