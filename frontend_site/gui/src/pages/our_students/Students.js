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
                            <i className="fas fa-home"></i><span> Home </span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="item-our-students" href="#" active>
                           <span> Our Students </span>
                        </Breadcrumb.Item>
                        </Container>
                    </Breadcrumb>
                
                 <Container>
                     <Row>
                         <Col>
                         <h1 style={{textAlign: 'center', marginTop: '30px'}}>قصص نجاح طلبة لجنة اليتيم العربي</h1>
                         <Figure >
                             <Figure.Image src={person} style={{display: 'block', margin: 'auto ', marginTop: '60px'}} width={300} height={300} roundedCircle/>
                            <Figure.Caption>
                          

                             محمود أحد الطلاب الذين استفادوا من خدمات جمعية لجنة اليتيم العربي، حاصل على شهادة الحاسوب من جامعة مؤتة ويعمل الآن كموظف في إحدى الدوائر الحكومية.
يعبر محمود عن امتنانه للجمعية فيقول:
"كان للجمعية فضل كبير بإكمال دراستي من حيث التكفل بالأقساط الجامعية، فكانت مخرجاً لكثير من الطلاب كجهة داعمة متميزة بالآلية المتبعة في تقديم القروض الحسنة وطريقة السداد الميسرة، أشكر كل من دعم الطلاب وأشجعهم على الاستمرار لأن العلم أساسي لتقدم الشباب وزيادة فرصهم بالعمل، ورسالتي للطلاب هي أن يهتموا بالتعليم ويكملوا تعليمهم فالشهادة التعليمية سلاح في حياة كل فرد منا".
                             </Figure.Caption>
                         </Figure>
                         <Figure>
                         <Figure.Image src={person} style={{display: 'block', margin: 'auto ', marginTop: '60px'}} width={300} height={300} roundedCircle/>

                            <Figure.Caption>
                          

                             محمود أحد الطلاب الذين استفادوا من خدمات جمعية لجنة اليتيم العربي، حاصل على شهادة الحاسوب من جامعة مؤتة ويعمل الآن كموظف في إحدى الدوائر الحكومية.
يعبر محمود عن امتنانه للجمعية فيقول:
"كان للجمعية فضل كبير بإكمال دراستي من حيث التكفل بالأقساط الجامعية، فكانت مخرجاً لكثير من الطلاب كجهة داعمة متميزة بالآلية المتبعة في تقديم القروض الحسنة وطريقة السداد الميسرة، أشكر كل من دعم الطلاب وأشجعهم على الاستمرار لأن العلم أساسي لتقدم الشباب وزيادة فرصهم بالعمل، ورسالتي للطلاب هي أن يهتموا بالتعليم ويكملوا تعليمهم فالشهادة التعليمية سلاح في حياة كل فرد منا".
                             </Figure.Caption>
                         </Figure>
                         <Figure>
                         <Figure.Image src={person} style={{display: 'block', margin: 'auto ', marginTop: '60px'}} width={300} height={300} roundedCircle/>

                            <Figure.Caption>
                          

                             محمود أحد الطلاب الذين استفادوا من خدمات جمعية لجنة اليتيم العربي، حاصل على شهادة الحاسوب من جامعة مؤتة ويعمل الآن كموظف في إحدى الدوائر الحكومية.
يعبر محمود عن امتنانه للجمعية فيقول:
"كان للجمعية فضل كبير بإكمال دراستي من حيث التكفل بالأقساط الجامعية، فكانت مخرجاً لكثير من الطلاب كجهة داعمة متميزة بالآلية المتبعة في تقديم القروض الحسنة وطريقة السداد الميسرة، أشكر كل من دعم الطلاب وأشجعهم على الاستمرار لأن العلم أساسي لتقدم الشباب وزيادة فرصهم بالعمل، ورسالتي للطلاب هي أن يهتموا بالتعليم ويكملوا تعليمهم فالشهادة التعليمية سلاح في حياة كل فرد منا".
                             </Figure.Caption>
                         </Figure>

                         </Col>
                     </Row>
                 </Container>
                 <MainFooter />
            </div>
        )
    }
}

