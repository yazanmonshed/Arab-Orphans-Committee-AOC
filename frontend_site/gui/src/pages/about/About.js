import React, { Component } from 'react'

import Navbarabout from '../../components/navbar_about/Navbarabout'
import {Container, Row, Col, Breadcrumb, Image, Accordion, Card, Button, Tab,ListGroup} from 'react-bootstrap'
import about_image from '../images_pages/About.png'
import MainFooter from '../../components/footer/FooterMainPage'
import './About.scss'
// import Our_major from './Our_major'
export default class About extends Component {
    render() {
        return (
            <div>
                <Navbarabout/>
                    <Breadcrumb>
                    <Container>
                     <Breadcrumb.Item className="item-one" href="#" active>
                           <span>  عن الجمعية </span>
                        </Breadcrumb.Item>
                       <Breadcrumb.Item className="item-one" href="/homepage">
                            <i className="fas fa-home"></i><span> الرئيسية </span>
                        </Breadcrumb.Item>
                        </Container>
                    </Breadcrumb>
               <Container>
                <Row>
                    <Col>
                    <h1 className="mt-5 mb-5"> عن الجمعية </h1>
                    <p>
                    تأسست جمعية لجنة اليتيم العربي في حيفا عام 1940م من قبل نفر كريم من رجالات فلسطين؛ بدافع الاحساس بالواجب الوطني تجاه الأيتام الذين خلفتهم الثورات المتعاقبة، والتي تصدت للهجمات الاستعمارية الشرسة على فلسطين وأهلها. ورأت الجمعية حين تأسيسها أن تعمل على تسليح من تسعى إلى رعايتهم بالعلم ليساهموا في النهضة العربية، حيث قامت اللجنة بتعهد عدد من الأيتام للدراسة في مدارس داخلية وخارجية وجامعات ومعاهد عليا في فلسطين وعدد من الدول العربية، بالإضافة إلى إنشاء معهداً صناعياً كامل التجهيزات لإيواء الأيتام ورعايتهم وتعليمهم في مدينة حيفا. وتم إنجاز العمل في المعهد في العام الذي حصلت فيه نكبة فلسطين عام 1948م واستولت السلطات الصهيونية عليه قبل إفتتاحه وجعلت منه معهداً صناعياً لأيتام اليهود. 
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xs={12} sm={12} md={12}>
                        <Image src={about_image} className="custom-image-about" rounded/>
                    </Col>
                    <Col lg={6} xs={12} sm={12} md={12}>
                    <p>
                    وبالرغم من تشتت شمل أعضاء الجمعية وتفرقهم في الأقطار العربية، إلا أنهم قرروا أن يواصلوا أداء الرسالة النبيلة وأعادوا تأسيس الجمعية عام 1949م وجعلوا مركزها المملكة الأردنية الهاشمية، وأقاموا مدرسة صناعية في مدينة القدس عام 1965م بمساعدة من مؤازري الجمعية ومن الحكومتين الأردنية والألمانية، وتم افتتاح المدرسة عام 1967م من قبل جلالة المغفور له الملك الحسين طيب الله ثراه. في ذات العام قامت السلطات الاستعمارية بإحتلال القدس والضفة الغربية، وبدأت بتضييق الخناق على المدرسة الصناعية وطلابها ومعلميها من خلال محاولاتها المستمرة لإغلاق المدرسة ومصادرتها، وإحاطتها بالجدار العازل، وفرض ضرائب جزافية عليها، وتصعيب عملية ممارسة الجمعية أعمالها في القدس.                    </p>
                    <p> 
                    إلى جانب إدارة المدرسة الصناعية، استمرت اللجنة في عملها المتواصل الهادف إلى تعليم وتثقيف أيتام فلسطين، وتوسعت الفئات المستهدفة عبر السنين لتشمل أيتام العرب بالإضافة إلى المتفوقين من طلبة فلسطين والطلبة العرب من خلال برنامج القروض الميسرة والمنح الجامعية.                     </p>
                    
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
                {/* <Row>
                    <Col lg={12}>
                        <video controls width="600" style={{display: 'block', margin: 'auto'}}>
                            <source src="https://web.facebook.com/ArabOrphanCommittee/videos/1973984409305258/?t=0"  type="video/ogg"></source>
                            <source src="https://web.facebook.com/ArabOrphanCommittee/videos/1973984409305258/?t=0" type="video/mp4"></source>
                        </video>
                    </Col>
                </Row> */}
               </Container>
               <MainFooter />
            </div>
        )
    }
}

