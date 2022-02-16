import Banner from "./Banner"
import SliderSpeciality from "./SliderSpeciality";
import SliderDoctor from "./SliderDoctor";
import Navbar from "./Navbar";
import Footer from './Footer'
import PreviousNextMethods from "./Testslick"


function Home(){
    return(
        <>   <Navbar/>
            <Banner />
            <SliderSpeciality />
           <PreviousNextMethods/>       
           <SliderDoctor/>
           <Footer/>

        </>
    )
}

export default Home;