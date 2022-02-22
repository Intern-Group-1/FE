import Banner from "./Banner"
import SliderSpeciality from "./SliderSpeciality";

import SimpleSlider from "./Testslick";
import Navbar from "./Navbar";
import Footer from './Footer'
import { lazy, Suspense } from "react";
 import SliderDoctor from './SliderDoctor'
// const SliderDoctor =lazy(() =>import("./SliderDoctor"))


function Home(){
    return(
        <>   
            <Navbar/>
            <Banner />

            <SliderSpeciality />

            <SimpleSlider/>
            <SliderDoctor/>
            <Footer/>

        </>
    )
}
export default Home;