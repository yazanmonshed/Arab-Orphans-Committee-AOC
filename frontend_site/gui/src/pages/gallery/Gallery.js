import React, { Component } from 'react'
import Navbargallery from '../../components/navbar_gallery/Navbargallery'
import './Gallery.scss'
import {Container, Row, Col, Image} from 'react-bootstrap'
import img1 from '../images_pages/img-1.jpg'
export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Navbargallery/>

                <Container>
                    <h1> Gallery Section </h1>
                    
                </Container>                
            </div>
        )
    }
}
