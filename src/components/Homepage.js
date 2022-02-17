import Banner from "./Banner"
import SliderSpeciality from "./SliderSpeciality";
import SliderDoctor from "./SliderDoctor";
import Navbar from "./Navbar";
import Footer from './Footer'


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