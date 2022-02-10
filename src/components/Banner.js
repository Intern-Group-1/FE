import '../style/Banner.css'
import bg from '../assets/image/background.jpg'
import { Link } from 'react-router-dom';


function Banner(){
    return(
        <div id="banner">
            <div className='background'>
            <img src={bg} alt="" />
            </div>
            <div className="banner-content">
                <p className='title-banner'>Great Smile For Healthy Lifestyle!</p>
                <p className='content-banner'>But so that you can understand that every mistake is born a joy 
                when accusing and praising pain, I will open up the whole matter, 
                and will explain the very things that I have discovered from him. 
                through the creator of truth.</p>
                <Link to='/doctor'> 
                <button className='btn-banner'> <p>Make an appointment</p> </button>
                </Link>
            </div>
        </div>
    )
}

export default Banner;