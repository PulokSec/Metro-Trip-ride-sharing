import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ride = (props) => {
    const vehicle = props.ride;
    const {title,img,key} = vehicle ;
    return (
    <div className="col-lg-3" >
        <Container>
            <Card >
             <Card.Img className="w-100 p-4" style={{height:"177px"}} variant="top" src={img} />
                <Card.Body>
                <div className="text-center">
                    <Card.Title>{title}</Card.Title>
                    <Link className="btn btn-primary" to={`/destination/${key}`}>Hire Now</Link>
                </div>
             </Card.Body>
             </Card>
        </Container>
    </div>
    );
};

export default Ride;