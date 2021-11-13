import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("https://secret-castle-91056.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added succesfully');
                    reset();
                }
            })

    }
    return (
        <div>
            <h1>Give Review</h1>
            <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" defaultValue={user?.displayName} {...register("name")} required />




                <input placeholder="email" defaultValue={user?.email} {...register("email")} required />

                <input placeholder="rating(0-5)" type="number" {...register("rating", { min: 0, max: 5 })} />

                <input type="text" placeholder="text" defaultValue="Give Review" {...register("text")} required />

                <input className="btn btn-danger" type="submit" />

            </form>
        </div>
    );
};

export default Review;