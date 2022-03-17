import React from "react";
import '../style/about.css'
import dt from '../assets/image/dtavt.png'
import { Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate = useNavigate()
  function backtohome(){
    
    navigate('/home')
  }
  return (
    <div>
       
        <div className="about-section">
        <Button as='a' bgColor={'#b8cfff'} onClick={backtohome}
        _hover={{
            bgColor:'#b8cfff'
        }}
        style={{
            textDecoration:'none',
           
        }}>Back To Home Page</Button>
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  
  <div className="row">
    <div className="column">
      <div className="card">
        <img  src={dt} alt="Jamison"/>
        <div className="container">
          <h2>Phan Van Anh "Jamison" Quoc</h2>
          <p className="title">BE developer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div className="column">
      <div className="card">
        <img src={dt} alt="Mike"/>
        <div className="container">
        <h2>Ho Quang "Otis" Dung</h2>
          <p className="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    
    <div class="column">
      <div class="card">
        <img src={dt} alt="John" />
        <div class="container">
          <h2>Tran Ngoc "Levi" Nam</h2>
          <p class="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <img src={dt} alt="John" />
        <div class="container">
          <h2>Truong Dang Ngoc "Ryder" Phuc</h2>
          <p class="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About