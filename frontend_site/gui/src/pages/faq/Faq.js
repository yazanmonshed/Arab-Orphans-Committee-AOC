import React, { Component } from 'react'
import Navbar_faq from '../../components/navbar_faq/navbar_faq'
import {Breadcrumb, Container} from 'react-bootstrap'
export default class Faq extends Component {
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
            </div>
        )
    }
}
