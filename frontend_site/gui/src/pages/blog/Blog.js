import React, { Component } from 'react';
import {Container, Row, Col, Navbar, Nav, Image,Pagination} from 'react-bootstrap'
import axios from 'axios'
import Search from './component_blog/Search'
import aoc from '../images_pages/aoc.png'
import BlogList from  './containers/Bloglist'
import './blog.scss';
import FooterMainPage from '../../components/footer/FooterMainPage'
import NavbarSub from '../../components/navbar_sub_pages/NavbarSub'

export default class Blog extends Component {

  constructor(props) {
    super(props);

    const id = this.props.match.params.id
    // console.log(id)

    this.state = {  
      articles: [],
      search: "",
      id,
      
    }
   
    // console.log(this.props)
    
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
handleSubmit = (e,id) => {
    e.preventDefault() 
}

  render() {  
    return (
      <div> 
      
        <NavbarSub/>
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
