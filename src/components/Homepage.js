import Banner from "./Banner"
import Speciality from "./Speciality";
import Doctor from "./Doctors";
// import Handbook from "./Handbook";
import PreviousNextMethods from "./Testslick"

function Home(){
    return(
        <>
            <Banner />
            <Speciality />
            <PreviousNextMethods />
            <Doctor />
        </>
    )
}

export default Home;