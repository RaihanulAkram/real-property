import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { register } = useForm();

    // const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
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
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Apartment Name</th>
                        <th>Apartment Description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr className="text-center">
                            <td>{index}</td>
                            <td>{pd?.title}</td>
                            <td>{pd?.description}</td>
                            <td>{pd?.image}</td>
                            <td>
                                <form>
                                    <select
                                        className="rounded-3 border-primary px-3 py-1"
                                        onClick={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value={pd?.status}>{pd?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    {/* <input className="btn bg-primary my-2 text-white px-3 py-1" type="submit" /> */}
                                </form>
                            </td>
                            <div className='text-center'>
                                <button
                                    onClick={() => handleDelete(pd?._id)} className="btn bg-danger text-white px-3 py-1">Delete</button>
                            </div>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrder;