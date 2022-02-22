import Banner from "./Banner"
import SliderSpeciality from "./SliderSpeciality";

import SimpleSlider from "./Testslick";
import Navbar from "./Navbar";
import Footer from './Footer'
import { lazy, Suspense } from "react";
 
const SlideDoctor =lazy(() =>import("./SliderDoctor"))


function Home(){
    return(
        <>   <Navbar/>
            <Banner />

            <SliderSpeciality />

                <SimpleSlider/>
<Suspense fallback={<div>Loading......</div>}>
<SlideDoctor/>
</Suspense>
           
           <Footer/>


        </>
    )
}

export default Home;