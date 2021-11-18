import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreApartment = (props) => {
    const { _id, title, description, price, img } = props.apartment;
    return (
        <div>
            <Col className=" text-center">
                <Card
                    className=" p-4 shadow-lg rounded-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h4 className="fw-bold text-primary">{title}</h4>
                        <small>Id: {_id}</small>
                        <p>Description: {description}</p>
                        <h5 className="text-primary"> Price: <i className="fas fa-dollar-sign"></i> {price}</h5>
                        <Link className="btn btn-primary my-2 shadow" to={`/placeOrder/${_id}`}>Buy Now</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ExploreApartment;