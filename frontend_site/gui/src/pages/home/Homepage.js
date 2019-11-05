import React, { Component } from 'react'
import './Homepage.scss'
import Carousels from '../../components/carousels/Carousels'
import Navbars from '../../components/navbar_home/Navbars' 
import MainFooter from '../../components/footer/FooterMainPage'
import ChartMajor from './components_home/Statstic'
import ChartMoney from './components_home/Statstic2'
import ArticlesList from './containers/ArticlesListViews'
import {Container, Row, Col} from 'react-bootstrap'
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Carousels/>
                <ArticlesList />    
                    <section>
                        <Container>
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
                        </Container>
                    </section>
                <MainFooter/>        
            </div>
        )
    }
}


