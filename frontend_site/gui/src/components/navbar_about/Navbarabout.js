import React, { Component } from 'react'
import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image} from 'react-bootstrap'
import './navbar_about.scss'
import aoc from '../images/aoc.png'
import jj from  '../images/jerusalem1.jpg'
import {Link} from 'react-router-dom'
export default class Navbarabout extends Component {
    render() {
        return (
            <div>
        <Navbar  expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto right">
                       <Link to="/homepage"><Nav.Link href="/homepage">الرئيسية</Nav.Link></Link>
                        <Link to="/about"><Nav.Link href="/about">عن الجمعية</Nav.Link></Link>
                        <Link to="#"><Nav.Link href="#link">المدونة</Nav.Link></Link>
                        <Link to="/gallery"><Nav.Link href="/gallery">معرض الصور</Nav.Link></Link>
                        <Link to="/students"><Nav.Link href="/students">طلابنا</Nav.Link></Link>
                        <Link to="/faq"><Nav.Link href="/faq">الاسئلة الاكثر تكرارا</Nav.Link></Link> 
                    </Nav>   
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">
                <Image src={aoc} className="brand-image" rounded />
                </Navbar.Brand>  
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

