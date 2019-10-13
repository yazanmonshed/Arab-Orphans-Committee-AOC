import React, { Component } from 'react'
import {Image, Card, Form, Container,Row, Col,Button} from 'react-bootstrap';
import './login.scss'
import logo from '../images_pages/aoc.png'
export default class Login extends Component {
    render() {
        return (  
            <div>
                <Container>
                      <Row>
                         <Col xs={12}>
                         <Image  src={logo} className="logo-login" alt="image  not found" />
                            <Card className="login-forms">
                                <Card.Body>
                                    <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="success" size="lg" type="submit">
                                        Sign in
                                    </Button>
                                     <Button variant="link" href="/register">Register Now</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
