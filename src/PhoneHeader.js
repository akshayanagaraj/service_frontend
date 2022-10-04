import React from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import logo from './images/logo.png';
import { Search, Person, Bag} from 'react-bootstrap-icons';

function OffcanvasExample() {
    let expand = 'lg'
  return (
    <>
        <Row className="justify-content-center announcement-bar">Welcome To Our Store... </Row>
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          
          <Container fluid>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand style={{"paddingLeft":"80px"}} >  <img src={logo} alt={"home"} height={"70px"} width={"65px"} /> </Navbar.Brand>
            <Navbar.Brand ><span className='icon-wrapper'>
            <Search height="1.5rem" width="1.5rem"/>
        </span> <span className='icon-wrapper'>
            <Bag height="1.5rem" width="1.5rem"/>
        </span></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="https://kjhomeappliance.in">Home</Nav.Link>
                  <Nav.Link href="https://kjhomeappliance.in/collections/all">Catalog</Nav.Link>
                  <Nav.Link href="https://kjhomeappliance.in/pages/contact">Contact</Nav.Link>
                  <Nav.Link href="https://kjhomeappliance.in/pages/about-us">About Us</Nav.Link>
                  <Nav.Link href=" https://kjhomeappliance.in/service">Service</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        
        </Navbar>
        
       
   
    </>
  );
}

export default OffcanvasExample;