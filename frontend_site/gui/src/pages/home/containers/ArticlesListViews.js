import React, { Component } from 'react';
import Articles from '../components_home/articles'
import {Container, Col, Row, CardDeck} from 'react-bootstrap'
import axios from 'axios'
export default class ArticlesList extends Component {

    state = {
        articles: [],
        // search,
        
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/blog_api/`)
        .then(res => {
            
            this.setState({
                articles: res.data
            })
            // console.log(res.data)

        })
    }
 
 
  render() {
    return (
      <div>
          <Container>
              <Row>
              {this.state.articles.map(item => <Articles info={item} key={Math.random() * 8} />)} 
              </Row>
          </Container>
        </div>
    );
  }
}
