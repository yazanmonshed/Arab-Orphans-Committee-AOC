import React, { Component } from 'react'
import Navbar_faq from '../../components/navbar_faq/navbar_faq'
import {Breadcrumb, Container, Row,Col,Jumbotron,Button} from 'react-bootstrap'
import Questions from './component_faq/QuestionsFaq'
import FooterMainPage from '../../components/footer/FooterMainPage'

import axios from 'axios'


export default class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],

        }
    }

     componentDidMount() {

        axios.get('http://127.0.0.1:8000/faq_api/')
        .then(res =>  {

            this.setState({data: res.data})
        })

     }

    render() {
        return (
            <div>
                <Navbar_faq />
                <Breadcrumb>
                    <Container>
                        {/* <Link to="/homepage"></Link> */}
                        <Breadcrumb.Item className="item-one" href="#" active>
                           <span>  الأسئلة الأكثر تكرارا </span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="item-one" href="/homepage">
                            <i className="fas fa-home"></i><span> الرئيسية </span>
                        </Breadcrumb.Item>
                        </Container>
                    </Breadcrumb>
                    <Container>
                        <Row>
                         <Col style={{marginTop: '70px', marginBottom: '70px'}}>
                         <h1>الأسئلة الأكثر تكرارا</h1>
                         <p>تحتوي هذه الصفحة على الاسئلة المتكررة من قبل  الطلبة و اولياء الأمور</p>
                         </Col>                                
                        </Row>
                    </Container>
                    {this.state.data.map(res => <Questions key={Math.random()* 8} questions={res.questions} answers={res.answers} />)}
                    <FooterMainPage/>
            </div>
        )
    }
}
