import React, { Component } from 'react'
import Navbar_students from '../../components/our_students/Navbar_students'
import './students.scss'
import {Container, Row , Col, Breadcrumb} from 'react-bootstrap'
export default class Students extends Component {
    render() {
        return (
            <div>
                <Navbar_students/>
                <Breadcrumb>
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
                </Breadcrumb>
                 <Container>
                     <Row>
                         <Col>
                         <h1> this is page our students  here</h1>
                         </Col>
                     </Row>
                 </Container>
            </div>
        )
    }
}

