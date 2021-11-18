import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch('http://localhost:5050/allReview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className="text-center text-primary mt-5 mb-2">Review</h1>
            <h3 className="text-center">Total reviews {reviews.length}</h3>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                >
                </Review>)
            }
        </div>
    );
};

export default Reviews;