import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddApartments = () => {

    const { register, handleSubmit, reset, } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://desolate-thicket-65781.herokuapp.com/addApartments', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        reset();
    };
    return (
        <div>
            <Container>
                <Row className="my-5">

                    <h2 className="text-primary text-center">Add an Apartment</h2>
                    <Col xs={12} md={8} className="my-3 mx-auto">

                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder='Title' {...register("title", { required: true })} />
                            <br />

                            <input placeholder='Description' {...register("description")} /><br />

                            <input placeholder='Image URL' {...register("img")} /><br />

                            <input placeholder='Price' type="number" {...register("price")} /><br />

                            <input className='btn btn-primary' type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddApartments;