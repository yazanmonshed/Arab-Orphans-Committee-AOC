import React, { Component } from 'react';
import axios from 'axios'
import Blogs from '../component_blog/Blogs'
import {Row, Col ,Container} from 'react-bootstrap'
import BlogShow from '../component_blog/BlogShow'
export default class BlogList extends Component {

  state = {
    articles: [],

  }


 componentDidMount() {
    axios.get('http://127.0.0.1:8000/blog_api/')
    .then(res => {
        
        this.setState({
            articles: res.data 
        })
        // console.log(this.state.articles)
    })
}

  render() {
    const {articles} = this.props 
    return (
      <div> 
        <Container> 
            <Row>
                <Col>
                <h1 style={{textAlign: 'center'}}>آخر المنشورات</h1>
                </Col>
            </Row>
        <Row>
           {articles.map(res => <Blogs key={res.id} title={res.title} date={res.date} image={res.image} context={res.context} /> )}

        </Row>

        </Container>
     </div>
    );
  }
}
