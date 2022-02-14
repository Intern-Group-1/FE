import Banner from "./Banner"
import Speciality from "./Speciality";
import Doctor from "./Doctors";
import Handbook from "./Handbook";
import MultipleItems from "./slick";
import Navbar from "./Navbar";


function Home(){
    return(
        <>   
            <Banner />
            <Speciality />
             {/* <MultipleItems/>  */}
            {/* <Handbook /> */}
            <Doctor />
           
        </>
    )
}

export default Home;