import React, { Component } from 'react'
import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Carousel, Image} from 'react-bootstrap'
import aoc from '../images/aoc.png'
import {Link} from 'react-router-dom'
export default class Navbar_faq extends Component {
    render() {
        return (
            <section>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="/homepage">
                        <Link to="/homepage"><Link to="/homepage"><Image src={aoc} style={{width: '200px', }} rounded /></Link></Link>
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto right">
                        <Link to="/homepage"><Nav.Link href="/homepage">Home</Nav.Link></Link>
                        <Link to="/about"><Nav.Link href="/about">About</Nav.Link></Link>
                        <Link to="#"><Nav.Link href="#link">Blog</Nav.Link></Link>
                        <Link to="/gallery"><Nav.Link href="/gallery">gallery</Nav.Link></Link>
                        <Link to="/students"><Nav.Link href="/students">Our Students</Nav.Link></Link>
                        <Link to="/faq"><Nav.Link href="/faq">FAQ</Nav.Link></Link>
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
