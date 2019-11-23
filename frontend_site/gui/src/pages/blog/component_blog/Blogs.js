import React, { Component } from 'react';
import {Container, Row, Col, Card,CardDeck} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class Blogs extends Component {

  render() {
    const  {id, image, title, context, date} = this.props;
    // console.log(this.props)
    return (
      <React.Fragment>
          <Col  xs={12} sm={6}  lg={4}>
            <Link to={`blog${id}`} style={{textDecoration: 'none'}}>
             <CardDeck>
                <Card>
                    <Card.Img  variant="top" src={image} target="_blank" />
                    <Card.Body> 
                    <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                <small className="text-muted">{date}</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        </Link>
          </Col>
      </React.Fragment>
    );
  }
}
