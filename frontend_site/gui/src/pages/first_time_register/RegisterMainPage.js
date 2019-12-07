import React, { Component } from 'react';
import aoc from '../../components/images/aoc.png'
import {Image, Container, Row, Col,ButtonGroup,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class RegisterMainPage extends Component {
  render() {
    return (
      <div>
          <Container>
                <Row>
                    <Col lg={12} xs={12}>
                    <Image src={aoc} style={{ display: 'block',margin: 'auto', marginTop: '300px'}} fluid />
                    </Col>
                </Row>
                <Row>
                <Col>
                <div style={{marginTop: '70px'}}>
                <h5>طلب التقدم على قرض او منحة</h5>
                <ButtonGroup style={{display: 'block', margin: '10px'}}>
                      <Link to="/condition">
                      <Button variant="success" size="lg">
                        الأردن
                      </Button>
                      </Link>
                      <Button variant="secondary" size="lg" >
                        فلسطين    
                      </Button>
                    </ButtonGroup>
                </div>
                </Col>
              </Row>
          </Container>
      </div>
    );
  }
}
