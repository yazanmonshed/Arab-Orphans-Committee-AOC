import React, { Component } from 'react'
import './Homepage.scss'
import Carousels from '../../components/carousels/Carousels'
import Navbars from '../../components/navbar_home/Navbars' 
import MainFooter from '../../components/footer/FooterMainPage'
import ChartMajor from './components_home/Statstic'
import ChartMoney from './components_home/Statstic2'
import ArticlesList from './containers/ArticlesListViews'
import {Container, Row, Col} from 'react-bootstrap'
import QrFiles from './components_home/QrFiles'
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Carousels/>
                <ArticlesList />    
                    <section>
                        <Container> 
                        </Container>
                        <div style={{background: 'rgb(249, 249, 249)', marginTop: '70px', paddingBottom: '70px'}}>
                        <Container>
                        <Row>   
                            <Col style={{marginTop: '70px'}}>
                            <h5>بلغ عدد الطلاب الذين تمت تغطية تكاليف دراستهم الجامعية في الاردن 125 طالبًا وطالبة للعام الدراسي  2018/ 2019 حيث بلغت قيمة الفروض والمنح المصروفة مبلغًا  وقدره 144857 دينار, منهم 14  طالبًا و طالبة موزعين كما يلي </h5>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '50px'}}>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                {/* <Container></Container> */}
                            <h3 style={{textAlign: 'center'}}>توزيع الطلاب المستفيدين حسب التخصصات </h3>
                            <ChartMajor />
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                            <h3 style={{textAlign: 'center'}}>توزيع الطلاب  حسب القروض والمنح </h3>
                                <ChartMoney />
                            </Col>
                        </Row>
                        </Container>
                        </div>
                        <div>
                            <Container>
                            <Row  style={{marginTop: '30px',}}>
                        <Col lg={6}>
                                <QrFiles/>
                            </Col>
                            <Col lg={6}>
                                    <h5>احصل على نموذج تقديم القرض من خلال الرابط السريع التالي</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <MessengerCustomerChat pageId="<YOUR_PAGE_ID>" appId="<YOUR_APP_ID>" />

                            </Col>
                        </Row>  
                        </Container>
                       </div>
                    </section>
                <MainFooter/>        
            </div>
        )
    }
}


