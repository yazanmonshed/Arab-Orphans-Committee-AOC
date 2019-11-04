import React, { Component } from 'react'
import {Image, Card, Form, Container,Row, Col,Button} from 'react-bootstrap';
import './login.scss'
import Footer from '../../components/footer/Footer'
import logo from '../images_pages/aoc.png'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (  
            <div>
                <Container>
                      <Row>
                         <Col xs={12}>
                         <Image  src={logo} className="logo-login"   alt="image  not found" />
                            <Card className="login-forms">
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center', color: '#222'}}>Arab Orphans committee </Card.Title>
                                    <Form className="custom-form-register">
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
                                    <Button variant="success" size="lg" type="submit" block style={{marginTop: '40px'}}>
                                        Sign in
                                    </Button>
                                   <span className="span-login-page">OR</span>
                                   <Link to="/register">
                                   <Button variant="link"  block>Register Now</Button>
                                   </Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
              </Container>
              <Footer />

            </div>
        )
    }
}
