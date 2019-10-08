import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import jj from  './images/jerusalem.jpg'
import j2 from './images/navbar.jpg'
import j1  from './images/j1.jpg'


export default class Carousels extends Component {
    render() {
        return (
          <div>
                <Carousel>
                    <Carousel.Item >
                      <img
                        className="d-block w-100"
                        src={jj}
                        alt="First slide" style={{height: '700px'}}
                      />
                      <Carousel.Caption  style={{marginBottom : '300px', textAlign: 'left', fontSize: '2rem', fontWeight: 'bold'}}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={j2}
                    alt="Third slide" style={{height: '700px',}}
                  />

                  <Carousel.Caption  style={{marginBottom : '300px', textAlign: 'left', fontSize: '2rem', fontWeight: 'bold'}}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={j1}
                    alt="Third slide"   style={{height: '700px'}}
                  />

                  <Carousel.Caption  style={{marginBottom : '300px', textAlign: 'left', fontSize: '2rem', fontWeight: 'bold'}}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item> 
              </Carousel>
                
            </div>
        )
    }
}
