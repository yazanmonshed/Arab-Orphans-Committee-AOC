import React, { Component } from 'react';
import {Container, Row, Col,ListGroup, Button} from 'react-bootstrap'
import NavbarSub from '../../components/navbar_sub_pages/NavbarSub'
import {Link} from 'react-router-dom'
export default class ConditionPage extends Component {
  render() {
    return (
      <div > 
         <NavbarSub />
          <Container style={{direction: 'rtl'}}>
              <Row>
                  <Col>
                   <h1 style={{marginTop: '80px', marginBottom: '60px'}}>شروط التقديم للقرض</h1>
                   <h2>طلبة الثانوية العامة – قبول جامعات حديث</h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item action variant="light">أن لا يقل معدل الطالب في شهادة الثانوية العامة عن 80% إلا في الحالات التي تنطبق عليها شروط الاستثناءات (على أن لا يقل عن 75% في كافة الأحوال). </ListGroup.Item>
                        <ListGroup.Item action variant="light">أن يكون الطالب حاصل على مقعد جامعي سواء كان في جامعة حكومية أو خاصة. </ListGroup.Item>
                        <ListGroup.Item action variant="light">أن لا يكون الطالب قادراً على تغطية نفقات الدراسة في الجامعة.</ListGroup.Item>
                        <ListGroup.Item action variant="light">أن لا يكون حاصلاً على منحة أو قرض من جهة أخرى. </ListGroup.Item>
                 </ListGroup>
                  </Col>
              </Row>
              <Row>
                  <Col>
                   <h2 style={{marginTop: '80px'}}>الطلبة الملتحقين في الجامعات </h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item action variant="light"> إذا كان الطالب ملتحقاً في جامعة حكومية، فيجب أن لا يقل معدله التراكمي عن "تقدير جيد". </ListGroup.Item>
                        <ListGroup.Item action variant="light"> إذا كان الطالب ملتحقاً في جامعة خاصة فيجب أن لا يقل معدله التراكمي عن تقدير "جيد جدا". </ListGroup.Item>
                        <ListGroup.Item action variant="light">أن لا يكون الطالب قادراً على تغطية نفقات الدراسة في الجامعة.</ListGroup.Item>
                        <ListGroup.Item action variant="light">أن لا يكون حاصلاً على منحة أو قرض من جهة أخرى.</ListGroup.Item>
                 </ListGroup>
                  </Col>
              </Row>
              <Row>
                  <Col>
                   <h2 style={{marginTop: '80px'}}>الاستثناءات</h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item action variant="light">تسجيل العائلة ضمن مستحقي معونة وزارة التنمية أو ضمن حالات الفقر المدقع أو المطلق لدى وكالة الأمم المتحدة لإغاثة وتشغيل اللاجئين الفلسطينيين (وكالة الغوث) أو انطباق شروط التسجيل لدى الوكالة عليها.</ListGroup.Item>
                        <ListGroup.Item action variant="light">وجود ظروف اجتماعية خاصة منعت الطالب من الدراسة (مثل مرض عضال أصاب الأم أو الأب  وأدى إلى وفاته/وفاتها).</ListGroup.Item>
                        <ListGroup.Item action variant="light">تخضع الطلبات لمعايير اختيار محددة ويتم قبول الطلبة للاستفادة من برنامج القروض وفقاً لهذه المعايير وتوفر التمويل.</ListGroup.Item>
                 </ListGroup>
                  </Col>
              </Row>
              <Row>
                  <Col>
                  <Link to="/instructions">
                  <Button style={{marginTop: '50px', marginBottom: '50px'}} size="lg">التالي</Button>
                  </Link>
                  </Col>
              </Row>
          </Container>
     </div>
    );
  }
}
