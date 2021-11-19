import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        console.log(data);
        fetch("https://desolate-thicket-65781.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => reset());
    };

    return (
        <div>
            <h1>Review</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-primary mx-auto mt-3"
                    type="submit"
                    value="Give Review"
                />

            </form>
        </div>
    );
};

export default AddReview;