import React, { Component } from 'react'
import Register_navbar from '../../components/register_navbar/Register_navbar'
import {Container, Row, Col, Form, Button, Card, Image} from  'react-bootstrap'
import './register.scss'
import logo from '../images_pages/aoc.png'
import {Link} from 'react-router-dom'
export default class Register extends Component {
    render() {
        return (
            <section>                
                    <div className="custom-register-form">
                            <Container>
                                <Row>
                                    <Col>
                                    <a href="/homepage"><Image src={logo}  className="logo-register"></Image></a>
                                    <Card className="custom-register-page">
                                        <h1 style={{textAlign: 'center'}}>Register now</h1>
                                    <Card.Body>
                                <Form>
                                <Form.Group>
                                        <Form.Label>username <i className="fas fa-user" style={{color: '#218838'}}></i></Form.Label>
                                        <Form.Control type="text" size='lg' placeholder="Enter your name" />
                                        <Form.Text >
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address <i className="fas fa-envelope" style={{color: '#218838'}}></i></Form.Label>
                                        <Form.Control type="email" size='lg' placeholder="Enter your email" />
                                        <Form.Text>
                                      We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password <i className="fas fa-key" style={{color: '#218838'}}></i></Form.Label>
                                    <Form.Control type="password" size='lg' placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>confirm password <i className="fas fa-check-double" style={{color: '#218838'}}></i></Form.Label>
                                    <Form.Control type="password" size='lg' placeholder="Re Password" />
                                </Form.Group> 
                            <Button variant="success" size="lg" type="submit" block>
                                Register <i class="fas fa-paper-plane"></i>
                            </Button>
                            </Form>
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                    </div>
            </section>
        )
    }
}
