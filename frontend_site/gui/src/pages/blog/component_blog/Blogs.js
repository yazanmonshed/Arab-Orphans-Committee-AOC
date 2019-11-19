import React, { Component } from 'react';
import {Container, Row, Col, Card,CardDeck} from 'react-bootstrap'
export default class Blogs extends Component {

  render() {
    const  {image, title, context, date} = this.props;
    console.log(this.props)
    return (
      <React.Fragment>
           
          <Col  xs={12} sm={6}  lg={4}>
             <CardDeck>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body> 
                    <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                <small className="text-muted">{date}</small>
                </Card.Footer>
            </Card>
        </CardDeck>
          </Col>
      </React.Fragment>
    );
  }
}
