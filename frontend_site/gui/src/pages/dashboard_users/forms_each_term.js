import React, { Component } from 'react';
import {Form,Button, Row, Col} from 'react-bootstrap';
import './formeachterm.scss'
import axios from 'axios'
export default class FormsEachTerm extends Component {
  
  handleFormSubmit = (event, requestType, id) => {
      event.preventDefault();
      const field1 = event.target.elements.field1.value
      const field2 = event.target.elements.field2.value
      const field3 = event.target.elements.field3.value
      const field4 = event.target.elements.field4.value
      console.log(field4, field1)


      switch(requestType) {

        case 'post': 

       return axios.post('http://127.0.0.1:8000/form_term_api/',  {
          field1 :field1,
          field2 : field2,   
          field3 : field3,
          field4 : field4,

        })
        .then(res => console.log(res.data))
        .catch(error => console.error(error ))
      
        case 'put':

        return  axios.put(`http://127.0.0.1:8000/form_term_api/${id}/`,  {

              field1 :field1,
              field2 : field2,
              field3 : field3,
              field4 : field4,
    
            })
            .then(res => console.log(res.data))
            .catch(error => console.error(error))


      }
  

  }


  render() {
    return (
      
      <div > 
      <Form  onSubmit={(event)=>this.handleFormSubmit(event,
        this.props.requestType, this.props.id

      )} style={{marginTop: '200px', marginBottom : '100px', direction: 'rtl'}}>
      <Form.Group as={Row}>
      <Form.Label column sm="2">
          <h6>كشف العلامات</h6>
          </Form.Label>
          <Col sm="10">
          <Form.Control name="field1" plaintext type="file" />
          </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          <h6>الوصل المالي</h6>
      </Form.Label>
      <Col sm="10">
          <Form.Control name="field2" plaintext type="file" />
      </Col>
      </Form.Group>
          
      <Form.Group as={Row}>
        <Form.Label column sm="2">
              <h6> الجدول الدراسي للفصل القادم</h6> 
          </Form.Label>
          <Col sm="10">
            <Form.Control name="field3" plaintext type="file" />
        </Col>
    </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        <h6> المعدل باللارقام</h6>
        </Form.Label>
         <Col sm="10">
        <Form.Control name="field4" type="number" placeholder="ادخل معدلك" />
        </Col>
    </Form.Group>
    <Button type="submit" size="lg">ارسال</Button>

    </Form>
     </div>
    );
  }
}
