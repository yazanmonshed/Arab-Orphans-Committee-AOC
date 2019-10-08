import React, { Component } from 'react'
import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Carousel, Image} from 'react-bootstrap'
import aoc from './images/aoc.png'
import j1  from './images/j1.jpg'
 
export default class Navbargallery extends Component {
    render() {
        return (
            <section>
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
    <Image src={j1}   style={{height: '400px', width: '100%'}}/> 
    </section>
        )
    }
}

