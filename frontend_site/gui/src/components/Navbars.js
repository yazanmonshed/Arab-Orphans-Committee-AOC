 
import React from 'react'

import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image} from 'react-bootstrap'
// import {Link} from 'react-router-dom' problem here !
import aoc from './images/aoc.png'

export default function Navbars() {
    return (
        <div>
        <Navbar  expand="lg">
        <Container>   

        <Navbar.Brand href="#home">
         <Image src={aoc} style={{width: '200px', }} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto right">
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#link">Concat</Nav.Link>
            <Nav.Link href="/gallery">gallery</Nav.Link>
        </Nav>     
        <ButtonGroup>
                <Button  variant="light" size="lg" >Login</Button>
                <Button variant="light" size="lg">Register</Button>
            </ButtonGroup>
       </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
