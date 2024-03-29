import React, { Component } from 'react';
import {Navbar,Form,Button,Col,Row,Container} from 'react-bootstrap'
import NavbarSub from '../../components/navbar_sub_pages/NavbarSub'
import  QrCodePalstine from './component_first_time_register/qrCodePalstine' 
import QrCodeJordan from './component_first_time_register/QrCodeJordan' 
import Footer from '../../components/footer/Footer'
export default class FirstTimeRegister extends Component {
  render() {
    return (
      <div> 
          <NavbarSub/>
          <Form style={{marginTop: '70px'}}>
            <Container>
            <Row>
            <Col md={12} sm={12} xs={12}>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
                <option>Choose...</option>
                <option>...</option>
            </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Form.Row>
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Col>
        </Row>
        </Container>
     </Form>   
     <Container>
        <Row style={{marginTop: '60px', marginRight: '40px'}}>
            <Col lg={6} md={12} sm={12} xs={12}>
                <h5>نموج الحصول على القرض او المنحة للطلبة في فلسطين</h5>
                <QrCodePalstine/>
            </Col>
            <Col  lg={6} md={12} sm={12} xs={12}>
            <h5>نموج الحصول على القرض او المنحة في الاردن</h5>

            <QrCodeJordan/>
            </Col>
        </Row>
    </Container>     
    <Footer/>  
     </div>
    );
  }
}
