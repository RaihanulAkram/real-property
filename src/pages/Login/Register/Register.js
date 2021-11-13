import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };

        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();

        if (loginData.password !== loginData.password2) {
            alert("Password not matched");
            return;
        }
        registerUser(loginData.name, loginData.email, loginData.password, history);
    }

    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center justify-content-center my-5">
                    <Col xs={12} md={6}>
                        <Card className='shadow-lg mx-auto my-5 py-5'>
                            <h1 className='text-center text-primary'>Register</h1>
                            {!isLoading && <Form onSubmit={handleLoginSubmit} className='p-5'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Full Name</Form.Label>
                                    <Form.Control type="text"
                                        name="name"
                                        onBlur={handleOnBlur}
                                        placeholder="Enter Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your information
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        placeholder="Password" />
                                </Form.Group>
                                <Button className='btn btn-primary d-block mx-auto my-3' type="submit">
                                    Register
                                </Button>
                                <div className="text-center">
                                    <small className="">Already Registerd? Please <NavLink to="/login"
                                        style={{ textDecoration: "none" }}
                                    >Login</NavLink></small>
                                </div>
                            </Form>}

                            {isLoading && <Spinner className="mx-auto my-5 p-5" animation="border" variant="primary" />}

                            {
                                user?.email && <Alert variant="success" className="w-75 mx-auto">
                                    <h4 className="text-center">Successfully Registerd</h4>
                                </Alert>
                            }

                            {
                                authError && <Alert variant="danger" className="w-75 mx-auto">
                                    <h4 className="text-center">{authError}</h4>
                                </Alert>
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;