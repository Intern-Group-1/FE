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
        const infor = document.getElementsByTagName('Adoctor');
            console.log( infor);
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
                <div className="doctor-content" >

                    <Slider  {...settings} >
                        {/* <Alldoctor/> */}
                        {Api.map(dt => (
                           
                                <>
                                  {/* <a>{'id là '+dt._id}</a> */}
                            <Adoctor   _id={dt._id} key={dt._id} age={dt.age} full_name={dt.full_name} speciality={dt.speciality.name} avt={dt.avatar} />
                          
                            </>
                      ))}
                    </Slider>
                </div>
            </div>
        </div>
    );

}
export default SliderDoctor;
