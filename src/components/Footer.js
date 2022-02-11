import '../style/Footer.css'
import logo from '../assets/image/logo.png'
import {GrLocation} from 'react-icons/gr'
import {Box} from '@chakra-ui/react'
import {AiFillGoogleSquare, AiOutlinePhone , AiOutlineCheck, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

function Footer(){
    return (
        <div id="footer">
           <div className='container-footer'>
           <div className="info">
                <div className='img-logo'>
                    <img src={logo} alt="" /> 
                </div>
                <div className='name'>
                    DoctorCare Technology Joint Stock Company
                </div>
                <div className='address'>
                <GrLocation ></GrLocation> 30 Le Loi street, Hue city
                </div>
                <div className='phone'>
                <AiOutlinePhone />   0758422032
                </div>
                <div>
                <AiOutlineCheck />DKKD number: 0106790291. KHDT Ha Noi Date Range 16/03/2015
                </div>
            </div>

            <div className="more-info">
                <div><a href="">Contact for cooperation</a></div>
                <div><a href="">Frequently asked questions</a></div>
                <div><a href="">Terms of use</a></div>
                <div><a href="">Privacy Policy</a></div>
                <div><a href="">Operational Regulations</a></div>
            </div>
            
            <div className='social'>
                <p>Social</p>
                <hr/>
                <Box className='icon-social' d='flex' >
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillTwitterSquare />
                <AiFillGoogleSquare />
                </Box>
                
            </div>
           </div>
        </div>
    )
}

export default Footer;