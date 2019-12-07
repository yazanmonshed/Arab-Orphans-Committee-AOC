import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
export default class Images extends Component {
  render() {
    const {images} = this.props
    return (
        
      <div> 
          <Container>
            <Col>
                 <Image style={{width: '300px', height: '350px', marginBottom: '20px'}} src={images} thumbnail  />
            </Col> 
          </Container>
      </div>
    );
  }
}
