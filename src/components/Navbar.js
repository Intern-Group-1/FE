import '../style/Navbar.css'
import '../style/Dropdown.css'
import {AiOutlineDown} from "react-icons/ai"
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div id="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="home">Home</div>
        <div className="specialist dropdown">Specialist <i><AiOutlineDown /></i> 
          <div class="dropdown-content">
            <a href="#">Neurology</a>
            <a href="#">Orthopedic</a>
            <a href="#">Dentist</a>
        
        </div>  
        </div> 
        <div className="doctor">Doctor 
        </div>
        <div className="about dropdown">About <i className='icon'><AiOutlineDown /></i>
        <div class="dropdown-content">
          <a href="#">Address</a>
          <a href="#">Phone</a>
          <a href="#">Reference</a>
          <a href="#">Fanpage</a>
      </div>
        </div>
        <Link to='/login'><button className="btn-login"  >LOGIN/SIGUP </button></Link>
      </div>
    )
}

export default Navbar;