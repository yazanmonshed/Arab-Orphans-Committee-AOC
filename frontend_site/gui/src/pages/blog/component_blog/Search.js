import React, { Component } from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap' 
export default class Search extends Component {
  render() {
      const { handleSubmit , handelChange , search } = this.props;
    return (
      <section>
          <Container>
            <Row>
                <Col>
                <InputGroup className="mb-3 mt-4">
                    <FormControl
                        placeholder="search blog AOC"
                        // aria-label="Recipient's username"
                        // aria-describedby="basic-addon2"
                       size="lg" value={search } onChange={handelChange} name="search"/>
                    <InputGroup.Append>
                        <Button onClick={handleSubmit} variant="outline-success"  type="submit" size="lg"><i className="fas fa-search"></i></Button>
                        </InputGroup.Append>
                </InputGroup>
                </Col>
            </Row>
            {search}
          </Container>
    </section>
    );  
  }
}
