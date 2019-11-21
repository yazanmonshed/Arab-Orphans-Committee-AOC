import React, { Component } from 'react';
import {Form,Button, Row, Col} from 'react-bootstrap';
import './formeachterm.scss'
export default class FormsEachTerm extends Component {
  render() {
    return (
      <div> 
        {/* <Form style={{marginTop: '200px'}}>
        <Form.Group controlId="exampleForm.ControlInput1">  
            <Form.Label><h5>كشف العلامات</h5></Form.Label>
            <Form.Control required className="custom-files-upload" type="file"  />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>الراتب</Form.Label>
            <Form.Control >
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button type="submit">send now</Button>

    </Form>           */}
    <Form style={{marginTop: '200px', marginBottom : '100px', direction: 'rtl'}}>
    <Form.Group as={Row}>
    <Form.Label column sm="2">
        <h6>كشف العلامات</h6>
        </Form.Label>
        <Col sm="10">
        <Form.Control plaintext type="file" />
        </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        <h6>الوصل المالي</h6>
    </Form.Label>
    <Col sm="10">
        <Form.Control plaintext type="file" />
    </Col>
    </Form.Group>
        
    <Form.Group as={Row}>
       <Form.Label column sm="2">
            <h6> الجدول الدراسي للفصل القادم</h6>
        </Form.Label>
        <Col sm="10">
            <Form.Control plaintext type="file" />
        </Col>
    </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        <h6> المعدل باللارقام</h6>
        </Form.Label>
         <Col sm="10">
        <Form.Control type="number" placeholder="ادخل معدلك" />
        </Col>
    </Form.Group>
    <Button type="submit" size="lg">ارسال</Button>

    </Form>
     </div>
    );
  }
}
