import React, { Component } from 'react';
import './students.scss'
import {Container, Col, Row,Button} from 'react-bootstrap'
export default class StudentsPage extends Component {
  render() {
    return (
      <div>
           <Container>
                <Row>
                    <Col>
                        <h3>this is some here wrtten</h3>
                        <Button variant="primary">click me here now</Button>
                    </Col>
                </Row>
           </Container>
        </div>
    );
  }
}
