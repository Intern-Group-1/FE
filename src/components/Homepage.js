import Banner from "./Banner"

import Doctor from "./Doctors";
import Navbar from "./Navbar";
import Footer from './Footer'
import PreviousNextMethods from "./Testslick"

function Home(){
    return(
        <>   <Navbar/>
            <Banner />
           <PreviousNextMethods/>       
            <Doctor />
           <Footer/>
        </>
    )
}

export default Home;