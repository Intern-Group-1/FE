import Banner from "./Banner"
import SliderSpeciality from "./SliderSpeciality";
import SliderDoctor from "./SliderDoctor";
import Navbar from "./Navbar";
import Footer from './Footer'
 import SimpleSlider from './Testslick'


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