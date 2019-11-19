import React, { Component } from 'react';
import axios from 'axios'
import Blogs from '../component_blog/Blogs'
import {Row, Col ,Container} from 'react-bootstrap'

export default class BlogList extends Component {


 componentDidMount() {
    axios.get('http://127.0.0.1:8000/blog_api/media/')
    .then(res => {
        
        this.setState({
            articles: res.data 
        })
    })
}

  render() {
    const {articles} = this.props;
    return (
      <div> 
        <Container>
            <Row>
                <Col>
                <h1 style={{textAlign: 'center'}}>آخر المنشورات</h1>
                </Col>
            </Row>
        <Row>
           {articles.map(res => <Blogs key={res.id} title={res.title} image={res.image} context={res.context} /> )}
        </Row>
        </Container>
     </div>
    );
  }
}
