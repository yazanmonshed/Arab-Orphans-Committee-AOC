import React, { Component } from 'react'
import Register_navbar from '../../components/register_navbar/Register_navbar'
import {Container, Row, Col, Form, Button, Card, Image} from  'react-bootstrap'
import './register.scss'
import logo from '../images_pages/aoc.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/auth'
 class Register extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
         
        // this.props.validateFieldsAndScroll((err, values) => {

        //     if (!err) {
        //         console.log("Reviced Values of Form :", values);

        //     }
        // })
        this.props.history.push('/dashborad')

    }

    render() {
        return (
            <section>                
                    <div className="custom-register-form">
                            <Container>
                                <Row>
                                    <Col>
                                    <Link to="/homepage"><a href="/homepage"><Image src={logo}  className="logo-register"></Image></a></Link>
                           {/* ٌRegister Form Here*/}
                            <Card className="custom-register-page">
                                    <h1 style={{textAlign: 'center'}}>سجل الان</h1>
                                <Card.Body>
                                <Form onSubmit={this.handleSubmit} style={{direction: 'rtl'}}>
                                <Form.Group>
                                        <Form.Label>الاسم الاول <i className="fas fa-user" style={{color: '#218838'}}></i></Form.Label>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                        <Form.Control  required type="text" size='lg' placeholder="الاسم الاول" />
                                        <Form.Text >
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>البريد الاكتروني <i className="fas fa-envelope" style={{color: '#218838'}}></i></Form.Label>
                                        <Form.Control required type="email" size='lg' placeholder="البريد الإلكتروني" />
                                        <Form.Text style={{color: '#F00'}}>
                                        لا نشارك بريدك الإلكتروني مع أي شخص آخر.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label> كلمة المرور <i className="fas fa-key" style={{color: '#218838'}}></i></Form.Label>
                                    <Form.Control required type="password" size='lg' placeholder=" كلمة المرور" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>تأكيد الرمز السري <i className="fas fa-check-double" style={{color: '#218838'}}></i></Form.Label>
                                    <Form.Control required type="password" size='lg' placeholder="تأكيد الرمز السري" />
                                </Form.Group> 
                            <Button variant="success" size="lg" required type="submit" block>
                                اشترك <i class="fas fa-paper-plane"></i>
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




const mapStateToProps = (state) => {

    return {
  
      isAuthenticated : state.token !== null ,

      loading : state.loading,
      error: state.error     
    }
  }

const mapDispatchToProps = (dispatch) => {

    return {
        onTryAutoSingUp: () => dispatch(actions.authCheckState()),
        onAuth :(username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))    

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Register)