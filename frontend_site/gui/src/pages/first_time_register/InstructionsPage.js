import React, { Component } from 'react';
import {Container, Row, Col,ListGroup, Button} from 'react-bootstrap'
import NavbarSub from '../../components/navbar_sub_pages/NavbarSub'

import {Link} from 'react-router-dom'

export default class Instructions extends Component {
  render() {
    return (
      <div> 
      <NavbarSub/>
        <Container style={{direction: 'rtl'}}>   
            <Row>
                <Col style={{marginTop: '80px'}}>
                <h1 style={{textAlign: 'center'}}>تعليمات تقديم طلب القرض</h1>
                <ListGroup variant="flush">
                    <h3 style={{marginTop: '80px'}}>يرجى تعبئة كافة البيانات الموجودة في طلب القرض</h3>
                    {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item> */}
                </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <ListGroup variant="flush">
                    <h3 style={{marginTop: '80px'}}>لقبول طلب القرض يرجى إرفاق الوثائق التالية</h3>
                    <ListGroup.Item action variant="light">صورة شخصية حديثة</ListGroup.Item>
                    <ListGroup.Item action variant="light">صورة عن دفتر العائلة (جميع أفراد الأسرة)</ListGroup.Item>
                    <ListGroup.Item action variant="light">صورة عن البطاقة الشخصية الصادرة عن دائرة الأحوال المدنية أو وثيقة السفر. </ListGroup.Item>
                    <ListGroup.Item action variant="light">كشف مصدق لعلامات امتحان شهادة الدراسة الثانوية العامة.</ListGroup.Item>
                    <ListGroup.Item action variant="light">كشف علامات الطالب الملتحق في الجامعة.</ListGroup.Item>
                    <ListGroup.Item action variant="light">إثبات قبول في الجامعة في البرنامج التنافسي لطلبة الثانوية العامة.   </ListGroup.Item>
                    <ListGroup.Item action variant="light">إثبات طالب (مستوى وتخصص) للطلبة الملتحقين بالجامعات إن كانوا ضمن البرنامج العادي أو الموازي أو التجسير.</ListGroup.Item>
                    <ListGroup.Item action variant="light">شهادة من الجامعة بأن الطالب يدرس على نفقته الخاصة ولا يتلقى قروضاً أو مساعدات من أي جهة كانت.</ListGroup.Item>
                    <ListGroup.Item action variant="light">وصل الرسوم النسخة الأصلية مختوم من الجامعة ومتضمناً كشف الساعات المعتمدة التي تم تسجيلها ( البرنامج ).   </ListGroup.Item>
                    <ListGroup.Item action variant="light">إثبات راتب/دخل لجميع أفراد الأسرة العاملين/ كشف الضمان الاجتماعي إن وجد.  </ListGroup.Item>
                    <ListGroup.Item action variant="light">شهادة رسمية تبين وضع الطالب الاجتماعي والمالي (في حال كانت عائلة الطالب تتلقى مساعدة من صندوق المعونة الوطنية أو صندوق الزكاة أو وكالة الأمم المتحدة لغوث وتشغيل لاجئي فلسطين) إن وجدت. </ListGroup.Item>
                    <ListGroup.Item action variant="light">شهادة الوفاة في حالة وفاة والد الطالب أو والدته.</ListGroup.Item>
                    <ListGroup.Item action variant="light">عقد إيجار المنزل إن وجد.</ListGroup.Item>
                    <ListGroup.Item action variant="light">وصولات جديدة للدفع أو ورقة رسمية من الجامعة/ الكلية/ المعهد تشهد بأن أخوة الطالب/الطالبة على مقاعد الدراسة.</ListGroup.Item>
                    <ListGroup.Item action variant="light">إثبات قيمة القرض أو الدفعات في حال حصول الأسرة على قرض أو أكثر والغاية من القروض1.</ListGroup.Item>
                    <ListGroup.Item action variant="light">وصولات الدفع وإثباتات الحالات المرضية لأحد أفراد الأسرة في حال وجودها.</ListGroup.Item>
                </ListGroup>
                <h3 style={{marginTop: '80px', color: '#F00'}}>في حال إعطاء معلومات خاطئة أو مضللة سيتم استبعاد طلب القرض فورا.</h3>
                <h6 style={{marginTop: '40px'}}>للجنة الحق في تحديد القروض التي يتم أخذها بعين الاعتبار عند القيام بدراسة الوضع الاقتصادي للعائلة على أن تكون تلك القروض لتوفير احتياجات معيشية أساسية</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                  <Link to="/firsttimeregister">
                  <Button style={{marginTop: '50px', marginBottom: '50px'}} size="lg">بدء عملية تقديم الطلب</Button>
                  </Link>
                 
                </Col>
                
              </Row>
        </Container>   
     </div>
    );
  }
}
