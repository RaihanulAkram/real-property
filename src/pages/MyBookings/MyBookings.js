import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {
        fetch(`https://desolate-thicket-65781.herokuapp.com//myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        fetch(`https://desolate-thicket-65781.herokuapp.com//deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert('Deleted SSuccessfully')
                    const remainingOrders = orders.filter(order => order._id !== id)
                    setOrders(remainingOrders);
                }
            });
        console.log(id);
    };

    return (
        <div>
            {
                orders?.map(order => <div>
                    <div className="container text-center my-5">
                        <Row xs={1} md={3} className
                            ="g-4 my-3">
                            <div className="text-center mx-auto">
                                <Col className=" text-center">
                                    <Card
                                        className=" p-4 shadow-lg rounded-3">
                                        <Card.Img variant="top" src={order.image} />
                                        <Card.Body>
                                            <h4 className="fw-bold text-primary">{order.title}</h4>
                                            <small>Id: {order._id}</small>
                                            <p>Description: {order.description}</p>
                                            <h5 className="text-primary"> Price: <i className="fas fa-dollar-sign"></i> {order.price}</h5>
                                            <Button
                                                onClick={() => handleDelete(order?._id)}
                                                className="btn btn-primary my-2 shadow">Cancel Order</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyBookings;