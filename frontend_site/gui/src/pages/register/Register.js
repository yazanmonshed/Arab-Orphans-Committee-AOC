import React, { Component } from 'react'
import Register_navbar from '../../components/register_navbar/Register_navbar'
import {Container, Row, Col, Form, Button} from  'react-bootstrap'
import './register.scss'
export default class Register extends Component {
    render() {
        return (
            <section>
                <Register_navbar/>
                
                        <div className="custom-register-form">
                        <Container>
                            <Row>
                               <Col>
                            <h1>register now </h1>
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
                                Submit <i class="fas fa-paper-plane"></i>
                            </Button>
                            </Form>
                            </Col>
                           </Row>
                      </Container>
                        </div>
  
            </section>
        )
    }
}
