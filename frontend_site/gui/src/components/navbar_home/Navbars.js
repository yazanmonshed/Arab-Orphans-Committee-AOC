 
import React from 'react'

import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image,ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap'
// import {Link} from 'react-router-dom' problem here !
import aoc from '../images/aoc.png'
export default function Navbars() {
    
    
    return (
        <div>
        {/* <Navbar style={{float: 'right'}}>
         
        </Navbar> */}
        <Navbar  expand="lg" collapseOnSelect expand="lg">
        <Container>   

        <Navbar.Brand  href="/homepage">
         <Image src={aoc} style={{width: '200px', }} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{color: '#38ef7d'}}>
            <Nav.Link style={{fontWeight: 'bold',fontSize: '1.2rem'}} href="/homepage">Home</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/about">About</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="#link">Blog</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/gallery">gallery</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/students">Our Students</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/faq">FAQ</Nav.Link>
        </Nav>    
        <ButtonToolbar>
                <Button  className="mr-3" style={{ fontWeight: 'bold', color:'#777'}} variant="light" size="lg" href="/login" >Login</Button>
                <Button  style={{ fontWeight: 'bold'}} variant="outline-success" size="lg" href="/register">Register</Button>
            </ButtonToolbar>
            {/* <ButtonToolbar>
            <Button  style={{ fontWeight: 'bold'}} variant="light" size="lg" >Login</Button>
            <Button style={{ fontWeight: 'bold'}} variant="outline-success">Register</Button>


            </ButtonToolbar> */}
       </Navbar.Collapse>
      </Container>
      <ButtonGroup >
        <DropdownButton as={ButtonGroup} variant="light" title="Language" size="lg">
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Arabic</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>
    </Navbar>
        </div>
    )
}
