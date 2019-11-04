 
import React from 'react'

import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image,ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap'
// import {Link} from 'react-router-dom' problem here !
import aoc from '../images/aoc.png'
import {Link} from 'react-router-dom'
export default function Navbars() {
    
    
    return (
        <div>
        {/* <Navbar style={{float: 'right'}}>
         
        </Navbar> */}
        <Navbar  expand="lg" collapseOnSelect expand="lg">
        <Container>   

        <Navbar.Brand  href="/homepage">
            <Link to="/homepage"><Image src={aoc} style={{width: '200px', }} rounded /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{color: '#38ef7d'}}>
              <Link style={{textDecoration: 'none'}} to="/homepage"><Nav.Link style={{fontWeight: 'bold',fontSize: '1.2rem'}}>Home</Nav.Link></Link>
           <Link to="/about"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/about">About</Nav.Link></Link> 
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="#link">Blog</Nav.Link>
            <Link to="/gallery"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/gallery">gallery</Nav.Link></Link>
            <Link to="/students"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/students">Our Students</Nav.Link></Link>
            <Link to="/faq"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/faq">FAQ</Nav.Link></Link>
        </Nav>    
        <ButtonToolbar>
            <Link to="/login"><Button  className="mr-3" style={{ fontWeight: 'bold', color:'#777'}} variant="light" size="lg">Login</Button></Link>
            <Link to="register"><Button  style={{ fontWeight: 'bold'}} variant="outline-success" size="lg" >Register</Button></Link>
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
