import React, { Component } from 'react';
import Articles from '../components_home/articles'
import {Container, Col, Row, CardDeck} from 'react-bootstrap'
import axios from 'axios'
export default class ArticlesList extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            // search,
            
        }

    }

    
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/blog_api`)
        .then(res => {
            
            this.setState({
                'articles': res.data
            })

        })

    }
    
    // getItems = () => {
    //     fetch('http://127.0.0.1:8000/blog_api')  
    //     .then(results => results.json())
    //     .then(results => this.setState({articles: results}))
    // }
 
  render() {
    return (
      <div>
          <Container>
              <Row>
              {this.state.articles.map((item, index) =>  <Articles info={item} key={index} />)} 
              {/* {this.state.articles.map(function(info, index) {
                  return <Articles info={info} key={index}/>
              })} */}
              
              </Row>
          </Container>
        </div>
    );
  }
}
