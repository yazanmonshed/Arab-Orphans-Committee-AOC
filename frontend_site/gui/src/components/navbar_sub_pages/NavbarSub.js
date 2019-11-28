import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Container, Image, Nav} from 'react-bootstrap'
// import aoc from '../images_pages/aoc.png'
import aoc from '../../pages/images_pages/aoc.png'
export default class NavbarSub extends Component {
  render() {
    return (
      <div>  
        <Navbar bg="light" expand="lg"  className="custom-blog-navbar" style={{boxShadow: '2px 0px 9px'}}>
          <Container>
            <div className="custom-link-fontaewsome">
            <i style={{fontSize: '30px', margin: '10px', color:'#1da1f2'}} className="fab fa-twitter"></i>
            <i style={{fontSize: '30px', margin: '10px',color:'#3b5998'}} className="fab fa-facebook-f"></i>
            <i style={{fontSize: '30px', margin: '10px', color: '#405de6'}} className="fab fa-instagram"></i>
            <i style={{fontSize: '30px', margin: '10px', color:'#0077b5' }} className="fab fa-linkedin-in"></i>
            </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Link to="/homepage">
            <Navbar.Brand>
                <Image src={aoc} style={{ height: '70px'}} />
                </Navbar.Brand>
            </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
