import React from 'react';
import { Col, Card,CardDeck} from 'react-bootstrap'


const  Articles = (props) => {
        const {image, title, context, date} = props.info
 return (
     <React.Fragment>
                <Col xs={12} sm={6}  lg={4}> 
                    <CardDeck style={{width: '100%', height: '250px',marginTop: '20px', boxShadow: '1px 2px 9px'}}>
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
    </React.Fragment>
    )
}
export default Articles