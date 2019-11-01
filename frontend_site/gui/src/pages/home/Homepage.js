import React, { Component } from 'react'
import './Homepage.scss'
import Carousels from '../../components/carousels/Carousels'
import Navbars from '../../components/navbar_home/Navbars' 
import MainFooter from '../../components/footer/FooterMainPage'
import ChartMajor from './components_home/Statstic'
import ChartMoney from './components_home/Statstic2'
import {Container, Row, Col, Card, Button, Carousel, CardDeck} from 'react-bootstrap'
// import MainFooter from '../../components/footer/FooterMainPage'
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Carousels/>    
                <Container>
                    <Row>
                        <Col>
                            <h5>lest post here</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <CardDeck>
                            <Card style={{marginTop: '70px'}}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                        </Col>
                        <Col>
                        <CardDeck>
                            <Card  style={{marginTop: '70px'}}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                        </Col>
                        <Col>
                        <CardDeck>
                            <Card  style={{marginTop: '70px'}}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>
                        </Col>
                    </Row>
                    <section>
                        <Row style={{marginTop: '70px'}}>
                        <h5>بلغ عدد الطلاب الذين تمت تغطية تكاليف دراستهم الجامعية في الاردن 125 طالبًا وطالبة للعام الدراسي  2018/ 2019 حيث بلغت قيمة الفروض والمنح المصروفة مبلغًا  وقدره 144857 دينار, منهم 14  طالبًا و طالبة موزعين كما يلي </h5>

                            <Col>
                            <h3 style={{textAlign: 'center',}}>توزيع الطلاب المستفيدين حسب التخصصات </h3>
                            <ChartMajor />
                            </Col>
                            
                        </Row>
                        <Row style={{marginTop: '70px'}}>
                        <Col>
                            <h3 style={{textAlign: 'center'}}>توزيع الطلاب  حسب القروض والمنح </h3>
                                <ChartMoney />
                            </Col>
                        </Row>
                    </section>
                </Container>
                <MainFooter/>
                        
            </div>
        )
    }
}


