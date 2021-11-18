import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Review = (props) => {
    const { _id, email, comments } = props.review;
    return (
        <div className="text-center">
            <Container >
                <Row xs={12} md={6} lg={4} className="d-flex justify-content-center align-items-center">
                    <Col className="w-75">
                        <Card className="px-5 py-5 my-3">
                            <h4>Customer Email: {email}</h4>
                            <small>Customer Id: {_id}</small>
                            <p>Customer Comment: {comments}</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;