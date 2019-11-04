import React, { Component } from 'react';
import Articles from '../components_home/articles'
import {Container, Col, Row} from 'react-bootstrap'
import axios from 'axios'
export default class ArticlesList extends Component {

    state = {
        articles: [],
        
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
              {this.state.articles.map(item => <Articles info={item} key={Math.random() * 8}/>)}              
          </Container>
        </div>
    );
  }
}
