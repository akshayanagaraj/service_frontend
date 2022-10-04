import React, {useEffect, useState} from 'react'
import { Nav , Row, Col} from 'react-bootstrap';
import { Search, Person, Bag} from 'react-bootstrap-icons';
import logo from './images/logo.png';

export default function Header() {
  return (
    <>
    <Row className="justify-content-center announcement-bar">Welcome To Our Store... </Row>
   <Row className='header'>
    <div className="header-row" style={{'width':'1100px'}}>
    <span style={{"float":"left"}}>
        <img src={logo} alt={"home"} height={"70px"} width={"65px"}/>
        <a href="https://kjhomeappliance.in" className='link'>Home</a>  
        <a href="https://kjhomeappliance.in/collections/all" className='link'>Catalog</a>  
        <a href="https://kjhomeappliance.in/pages/contact" className='link'>Contact</a>  
        <a href="https://kjhomeappliance.in/pages/about-us" className='link'>About Us</a>  
        <a href="https://kjhomeappliance.in/service" className='link'>Service</a>  
    </span>
    <span style={{"float":"right", "paddingTop":"1rem"}}><span className='icon-wrapper'>
            <Search height="1.5rem" width="1.5rem"/>
        </span>
        <span className='icon-wrapper'> 
            <Person height="1.5rem" width="1.5rem"/>
        </span>
        <span className='icon-wrapper'>
            <Bag height="1.5rem" width="1.5rem"/>
        </span></span>
    </div>
   {/* <Col className='ml-auto'>
   <Nav defaultActiveKey="/home" className='justify-content-center header-row'>
      
      <Nav.Item >
        <Nav.Link href="https://kjhomeappliance.in">
            <img src={logo} alt={"home"} height={"60px"} width={"62px"}/>
        </Nav.Link>
      </Nav.Item>
        <Nav.Item >
        <Nav.Link href="https://kjhomeappliance.in">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="https://kjhomeappliance.in/collections/all">Catalog</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="https://kjhomeappliance.in/pages/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="https://kjhomeappliance.in/pages/about-us">About Us</Nav.Link>
      </Nav.Item>

      
    </Nav></Col>
    <Col className="mr-auto icons">
        <span className='icon-wrapper'>
            <Search height="1.5rem" width="1.5rem"/>
        </span>
        <span className='icon-wrapper'> 
            <Person height="1.5rem" width="1.5rem"/>
        </span>
        <span className='icon-wrapper'>
            <Bag height="1.5rem" width="1.5rem"/>
        </span>
    </Col> */}

   </Row>
    </>
    
  )
}
