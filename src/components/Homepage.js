import Banner from "./Navbar/Banner"
import SliderSpeciality from "./Slider/SliderSpeciality";

import SimpleSlider from "./Testslick";
import Navbar from "../components/Navbar/Navbar";
import Footer from './Footer/Footer'
import { lazy, Suspense } from "react";
 import SliderDoctor from './Slider/SliderDoctor'
import Botchat from "./Botchat";

function Home(){
    return(
        <>   
            <Navbar/>
            <Banner />
            <SliderSpeciality />
            <SimpleSlider/>
            <SliderDoctor/>

           <Botchat/>

            <Footer/>
            {/* thêm git */}
        </>
    )
}
export default Home;
