import React, { Component } from 'react'
import Navbargallery from '../../components/navbar_gallery/Navbargallery'
import './Gallery.scss'
import {Container, Row, Col} from 'react-bootstrap'
export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Navbargallery/>

                <Container>
                    <Row>
                        <Col>
                        <h1 className="item-in-page">this is gallery </h1>

                        </Col>
                    </Row>
                </Container>                
            </div>
        )
    }
}
