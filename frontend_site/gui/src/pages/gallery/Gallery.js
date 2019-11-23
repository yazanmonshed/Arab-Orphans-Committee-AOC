import React, { Component } from 'react'
import Navbargallery from '../../components/navbar_gallery/Navbargallery'
import './Gallery.scss'
import {Container, Row, Col, Image, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import img1 from '../images_pages/img-1.jpg'
import FooterMainPage from '../../components/footer/FooterMainPage'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Navbargallery/>
                <Breadcrumb>
                    <Container>
                        {/* <Link to="/homepage"></Link> */}
                        <Breadcrumb.Item className="item-one" href="#" active>
                           <span>  معرض الصور </span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="item-one" href="/homepage">
                            <i className="fas fa-home"></i><span> الرئيسية </span>
                        </Breadcrumb.Item>
                        </Container>
                    </Breadcrumb>
                  <Container>
                    <Row>
                        <Col xs={6} md={4}>
                        <Image style={{width: '400px', height: '300px'}} src={img1} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image style={{width: '400px', height: '500px'}} src={img1} thumbnail  />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image style={{width: '400px', height: '300px'}} src={img1} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image style={{width: '400px', height: '500px'}} src={img1} thumbnail />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image style={{width: '400px', height: '500px'}} src={img1} thumbnail  />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image style={{width: '400px', height: '300px'}} src={img1} thumbnail />
                        </Col>
                    </Row>                                        
                </Container>        
                <FooterMainPage/>        
            </div>
        )
    }
}
