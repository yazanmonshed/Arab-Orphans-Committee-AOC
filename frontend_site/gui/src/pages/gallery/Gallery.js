import React, { Component } from 'react'
import Navbargallery from '../../components/navbar_gallery/Navbargallery'
import './Gallery.scss'
import {Container, Row, Col, Image, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import img1 from '../images_pages/img-1.jpg'
import FooterMainPage from '../../components/footer/FooterMainPage'
import axios from 'axios'
import Images from './components/Images'
export default class Gallery extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            images : [],
        }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/images/')
        .then(res =>  {

            this.setState({images: res.data})
        })

     }



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
                            <Col>
                                <h1 style={{textAlign: 'center'}}>صورة طلاب المدرسة الصناعية في القدس</h1>
                            </Col>
                        </Row>
                    <Row>
                      {this.state.images.map( (res) => <Images images={res.images} />  )}
                      </Row>
                      </Container>
                <FooterMainPage/>        
            </div>
        )
    }
}
