import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
export default class Images extends Component {
  render() {
    const {images} = this.props
    return (
        
      <div> 
          <Container>
            <Col>
            <div lg={4} xs={12} style={{width: '300px', height: '300px', marginBottom: '40px'}}>
                 <Image style={{ width: '100%', height: '100%'}} src={images} thumbnail  />
            </div>
            </Col> 
          </Container>
      </div>
    );
  }
}
