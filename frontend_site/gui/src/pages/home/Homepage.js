import React, { Component } from 'react'
import './Homepage.scss'
import Carousels from '../../components/carousels/Carousels'
import Navbars from '../../components/navbar_home/Navbars' 
import {Container, Row, Col, Card, Button, Carousel, CardDeck} from 'react-bootstrap'
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Carousels/>    
                <Container>
                    <Row>
                        <Col>
                        <CardDeck>
                            <Card style={{marginTop: '70px'}}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                        </Col>
                        <Col>
                        <CardDeck>
                            <Card  style={{marginTop: '70px'}}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                        </Col>
                        <Col>
                        <CardDeck>
                            <Card  style={{marginTop: '70px'}}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                        </Col>
                    </Row>
                </Container>
                        
            </div>
        )
    }
}


