import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        fetch("https://desolate-thicket-65781.herokuapp.com//makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-primary my-2">Make An Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-primary mt-3"
                    type="submit"
                    value="Make Admin"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;