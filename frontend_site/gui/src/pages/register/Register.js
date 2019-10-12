import React, { Component } from 'react'
import Register_navbar from '../../components/register_navbar/Register_navbar'
import {Container, Row, Col, Form, Button} from  'react-bootstrap'
import './register.scss'
export default class Register extends Component {
    render() {
        return (
            <div>
                <Register_navbar/>
                
                        <div className="custom-register-form">
                        <Container>
                            <Row>
                               <Col>
                            <h1>register now </h1>
                            <Form>
                            <Form.Group>
                                    <Form.Label>username</Form.Label>
                                    <Form.Control type="text" size='lg' placeholder="Enter your name" />
                                    <Form.Text >
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" size='lg' placeholder="Enter email" />
                                    <Form.Text>
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" size='lg' placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>confirm password</Form.Label>
                                    <Form.Control type="password" size='lg' placeholder="   Re Password" />
                                </Form.Group> 
                            <Button variant="primary" size="lg" type="submit" block>
                                Submit
                            </Button>
                            </Form>
                            </Col>
                           </Row>
                      </Container>
                        </div>
  
            </div>
        )
    }
}
