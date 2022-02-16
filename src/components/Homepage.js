import Banner from "./Banner"

import Doctor from "./Doctors";
import Navbar from "./Navbar";
import Footer from './Footer'
import PreviousNextMethods from "./Testslick"
import SliderDoctor from "./SliderDoctor";

function Home(){
    return(
        <>   <Navbar/>
            <Banner />
            <SliderDoctor/>
           <PreviousNextMethods/>       
         
           <Footer/>
        </>
    )
}

export default Home;