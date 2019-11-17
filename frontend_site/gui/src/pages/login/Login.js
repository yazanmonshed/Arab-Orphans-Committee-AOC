import React, { Component } from 'react'
import {Image, Card, Form, Container,Row, Col,Button,Spinner} from 'react-bootstrap';
import './login.scss'
import Footer from '../../components/footer/Footer'
import logo from '../images_pages/aoc.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/auth'
class Login extends Component {

    componentDidMount() {
        this.props.onTryAutoSingUp();
    }


    handleSubmit = (e) =>  {
        e.preventDefault();
       const x = ((err, values) => {
            
            if (!err) {
                console.log("Revieved all data", values);


            }
           
        })
        this.props.history.push('/dashborad')
    }

    render() {

        
        let errorMessage = null 
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            ); 
        }
        return (  
            <div>
                <Container>
                      <Row>
                         <Col xs={12}>
                             <Link to="/homepage">
                             <Image  src={logo} className="logo-login"   alt="image  not found" />
                             </Link>
                          {/* Start Form Here  */}

                                {errorMessage}

                                {

                                    this.props.loading ?

                                    <Spinner animation="border" />
                                :

                            <Card className="login-forms">
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center', color: '#222'}}>تسجبل الدخول</Card.Title>
                                   
                                    <Form onSubmit={this.handleSubmit} style={{direction: 'rtl'}} className="custom-form-register">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>البريد الاكتروني</Form.Label>
                                        <Form.Control required type="email" placeholder="البريد الإلكتروني" />
                                        <Form.Text style={{color: '#F00'}}>
                                        لا نشارك بريدك الإلكتروني مع أي شخص آخر.
                                        </Form.Text>

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>كلمة المرور </Form.Label>
                                        <Form.Control required type="password" placeholder="كلمة المرور " />
                                    </Form.Group>   
                                    <Button variant="success" size="lg" type="submit" block style={{marginTop: '40px', marginBottom: '30px'}}>
                                        تسجبل الدخول
                                    </Button>
                                   {/* <span className="span-login-page">OR</span> */}
                                   <Link to="/register">
                                   <Button variant="link" block>سجل الان</Button>
                                   </Link>
                                    </Form>
                                    {/* End Form Here */}

                                </Card.Body>
                            </Card>
                        }
                        </Col>
                    </Row>
              </Container>
              <Footer />

            </div>
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
        onAuth :(username,password) => dispatch(actions.authLogin(username, password))    

    }
}
// const wrappNormalLoginForm = Form.Createa()(Login)
 
export default connect(mapStateToProps,mapDispatchToProps)(Login )  
 