import React, { Component } from 'react';
import {Container, Row, Col, Navbar, Nav, Image,Jumbotron, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import aoc from '../../images_pages/aoc.png'

import FooterMainPage from '../../../components/footer/FooterMainPage'
export default class BlogShow extends Component {
  render() {
    return (
      <div>             
          {/* Start Navbar Here */}
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
        <Container>
          <Row>
            <Col>
            {/* <BlogList articles={this.state.articles}/> */}
            <Jumbotron style={{marginTop: '30px'}}>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>

            </Col>
          </Row>
        </Container>





        {/* End NavBar here */}
        <FooterMainPage />
     </div>
    );
  }
}
