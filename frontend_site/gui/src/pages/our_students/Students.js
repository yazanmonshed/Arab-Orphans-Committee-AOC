import React, { Component } from 'react'
import Navbar_students from '../../components/our_students/Navbar_students'
import './students.scss'
import MainFooter from '../../components/footer/FooterMainPage'
import {Container, Row , Col, Breadcrumb, Figure} from 'react-bootstrap'
import person from '../images_pages/img-2.jpg'

export default class Students extends Component {
    render() {
        return (
            <div>
                <Navbar_students/>
                <Breadcrumb>
                    <Container>
                       <Breadcrumb.Item className="item-our-students" href="/homepage">
                            <span>  الرئيسية  </span>
                            <i className="fas fa-home"></i>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="item-our-students" href="#" active>
                           <span> طلابنا </span>
                        </Breadcrumb.Item>
                        </Container>
                    </Breadcrumb>
                
                 <Container>
                     <Row>
                         <Col>
                         <h1 style={{textAlign: 'center', marginTop: '30px', marginBottom: '50px'}}>قصص نجاح طلبة لجنة اليتيم العربي</h1></Col>
                     </Row>
                     <Row>
                         <Col lg={8}>
                         <Figure >
                         <i style={{ display: 'block' ,textAlign: 'center', fontSize: '200px'}} className="fas fa-user-alt"></i>
                         <i className="fas fa-quote-left" style={{float: 'left'}}></i>
                            <Figure.Caption style={{lineHeight: '1.8', marginTop: '30px'}}>
                             محمود أحد الطلاب الذين استفادوا من خدمات جمعية لجنة اليتيم العربي، حاصل على شهادة الحاسوب من جامعة مؤتة ويعمل الآن كموظف في إحدى الدوائر الحكومية.
يعبر محمود عن امتنانه للجمعية فيقول:
"كان للجمعية فضل كبير بإكمال دراستي من حيث التكفل بالأقساط الجامعية، فكانت مخرجاً لكثير من الطلاب كجهة داعمة متميزة بالآلية المتبعة في تقديم القروض الحسنة وطريقة السداد الميسرة، أشكر كل من دعم الطلاب وأشجعهم على الاستمرار لأن العلم أساسي لتقدم الشباب وزيادة فرصهم بالعمل، ورسالتي للطلاب هي أن يهتموا بالتعليم ويكملوا تعليمهم فالشهادة التعليمية سلاح في حياة كل فرد منا".
                             </Figure.Caption><i class="fas fa-quote-right"></i>
                         </Figure>
                         </Col>
                     </Row>
                 </Container>
                 <MainFooter />
            </div>
        )
    }
}

