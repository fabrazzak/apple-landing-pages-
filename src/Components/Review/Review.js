import React from 'react';
import useReview from '../../Hook/useReview/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [reviews,setReview]=useReview();
    
    return (
        <div className='container my-5 py-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                reviews.map(review => <SingleReview review={review} key={review.id}></SingleReview>)
            }

        </div>
        </div>
    );
};

export default Review;