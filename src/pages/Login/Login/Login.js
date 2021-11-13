import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };

        newLoginData[field] = value;

        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center justify-content-center my-5">
                    <Col xs={12} md={6}>
                        <Card className='shadow-lg mx-auto my-5 py-5'>
                            <h1 className='text-center text-primary'>Login</h1>
                            {isLoading && <Spinner className="mx-auto my-5 p-5" animation="border" variant="primary" />}
                            {!isLoading && <Form onSubmit={handleLoginSubmit} className='p-5'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"
                                        name="email"
                                        onChange={handleOnChange}
                                        placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your information
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        placeholder="Password" />
                                </Form.Group>
                                <Button className='btn btn-primary d-block mx-auto my-3' type="submit">
                                    Login
                                </Button>
                                <div className="text-center">
                                    <small className="">New User? <NavLink to="/register"
                                        style={{ textDecoration: "none" }}
                                    >Register</NavLink></small>
                                    <p className="mt-3">-------------------------------------</p>
                                    <Button onClick={handleGoogleSignIn} className='btn btn-primary d-block mx-auto my-3' type="submit">
                                        Sign In With Google
                                    </Button>
                                </div>
                            </Form>}
                            {
                                user?.email && <Alert
                                    variant="success" className="w-75 mx-auto">
                                    <h4 className="text-center">Successfully Login</h4>
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

export default Login;