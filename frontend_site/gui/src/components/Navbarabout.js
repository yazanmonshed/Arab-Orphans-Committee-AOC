import React, { Component } from 'react'
import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image} from 'react-bootstrap'
import aoc from './images/aoc.png'
import jj from  './images/jerusalem.jpg'
export default class Navbarabout extends Component {
    render() {
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
     <Image src={jj}  alt="image not found" style={{width: '100%', height:'400px'}}/>               
            </div>
        )
    }
}

