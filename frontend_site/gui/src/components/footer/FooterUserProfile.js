import React, { Component } from 'react';
import {Container, Row, Col, Image, Badge} from 'react-bootstrap'
import footerlogo from  '../images/aoc.png'
// import './footer.scss'
export default class FooterProfile extends Component {
  render() {
    let Yaers = 0.0
    return (
      <footer>
            <hr  className="custom-hr"/>
            <Container style={{marginTop: '70px', marginBottom: '30px'}}>
            
                       
                        
                    <Row>
                        {/* <Col lg={3} xs={12} md={6}>
                        <h4>تواصل معنا  </h4>
                        <p><Badge>Email :</Badge>araborphanscommittee40@gmail.com</p>
                        <p><Badge>Phone :</Badge>(+88) 111 555 666 </p>
                        <p><Badge>Address :</Badge>40 Baria Sreet 133/2 NewYork City, US </p>
                        </Col> */}
                        {/* <Col lg={3} xs={12} md={6}>
                            <h4>روابط سريعة </h4>
                            <div><a href="/about" style={{direction:'rtl', textAlign: 'right'}}>عن الجمعية</a></div>
                            <div><a href="/register" style={{direction: 'rtl', textAlign: 'right'}}>سجل الان</a></div>
                            <div><a href="/about" style={{direction: 'rtl', textAlign: 'right'}}>عن الجمعية</a></div>

                            
                        </Col> */}
                        <Col lg={6}  xs={12} md={6}>
                          <h4>تابعنا</h4>
                          <div><a  href="https://web.facebook.com/pg/ArabOrphanCommittee/posts/?ref=notif" ><i style={{fontSize: '30px', color: '#3b5998', padding: '10px'}} className="fab fa-facebook-f"></i></a></div>
                          <div><a href="#"><i style={{fontSize: '30px', color:'#1da1f2', padding: '10px'}} className="fab fa-twitter"></i></a></div>
                          <div><i style={{fontSize: '30px', color: '#0077b5', padding: '10px'}} className="fab fa-linkedin-in"></i></div>
                        </Col>
                        <Col lg={6} xs={12} md={6}>
                        <a href="/homepage">
                            <Image src={footerlogo} style={{width: '300px'}} alt="footer logo"/>
                            </a>
                            <h6 style={{textAlign: 'center', marginTop: '20px'}}> جميع الحقوق محفوظة &copy; 2020  جمعية لجنة اليتيم العربي</h6>
                        </Col>
                    </Row>
            </Container>
      </footer>
    );
  }
}


