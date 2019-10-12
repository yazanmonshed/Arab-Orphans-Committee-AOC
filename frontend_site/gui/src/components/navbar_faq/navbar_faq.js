import React, { Component } from 'react'
import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Carousel, Image} from 'react-bootstrap'
import aoc from '../images/aoc.png'

export default class Navbar_faq extends Component {
    render() {
        return (
            <section>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="/homepage">
                       <Image src={aoc} style={{width: '200px', }} rounded />
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
        {/* Image class and overlay here */}
        <div className="image-gallery">
             <div className="overlay-gallery">

             </div> 
            </div>  
            <h1>this is FAQ Page here</h1>   
    </section>
        )
    }
}
