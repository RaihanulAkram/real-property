import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MangeOrder = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    console.log(status);
    useEffect(() => {
        fetch("https://desolate-thicket-65781.herokuapp.com//allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://desolate-thicket-65781.herokuapp.com//statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return (
        <div className="container-fluid mx-auto my-auto">
            <h1 className="text-primary my-3">All orders {orders.length}</h1>
            <div className="row">
                <div className="col">
                    <Table className="table" striped bordered hover>
                        <thead>
                            <tr className="text-primary">
                                <th scope="col">#</th>
                                <th scope="col">Apartment Name</th>
                                <th scope="col">Apartment Description</th>
                                <th scope="col">Image Link</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {orders?.map((pd, index) => (
                            <tbody key={pd._id}>
                                <tr>
                                    <td>{index}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.description}</td>
                                    <td>{pd.image}</td>
                                    <td>
                                        <form className="text-center my-auto" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="text-center mt-2">
                                                <select
                                                    className="px-2 py-1 border-1 border-primary rounded-3"
                                                    onClick={() => handleOrderId(pd?._id)}
                                                    {...register("status")}
                                                >
                                                    <option value={pd?.status}>{pd?.status}</option>
                                                    <option value="approve">approve</option>
                                                    <option value="done">Done</option>
                                                </select>
                                                <input className="p-1 my-2 text-white bg-primary border-0 rounded-3 px-3 py-1" type="submit" />
                                            </div>
                                        </form>
                                    </td>
                                    <div className='text-center'>
                                        <button className="btn bg-danger text-white px-3 py-1 my-2">Delete</button>
                                        <button className="btn bg-primary text-white px-3 py-1">Update</button>
                                    </div>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default MangeOrder;