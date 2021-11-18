import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './../../hooks/useAuth';

const PlaceOrder = () => {

    const [apartments, setApartments] = useState({});
    const { user } = useAuth();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // const notify = () => {
    //     // toast.success("Order Successfully Placed!", {
    //     //     position: toast.POSITION.TOP_CENTER,
    //     // })
    //     alert("Order Placed Successfully")
    // };

    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("http://localhost:5050/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        reset();

    };


    useEffect(() => {
        fetch(`http://localhost:5050/singleApartments/${id}`)
            .then((res) => res.json())
            .then((data) => setApartments(data));
    }, [id]);

    return (
        <div className='container text-center col-lg-4 my-5'>
            <h2 className="text-center text-primary my-5">Apartment Details</h2>
            <Col className='mx-auto w-75'>
                <Card
                    className=" p-4 shadow-lg rounded-3">
                    <Card.Img variant="top" src={apartments.img} />
                    <Card.Body>
                        <h4 className="fw-bold">{apartments?.title}</h4>
                        <p>Description: {apartments.description}</p>
                        <h5>Price: <i className="fas fa-dollar-sign"></i> {apartments.price}</h5>
                    </Card.Body>
                </Card>
            </Col>

            <h2 className="mt-5 mb-3 text-primary">Customer's Details</h2>


            <p className="text-center text-muted mb-2 fw-bold">Click on every input field before pressing Order Now button</p>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("title")}
                        placeholder="Name"
                        defaultValue={apartments.title}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("description")}
                        defaultValue={apartments?.description}
                        placeholder="Description"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        defaultValue={apartments.img}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        defaultValue={apartments.price}
                        type="number"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("name", { required: true })}
                        placeholder="Your Full Name"
                        defaultValue={user.displayName}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                        defaultValue={user.email}
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("phone", { required: true })}
                        placeholder="Your Phone Number"
                        defaultValue=""
                        type="number"
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("address", { required: true })}
                        placeholder="Your Full Address"
                        defaultValue=""
                        type="text"
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("city", { required: true })}
                        placeholder="City"
                        defaultValue=""
                        type="text"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <select {...register("model")} className="p-2 m-2 w-100">
                        <option value="premium">premium</option>
                        <option value="classic">classic</option>
                        <option value="business">business</option>
                    </select>
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <div>
                        <input
                            type="submit"
                            value="Order now"
                            className="btn btn-primary w-50"
                        />
                        {/* <ToastContainer /> */}
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PlaceOrder;