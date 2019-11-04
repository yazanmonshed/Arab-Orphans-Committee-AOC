import React from 'react';
import {Container, Row, Col, Card,CardDeck} from 'react-bootstrap'


const  Articles = (props) => {
        const {image, title, context, date} = props.info
 return (
<Container>
        <Row>
            <Col> 
            <CardDeck>
            <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body> 
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {context}
            </Card.Text>    
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{date}</small>
            </Card.Footer>
        </Card>
        </CardDeck>
            </Col>
        </Row>

    </Container>
    )
}
export default Articles