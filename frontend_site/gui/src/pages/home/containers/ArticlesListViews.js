import React, { Component } from 'react';
import Articles from '../components_home/articles'
import {Container, Col, Row,Carousel} from 'react-bootstrap'
import axios from 'axios'
import BlogShow from '../../blog/component_blog/BlogShow'
export default class ArticlesList extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            // search,
            
        }

    }

    
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/blog_api',{params: {_limit: 3 }})
        .then(res => {
            
            this.setState({
                'articles': res.data
            })
            console.log(res)

        })
        // axios({
        //     method: 'get',
        //     url: 'http://127.0.0.1:8000/blog_api',
        //     params: {
        //         _limit: 2,  
        //     }
        // })

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
          <Col><h1 style={{textAlign: 'center', marginTop: '40px'}}>آخر المنشورات</h1></Col>
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
