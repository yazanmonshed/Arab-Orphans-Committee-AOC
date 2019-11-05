import React, { Component } from 'react';
import {Container, Row, Col, Navbar, Nav, Image} from 'react-bootstrap'
import BlogList from  './containers/Bloglist'
import axios from 'axios'
import Search from './component_blog/Search'
import aoc from '../images_pages/aoc.png'
import {Link} from 'react-router-dom'
import './blog.scss';
import FooterMainPage from '../../components/footer/FooterMainPage'
export default class Blog extends Component {


  state = {
    articles: [],
    search: "",
    
}



componentDidMount() {
     axios.get('http://127.0.0.1:8000/blog_api/')
    .then(res => {
        
        this.setState({
            articles: res.data
        })
        // console.log(res.data)

    })
}


handelChange = (e) => {

    this.setState({
        search: e.target.value
    })

    console.log(this.state.search)

}
handleSubmit = (e) => {
    e.preventDefault() 
}

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
        <Container>
          <Row>
            <Col>
            <Search handleSubmit={this.handleSubmit} handelChange={this.handelChange} search={this.state.search}/>
            <BlogList articles={this.state.articles}/>
            </Col>
          </Row>
        </Container>
        <FooterMainPage />
      </div>
    );
  }
}


