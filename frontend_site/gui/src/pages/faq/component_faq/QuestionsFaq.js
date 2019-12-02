import React, { Component } from 'react';
import {Container,Accordion,Card,Button} from 'react-bootstrap'

export default class Questions extends Component {
  render() {
      const {questions, answers} = this.props
    return (
      <div>  
           <Container>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                           
                                <Accordion.Toggle as={Button} variant="link" eventKey="0"   style={{textDecoration: 'none', color: '#333'}}>
                                    {questions}
                                    <i className="fas fa-plus" style={{margin: '10px'}}></i>
                                </Accordion.Toggle>
                            </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body> {answers} </Card.Body>
                            </Accordion.Collapse>
                        </Card>
               </Accordion>
         </Container>
      </div>
    );
  }
}
