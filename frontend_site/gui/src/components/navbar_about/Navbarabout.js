import React, { Component } from 'react'
import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image} from 'react-bootstrap'
import './navbar_about.scss'
import aoc from '../images/aoc.png'
import jj from  '../images/jerusalem1.jpg'
export default class Navbarabout extends Component {
    render() {
        return (
            <div>
        <Navbar  expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                <Image src={aoc} className="brand-image" rounded />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto right">
                        <Nav.Link href="/homepage">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#link">Concat</Nav.Link>
                        <Nav.Link href="/gallery">gallery</Nav.Link>
                        <Nav.Link href="/students">Our Students</Nav.Link>  
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                    </Nav>     
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
            <div className="image-about">
                 <div className="overlay-about">
                        <h1>About Section</h1>
                 </div>
            </div>             
            </div>
        )
    }
}

