import React from 'react';
import { useForm } from 'react-hook-form';
const AddAProduct = () => {
    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("https://secret-castle-91056.herokuapp.com/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Product added succesfully');
                    reset();
                }
            })

    }
    return (
        <div>
            <h1>Add a Product</h1>
            <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" defaultValue="" {...register("name")} required />
                <input alt="image adding" placeholder="img" defaultValue="" {...register("img")} required />



                <input placeholder="description" defaultValue="" {...register("description")} required />
                <input placeholder="price" defaultValue="" {...register("price")} required />

                <input className="btn btn-danger" type="submit" />

            </form>
        </div>
    );
};

export default AddAProduct;