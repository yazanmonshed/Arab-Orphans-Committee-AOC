import React, {Component} from 'react';
import { Col, Card,CardDeck} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../Homepage.scss'
import BlogShow from '../../blog/component_blog/BlogShow'
class  Articles  extends  Component  {

    render() {
        const {image, title, context, date} = this.props.info
        return (
            <React.Fragment>
            <Col xs={12} sm={6}  lg={4}> 
            <Link to='/BlogShow' style={{textDecoration: 'none'}}>
                <CardDeck>
                <Card className="custom-articles">
                    <Card.Img variant="top" src={image} />
                    <Card.Body> 
                    <Card.Title style={{textDecoration: 'none', color: '#333'}}>{title}</Card.Title>
                    <Card.Text>
                        {/* {context} */}
                    </Card.Text>    
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><i className="far fa-calendar" style={{margin: '10px'}}></i>{date}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Link>
        </Col>
</React.Fragment>
        );
    }
}
export default Articles