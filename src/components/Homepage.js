import Banner from "./Banner"
import SliderSpeciality from "./SliderSpeciality";
import SliderDoctor from "./SliderDoctor";
import SimpleSlider from "./Testslick";
import Navbar from "./Navbar";
import Footer from './Footer'


function Home(){
    return(
        <>   <Navbar/>
            <Banner />
            <SliderSpeciality />
            <SimpleSlider/>
           <SliderDoctor/>
           <Footer/>

        </>
    )
}

export default Home;