import React, { Component } from 'react'

import Navbarabout from '../../components/navbar_about/Navbarabout'
import {Container, Row, Col, Breadcrumb, Image, Accordion, Card, Button, Tab,ListGroup} from 'react-bootstrap'
import about_image from '../images_pages/About.png'
import './About.scss'
// import Our_major from './Our_major'
export default class About extends Component {
    render() {
        return (
            <div>
                <Navbarabout/>
                    <Breadcrumb>
                    <Container>
                       <Breadcrumb.Item className="item-one" href="/homepage">
                            <i className="fas fa-home"></i><span> Home </span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="item-one" href="#" active>
                           <span> About </span>
                        </Breadcrumb.Item>
                        </Container>
                    </Breadcrumb>
               <Container>
                <Row>
                    <Col>
                    <h1 className="mt-5 mb-5"> About Us </h1>
                    <p>
                    The Arab Orphans Committee (AOC) was established in Haifa in 1940 by a group of prominent figures in Palestine, motivated by the sense of national duty towards the large number of children who lost their parents due to the successive revolutions that out broke to defend Palestine against the atrocious colonial campaigns.From the onset, the AOC believed in the importance of providing educational opportunities to the children it serves, so that they can play an active role in the development of the Arab society. To this end, the AOC sponsored several children to study at schools, higher institutes, and universities both either in Palestine or other Arab countries. Moreover, the Society established a well-equipped industrial institute designed to provide shelter, welfare, and education to the orphans in Haifa. The project was completed in 1948, the year of Palestine Nakba (Catastrophe). However, prior to its opening, the Zionist authorities took over the institute and used it for the Jewish orphans.    

                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xs={12} sm={12} md={12}>
                        <Image src={about_image} className="custom-image-about" rounded/>
                    </Col>
                    <Col lg={6} xs={12} sm={12} md={12}>
                    <p>
                    Although the AOC members were forced to leave Palestine to different Arab countries, they were determined to fulfill their noble mission and re-established the society in 1949 in Jordan. They also established an industrial school in Jerusalem in 1965 thanks to the contributions of the Society supporters, Government of Jordan, and Government of Germany. The school was opened by late King Hussein in 1967.  
                    </p>
                    <p> 
                    Despite the numerous obstacles created by the Israeli occupation in Palestine in general and Jerusalem in particular, the industrial school managed to keep providing its services. Nowadays, the school is still facing different forms of hardships such as making access to the school by the students and teachers almost impossible. For example, the occupation authorities built an additional wall surrounding the industrial estate in which the school is located. As a result, all roads to the schools were blocked, except for one entrance controlled by the Israeli authorities.Along with running the industrial school, the AOC continued its efforts to educate the orphans in Palestine and expanded over the time the target groups to include outperforming Palestinian and Arab students through soft loan and scholarship programs
                    </p>
                    
                    </Col>
                </Row>
                <Row>
                    <Col col={8}>
                    <div className="section_our_major">
                        <h1>الرسالة المؤسسية </h1>
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Button} style={{background: '#38ef7d'}} eventKey="0">
                                   <h1> الرؤية </h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    <q> نسعى في جمعية لجنة اليتيم العربي إلى تمكين الشباب المحتاجين من خلال تسليحهم بفرص متساوية في التعليم.</q>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Button} style={{background: '#38ef7d'}} eventKey="1">
                                  <h1>  الرسالة</h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <q> تمكين الشباب المحتاجين في الأردن وفلسطين للحصول على مقومات الحياة المعيشية الكريمة لهم ولعائلاتهم من خلال توفير التعليم وفقاً للمعايير العالمية إلى جانب توفير قروض ومنح جامعية  بما يساهم في تنميةالمجتمعات.</q>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Button} style={{background: '#38ef7d'}} eventKey="2">
                                <h1> الفئات المستفيدة</h1>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    <q> الفئة المستفيدة بشكل عام هم الطلبة المحتاجين الحاصلين على شهادة  تؤهلهم الدراسة الجامعية ولديهم قبول جامعي أو يدرسون في وقت التقديم في إحدى الجامعات وتنطبق عليهم شروط الجمعية، إلى جانب طلاب المنشأة في القدس. </q>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                        </Accordion>
                        </div>
                        
                    </Col>
                   
                </Row>
               </Container>
            </div>
        )
    }
}

